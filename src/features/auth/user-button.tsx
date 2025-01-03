"use client";
import { useRef } from "react";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { logout } from "./actions/sign-out";
import { updateImage } from "../dashboard/actions/updateImage";

export const UserButton = ({ user, email }: { user: User; email: string }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const avatarFallback =
    user && user.name
      ? user.name.charAt(0).toUpperCase()
      : email.charAt(0).toUpperCase() ?? "A";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      toast.error("No file selected");
      return;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
    if (!validTypes.includes(file.type)) {
      toast.error(
        "Invalid file type. Only JPG,SVG,PNG OR JPEG images are allowed."
      );
      return;
    }

    // Validate file size (1MB = 1,048,576 bytes)
    const maxSize = 1 * 1024 * 1024; // 1MB
    if (file.size > maxSize) {
      toast.error("File size exceeds 1MB.");
      return;
    }

    // Convert the file to a Base64 string
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;

      updateImage(email, base64String).then((res) => {
        if (res) {
          toast.success("Image Uploaded!");
          router.refresh();
        } else {
          toast.error("Error Occurred in Upload Image");
        }
      });
    };

    reader.onerror = () => {
      toast.error("Unable to save Image");
    };

    reader.readAsDataURL(file);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarImage src={user.image ? user.image : ""} />
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar
            className="size-[52px]  border border-neutral-300"
            onClick={() => inputRef.current?.click()}
          >
            <AvatarImage src={user.image ? user.image : ""} />
            <AvatarFallback className="bg-neutral-200 font-medium text-xl text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <input
            className="hidden"
            ref={inputRef}
            accept=".jpg,.png,.jpeg,.svg"
            onChange={handleImageUpload}
            type="file"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
              {user.name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <Separator />
        <DropdownMenuItem
          onClick={() => {
            logout();
            router.refresh();
          }}
          className="h-10 flex items-center justify-center text-red-600 font-medium cursor-pointer"
        >
          <LogOut className="size-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
