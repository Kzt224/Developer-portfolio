import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { skills } from "../data/skills";

const categories = Object.keys(skills);

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        >
          Skills
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Technologies and tools I work with, by category.
        </p>

        <Tabs defaultValue={categories[0]} className="mt-10">
          <TabsList
            className="flex w-full flex-wrap justify-start gap-1 bg-zinc-100 p-1 dark:bg-zinc-900"
            role="tablist"
            aria-label="Skill categories"
          >
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-zinc-800"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent
              key={cat}
              value={cat}
              className="mt-6"
              role="tabpanel"
              aria-label={cat + " skills"}
            >
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={cat + " skills"}
              >
                {skills[cat].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-normal"
                    role="listitem"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
