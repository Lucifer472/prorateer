"use client";
import { z } from "zod";
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

import { RegisterSchema } from "./schema";
import { register } from "./actions/register";
import { toast } from "sonner";

export const RegisterCard = () => {
  const [isPending, startTransition] = useTransition();

  const [isSent, setSent] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleRegister = (v: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(v).then((res) => {
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
        <CardTitle className="text-2xl font-semibold">
          Account Creation
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          This Admin Only Register Please do not register if you are a user
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      {!isSent ? (
        <CardContent className="px-7">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter Full Name"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="Enter Email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                variant={"primary"}
                disabled={isPending}
                size={"lg"}
                className="w-full mt-4"
              >
                Register
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
            <span className="text-sm">Sign Up with Google</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
