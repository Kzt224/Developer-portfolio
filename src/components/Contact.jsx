import { Mail, Github, Linkedin, Twitter,Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { site } from "../data/site";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook
};

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Reach out for collaboration, opportunities, or a quick chat.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <Button asChild size="lg" className="h-12 px-6">
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden />
              {site.email}
            </a>
          </Button>
          <div className="flex gap-2" role="list" aria-label="Social links">
            {site.social.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) return null;
              return (
                <Button
                  key={s.icon}
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                  role="listitem"
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
