import React, { ReactElement } from "react";
import Link from "next/link";
import links from "./data/links";

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <footer className="mx-4 lg:mx-12">
      <ul className="flex items-center justify-between py-4 md:px-8">
        <li>
          <Link href="/">
            <a className="font-bold text-gray-700">
              <img
                src="/assets/logo-draft.jpg"
                alt="Dean's Award"
                className="w-16 h-16"
              />
              <div className="font-light text-gray-500">
                © {new Date().getFullYear()} Dean's Award FMUI
              </div>
            </a>
          </Link>
        </li>
        <ul className="flex">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="mr-4 font-light text-gray-500 duration-300 hover:text-gray-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
