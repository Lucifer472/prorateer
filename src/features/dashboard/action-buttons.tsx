"use client";
import Link from "next/link";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { removeBlog } from "./actions/blog";

export const ActionButton = ({
  data,
}: {
  data: {
    url: string;
    title: string;
  };
}) => {
  const router = useRouter();

  const handleDelete = (url: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Blog? It can not be Recovered."
    );

    if (!confirmed) {
      return; // User canceled the deletion
    }

    removeBlog(url).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }

      if (res.success) {
        toast.success(res.success);
        router.refresh();
      }
    });
  };

  return (
    <div className="col-span-3 text-center py-2 px-4 flex items-center justify-evenly gap-1">
      <Button variant={"default"} asChild>
        <Link href={`/admin/list/${data.url}`}>Edit</Link>
      </Button>
      <Button variant={"outline"} asChild>
        <Link href={`/article/${data.url}`}>View</Link>
      </Button>
      <Button variant={"destructive"} onClick={() => handleDelete(data.url)}>
        Delete
      </Button>
    </div>
  );
};
