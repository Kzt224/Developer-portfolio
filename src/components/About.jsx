import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { site } from "../data/site";
import { skills } from "../data/skills";

const techStack = Object.values(skills).flat();

export function About() {
  const initials = site.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section
      id="about"
      className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        >
          About
        </h2>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          <Avatar
            className="h-24 w-24 shrink-0 border-2 border-zinc-200 dark:border-zinc-800"
            aria-hidden
          >
            <AvatarImage src={site.avatar} alt="" />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="text-zinc-600 dark:text-zinc-400 [&_+_p]:mt-4">
              {site.bio}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Tech stack
          </h3>
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-normal"
                role="listitem"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
