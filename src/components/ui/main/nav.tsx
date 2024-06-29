"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import git from "../../../../public/github.svg";
import gmail from "../../../../public/gmail.svg";
import lnkdn from "../../../../public/lnkdn.svg";
import menuIcon from "../../../../public/menu.svg";
import closeIcon from "../../../../public/close.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { href: "https://github.com/dezmymachine", src: git },
  { href: "https://www.linkedin.com/in/desmond-coffie-606607181", src: lnkdn },
  { href: "mailto:desmondkwakucoffie195@gmail.com", src: gmail },
];

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-black text-white p-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          BLOGO
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleNav}>
            <Image
              src={toggle ? closeIcon : menuIcon}
              height={30}
              width={30}
              alt="menu"
            />
          </button>
        </div>
        <ul className="hidden sm:flex sm:items-center sm:space-x-3">
          {navLinks.map((link) => (
            <li key={link.label} className="font-semibold">
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "border-2 border-orange-300 border-x-0 border-t-0 pb-1 opacity-85"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden sm:flex sm:items-center sm:space-x-3">
          {socials.map((social) => (
            <li key={social.href} className="hover:opacity-85">
              <Link href={social.href}>
                <Image src={social.src} alt="social" width={24} height={24} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {toggle && (
        <div className="sm:hidden  inset-0 min-h-screen">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label} className="font-semibold text-xl">
                <Link
                  href={link.href}
                  className={`block py-2 ${
                    pathname === link.href ? " pb-1 opacity-85" : ""
                  }`}
                  onClick={toggleNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col  space-y-2">
            {socials.map((social) => (
              <li key={social.href} className="hover:opacity-85">
                <Link href={social.href}>
                  <Image src={social.src} alt="social" width={30} height={30} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
