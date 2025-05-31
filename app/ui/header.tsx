import { navlinks } from "../type/type";
import Link from "next/link";
export default function Header() {
  const Navlinks: navlinks[] = [
    {
      name: "Send Top-up",
      href: "/topup",
    },
    {
      name: "Receive",
      href: "/receive",
    },
    {
      name: "Receive Gift Cards",
      href: "/gift-cards",
    },
    {
      name: "Company",
      href: "/company",
    },
    {
      name: "Help",
      href: "/help",
    },
  ];

  return (
    <header className="">
      <div className=""></div>
      <nav className="">
        <ul className="">
          {Navlinks.map((link, index) => {
            return (
              <li key={index} className="">
                <Link href={link.href} className="">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
