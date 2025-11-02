import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center space-y-6 text-white"
      style={{
        backgroundImage: "url('/error.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-2xl font-semibold leading-7">404</p>
      <h1 className="scroll-m-20 text-center text-7xl font-extrabold tracking-tight text-balance">
        Page not found
      </h1>
      <p className="text-2xl font-semibold leading-7">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button variant="ghost" asChild>
        <Link href="/">
          <ArrowLeftIcon className="size-4" />
          Back to home
        </Link>
      </Button>
    </main>
  );
}
