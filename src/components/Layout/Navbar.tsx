import React, { Children, ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import BurgerMenu from "../BurgerMenu";
import links from "./data/links";

interface Props {}

function Navbar({}: Props): ReactElement {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 z-10 w-full">
      <ul className="flex items-center justify-between max-w-6xl px-8 py-4 mx-auto">
        <li>
          <Link href="/">
            <a className="font-bold text-gray-700">
              <img
                src="/assets/Logo Light.png"
                alt="Dean's Award"
                className="w-20 h-20"
              />
            </a>
          </Link>
        </li>
        <ul className="items-center justify-between hidden max-w-xl mx-auto md:flex">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`mr-4 text-2xl font-primary text-gray-700 hover:text-gray-400 ${
                    router.pathname.includes(label.toLowerCase())
                      ? "font-bold"
                      : "font-light"
                  }`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <li className="block md:hidden">
          <BurgerMenu
            links={links}
            title={"qwe"}
            setIsOpen={setIsOpen}
            className="z-10"
          />
        </li>
      </ul>
    </nav>
  );
}

interface PropsNavItem {
  title: string;
  href: string;
}

function NavItem({ title, href }: PropsNavItem) {
  return <div className="nav-item">{title}</div>;
}

export default Navbar;
