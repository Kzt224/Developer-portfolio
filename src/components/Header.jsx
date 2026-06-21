import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "../data/site";
import { cn } from "../lib/utils";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm dark:focus-visible:ring-zinc-600";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/80"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          className="font-semibold text-zinc-900 dark:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm"
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden",
          open ? "block" : "hidden"
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(linkClass, "block py-2")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <ThemeToggle className="sm:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
