"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "../button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { PasswordInput } from "../password-input";
import { Separator } from "../separator";
import { AuthCard } from "./auth-card";
import { SocialAuthButtons } from "./social-buttons";

import { signIn } from "@nexteranga/auth/client";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setIsLoading(true);
    await signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: "/dashboard",
      fetchOptions: {
        onError: (ctx: { error: { message: string } }) => {
          toast.error(ctx.error.message);
          setIsLoading(false);
        },
        onSuccess: () => {
          router.push("/dashboard");
          toast.success("Welcome back!");
        },
      },
    });
  }

  const handleSocialSignIn = async (provider: "google" | "github") => {
    setIsLoading(true);
    await signIn.social({
      provider,
      callbackURL: "/dashboard",
      fetchOptions: {
        onError: (ctx: { error: { message: string } }) => {
          toast.error(ctx.error.message);
          setIsLoading(false);
        },
        onSuccess: () => {
          // Redirect handled by Better Auth
        },
      },
    });
  };

  return (
    <AuthCard
      title="Welcome back"
      description="Login to your NexTeranga account"
      footer={
        <div className="text-center text-sm text-muted-foreground w-full">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign up
          </Link>
        </div>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <SocialAuthButtons
        isLoading={isLoading}
        onGoogleClick={() => handleSocialSignIn("google")}
        onGithubClick={() => handleSocialSignIn("github")}
      />
    </AuthCard>
  );
}
