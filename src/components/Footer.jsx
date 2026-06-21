import { site } from "../data/site";
import { cn } from "../lib/utils";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-950/50"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {site.name}. All rights reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-600"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
