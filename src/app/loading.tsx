import React from "react";
import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Container className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-sm text-muted-foreground">Loading content...</p>
      </Container>
    </div>
  );
}

