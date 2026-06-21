import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          A selection of recent work — product, infra, and side projects.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-shadow hover:shadow-md dark:hover:shadow-zinc-900/50"
            >
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1.5 p-6 pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-2">
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Technologies"
                >
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="font-normal"
                      role="listitem"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 px-6 pb-6 pt-2">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github className="mr-1.5 h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                </Button>
                {project.live && (
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo: ${project.title}`}
                    >
                      <ExternalLink className="mr-1.5 h-4 w-4" aria-hidden />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
