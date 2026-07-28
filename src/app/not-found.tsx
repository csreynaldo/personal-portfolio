import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <div className="mb-6 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
          <span className="text-primary">~</span>
          <span>$</span>
          <span>cat /error/404.log</span>
        </div>
        <h1 className="text-foreground mb-4 text-8xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-sm">
          The requested path does not exist on this server.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            <span className="mr-1 font-mono text-xs text-primary-foreground/70">$</span>
            cd ~
          </Link>
        </Button>
      </div>
    </div>
  );
}
