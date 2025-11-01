"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type ErrorUIProps = {
  title: string;
  description?: string;
};

export function ErrorUI({
  title,
  description = "An unknown error occurred",
}: ErrorUIProps) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
