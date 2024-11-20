"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { LoginSchema } from "./schema";
import { login } from "./actions/login";

export const SignInCard = () => {
  const [isPending, startTransition] = useTransition();

  const [isSent, setSent] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleLogin = (v: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(v).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }
        if (res.success) {
          setSent(true);
          toast.success("Email Sent!");
        }
      });
    });
  };

  return (
    <Card className="w-full h-full max-w-[365px]">
      <CardHeader className="px-7">
        <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          This Admin Sign-In and is not for User
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      {!isSent ? (
        <CardContent className="px-7">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={isPending}
                        {...field}
                        placeholder="Enter Email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant={"primary"}
                disabled={isPending}
                size={"lg"}
                className="w-full"
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      ) : (
        <CardContent className="px-7">
          <p className="p-2 bg-emerald-200 border border-emerald-400 text-emerald-500">
            Email Sent Successfully Please check you are inbox!
          </p>
        </CardContent>
      )}
      <Separator className="mb-4" />
      {!isSent && (
        <CardFooter>
          <Button
            variant={"outline"}
            disabled={isPending}
            size={"lg"}
            className="w-full"
          >
            <FcGoogle className="size-6" />{" "}
            <span className="text-sm">Sign In with Google</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
