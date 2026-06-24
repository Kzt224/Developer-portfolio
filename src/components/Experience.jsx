import { experience } from "../data/experience";
import { cn } from "../lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="experience-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        >
          Experience
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Roles and impact over the years.
        </p>

        <div className="mt-10" role="list">
          {experience.map((item, i) => (
            <div
              key={item.id}
              role="listitem"
              className={cn(
                "relative flex gap-6 pb-10 last:pb-0",
                i < experience.length - 1 &&
                "before:absolute before:left-[7px] before:top-6 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800"
              )}
            >
              <div
                className="mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
