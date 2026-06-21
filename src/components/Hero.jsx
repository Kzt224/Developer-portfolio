import { Github, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { site } from "../data/site";
import { cn } from "../lib/utils";

export function Hero() {
  const githubLink = site.social.find((s) => s.icon === "github")?.href ?? "#";

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:min-h-[90vh]"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl"
      >
        {site.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
        {site.role}
      </p>
      <p className="mt-2 max-w-xl text-base text-zinc-500 dark:text-zinc-500">
        {site.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="h-11 px-6 transition-opacity hover:opacity-90"
        >
          <a href="#projects">
            View Projects
            <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" aria-hidden />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-11 px-6">
          <a href="#contact">Contact</a>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-full"
          aria-label="GitHub profile"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" aria-hidden />
          </a>
        </Button>
      </div>

      <a
        href="#about"
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2",
          "text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-600"
        )}
        aria-label="Scroll to About"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
