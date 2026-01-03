import { AuthCard } from "@nexteranga/ui/components/auth/auth-card";
import { VerifyEmailForm } from "@nexteranga/ui/components/auth/verify-email-form";
import { VerifyEmailSkeleton } from "@nexteranga/ui/components/auth/verify-email-skeleton";
import { Suspense } from "react";

export default function VerifyEmailPage() {
  return (
    <AuthCard title="Verify Email" description="Confirming your email address">
      <Suspense fallback={<VerifyEmailSkeleton />}>
        <VerifyEmailForm />
      </Suspense>
    </AuthCard>
  );
}
