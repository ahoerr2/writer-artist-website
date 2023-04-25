import Link from "next/link";
import { navLinks } from "@/lib/navlinks";
import { useTheme } from "next-themes";
export default function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <strong>Writer Website</strong>
          </li>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link key={index} href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <button
              class="contrast theme-switcher"
              aria-label="Turn off dark mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Turn off dark mode
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
