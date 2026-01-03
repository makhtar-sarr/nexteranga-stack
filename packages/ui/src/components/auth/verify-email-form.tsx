"use client";

import { authClient } from "@nexteranga/auth/client";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../button";

export function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setError("Missing verification token.");
      return;
    }

    const verify = async () => {
      try {
        await authClient.verifyEmail({
          query: {
            token,
          },
          fetchOptions: {
            onSuccess: () => {
              setStatus("success");
              toast.success("Email verified successfully!");
              setTimeout(() => router.push("/dashboard"), 3000);
            },
            onError: (ctx) => {
              setStatus("error");
              setError(ctx.error.message || "Email verification failed.");
              toast.error(ctx.error.message || "Email verification failed.");
            },
          },
        });
      } catch {
        setStatus("error");
        setError("An unexpected error occurred.");
      }
    };

    verify();
  }, [token, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground text-sm">Verifying your email...</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Email Verified!</h3>
          <p className="text-muted-foreground text-sm">
            Your email has been verified. Redirecting you to the dashboard...
          </p>
        </div>
        <Button asChild className="mt-4">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
      <XCircle className="h-12 w-12 text-destructive" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Verification Failed</h3>
        <p className="text-destructive text-sm">{error}</p>
      </div>
      <Button asChild variant="outline" className="mt-4">
        <Link href="/sign-in">Back to Sign In</Link>
      </Button>
    </div>
  );
}
