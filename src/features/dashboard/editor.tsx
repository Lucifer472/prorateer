"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import ImageTool from "@editorjs/image";
import { BlogContent } from "@/types";

const Editor = ({
  initialData,
  setData,
}: {
  initialData?: BlogContent;
  setData: (v: any) => void;
}) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: {
          class: EditorjsList as any,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "https://images.drivingexamexpert.com/upload/blog.php", // Your backend file uploader endpoint
            },
          },
        },
      },
      data: initialData,
      placeholder: "Let`s write an awesome Blogs!",
      onChange: async () => {
        if (editorRef.current) {
          try {
            const outputData = await editorRef.current.save();
            setData(outputData); // Update state with the latest content
          } catch {
            toast.error("Failed to save editor data");
          }
        }
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current = null;
      }
    };
  }, [setData, initialData]);

  return (
    <div className="space-y-2 px-2">
      <span className="font-medium text-sm">Blog Content</span>
      <div className="border border-neutral-300 shadow-sm focus:outline rounded-md w-full flex items-center justify-center py-6">
        <div
          id="editorjs"
          ref={editorRef as any}
          className="prose w-full"
        ></div>
      </div>
    </div>
  );
};

export default Editor;
