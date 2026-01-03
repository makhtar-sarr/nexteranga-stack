import { Skeleton } from "../skeleton";

export function VerifyEmailSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex flex-col items-center">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  );
}
