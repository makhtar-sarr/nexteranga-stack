import { cn } from "@nexteranga/ui/lib/utils";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

interface AuthCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description?: string;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export function AuthCard({
  title,
  description,
  logo,
  footer,
  children,
  className,
  ...props
}: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-sm mx-auto", className)} {...props}>
      <CardHeader className="text-center space-y-2">
        {logo && <div className="mx-auto mb-2">{logo}</div>}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter className="flex justify-center">{footer}</CardFooter>
      )}
    </Card>
  );
}
