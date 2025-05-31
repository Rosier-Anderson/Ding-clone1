import { navlinks } from "../type/type";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
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
    <header className=" flex items-center justify-center text-sm h-20 w-full sticky top-0 bg-white text-900 font-bold ">
      {/* i need to wrappe this part inside a div */}

      <Image
        width={50}
        height={50}
        src={Logo}
        alt="the Logo picture"
        className="text-white b"
      />
      <div className="w-64 h-1"></div>
      <nav className="">
        <ul className="flex items-center justify-center gap-6 ">
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
