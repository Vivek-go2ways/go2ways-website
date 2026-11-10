import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="text-6xl sm:text-8xl font-black text-primary font-heading">404</h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
          Page Not Found
        </h2>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button size="md">Return to Homepage</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

