import { Button } from "@nexteranga/ui/components/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        NexTeranga Stack
      </h1>
      <p className="text-xl text-muted-foreground max-w-[600px]">
        The ultimate monorepo stack for modern African SaaS applications.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
