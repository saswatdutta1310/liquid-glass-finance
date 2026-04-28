import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <>
      <header className="w-full py-5 px-8 flex items-center justify-between relative z-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="LendWise" width={32} height={32} className="h-8 w-8" />
          <span className="text-foreground font-semibold text-lg tracking-tight">LendWise</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link to="/features" className="flex items-center gap-1 px-3 py-2 text-foreground/90 text-base hover:text-foreground transition-colors">
            Features <ChevronDown className="h-4 w-4 opacity-60" />
          </Link>
          <button className="flex items-center gap-1 px-3 py-2 text-foreground/90 text-base hover:text-foreground transition-colors">
            Solutions <ChevronDown className="h-4 w-4 opacity-60" />
          </button>
          <button className="px-3 py-2 text-foreground/90 text-base hover:text-foreground transition-colors">
            Plans
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-foreground/90 text-base hover:text-foreground transition-colors">
            Learning <ChevronDown className="h-4 w-4 opacity-60" />
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-foreground/80 text-sm hover:text-foreground">
            Log in
          </button>
          <Button variant="heroSecondary" size="sm" className="rounded-full px-4 py-2">
            Sign Up
          </Button>
        </div>
      </header>
      <div className="mt-[3px] w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </>
  );
}