import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
  const [hydrated, setHydrated] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <button
        className="contrast theme-switcher"
        aria-label={`Turn ${theme === "dark" ? "off" : "on"} dark mode`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Turn {theme === "dark" ? "off" : "on"} dark mode
      </button>
    </>
  );
}
