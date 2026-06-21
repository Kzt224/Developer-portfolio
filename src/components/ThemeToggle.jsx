import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={cn("relative rounded-full", className)}
          >
            <Sun
              className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
              aria-hidden
            />
            <Moon
              className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
              aria-hidden
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {isDark ? "Light mode" : "Dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
