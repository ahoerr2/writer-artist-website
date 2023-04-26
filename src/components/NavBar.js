import Link from "next/link";
import { navLinks } from "@/lib/navlinks";
import DarkModeButton from "@/components/DarkModeButton";
export default function NavBar() {
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
            <DarkModeButton />
          </li>
        </ul>
      </nav>
    </>
  );
}
