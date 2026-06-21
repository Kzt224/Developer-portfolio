import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ThemeContext = createContext(undefined);

function getInitialTheme() {
  if (typeof window === "undefined") return "system";
  return localStorage.getItem("theme") || "system";
}

function getResolvedTheme(theme) {
  if (theme === "dark") return "dark";
  if (theme === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState("light");

  const setTheme = useCallback((next) => {
    setThemeState(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (next === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", dark);
      localStorage.removeItem("theme");
    }
    setResolvedTheme(getResolvedTheme(next));
  }, []);

  useEffect(() => {
    const stored = getInitialTheme();
    const resolved = getResolvedTheme(stored);
    setResolvedTheme(resolved);

    if (stored === "dark" || (stored === "system" && resolved === "dark")) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const dark = m.matches;
      document.documentElement.classList.toggle("dark", dark);
      setResolvedTheme(dark ? "dark" : "light");
    };
    m.addEventListener("change", handler);
    return () => m.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
