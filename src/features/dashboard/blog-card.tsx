"use client";

import { z } from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { blogCategory } from "@/constant";
import { cn } from "@/lib/utils";

import { BlogSchema } from "./schema";
import { addBlog } from "./actions/blog";

const Editor = dynamic(() => import("./editor"), { ssr: false });

export const BlogCard = () => {
  const [content, setContent] = useState<any>(null);
  const [isChecked, setIsChecked] = useState(false);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      category: "health",
      description: "",
      keywords: "",
      title: "",
      readMore: isChecked,
    },
  });

  const handleReadMore = () => {
    if (form.getValues("readMore")) {
      form.setValue("readMore", false);
      setIsChecked(false);
    } else {
      form.setValue("readMore", true);
      setIsChecked(true);
    }
  };

  const handleBlog = (v: z.infer<typeof BlogSchema>) => {
    if (!content) {
      toast.error("Please Add Something to Add Blog");

      return;
    }
    startTransition(() => {
      addBlog(v, content as any).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }

        if (res.success) {
          toast.success("Blog Added!");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      });
    });
  };

  return (
    <Card className="w-full my-6 px-2">
      <CardHeader>
        <CardTitle>Add New Blog</CardTitle>
        <CardDescription>Use this Form to add new Blogs</CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleBlog)} className="space-y-6">
            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="The shift towards hybrid cars: benefits and challenges"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Description</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Explore the rise of hybrid cars, their benefits, challenges, and what the future holds for environmentally friendly transportation."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Keywords</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="hybrid cars, benefits of hybrid cars, challenges of hybrid cars, electric vehicles, eco-friendly cars"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Blog Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {blogCategory.map((c) => (
                          <SelectItem value={c.value} key={c.value}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-start w-full gap-x-2">
                <p>Read More :</p>
                <button
                  type="button"
                  onClick={handleReadMore}
                  className="size-4 rounded-full border-2 border-gray-500 flex items-center justify-center"
                >
                  <span
                    className={cn(
                      isChecked && "size-2 rounded-full bg-sky-500"
                    )}
                  ></span>
                </button>
              </div>
              <Editor setData={setContent} />
            </div>
            <Button variant={"primary"} size={"lg"} disabled={isPending}>
              Add Blog
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
