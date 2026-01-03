import { ResetPasswordForm } from "@nexteranga/ui/components/auth/reset-password-form";
import Link from "next/link";

interface ResetPasswordPageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <div className="text-center p-6 bg-background rounded-lg shadow-sm border">
        <p className="text-destructive mb-4 font-medium">
          Invalid or missing token.
        </p>
        <Link href="/sign-in" className="text-primary hover:underline text-sm">
          Go back to Sign In
        </Link>
      </div>
    );
  }

  return <ResetPasswordForm token={token} />;
}
