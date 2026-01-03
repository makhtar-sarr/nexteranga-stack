import { auth } from "@nexteranga/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 
        This layout acts as a "hard" security guard.
        Data fetching for children will only happen if this check passes.
      */}
      <main>{children}</main>
    </div>
  );
}
