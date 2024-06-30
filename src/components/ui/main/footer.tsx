import { navLinks } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import git from "../../../../public/github.svg";
import gmail from "../../../../public/gmail.svg";
import lnkdn from "../../../../public/lnkdn.svg";
export const socials = [
  { href: "https://github.com/dezmymachine", src: git },
  { href: "https://www.linkedin.com/in/desmond-coffie-606607181", src: lnkdn },
  { href: "mailto:desmondkwakucoffie195@gmail.com", src: gmail },
];
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="p-5">
          <div className="flex items-center space-x-2">
            <ul className="flex items-center space-x-3">
              {navLinks.map((link) => (
                <li key={link.label} className="font-semibold">
                  <Link href={link.href} className="hover:opacity-85">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex  gap-x-1 items-center space-x-2">
              {socials.map((social) => (
                <li key={social.href} className="hover:opacity-85">
                  <Link href={social.href} className="">
                    <Image
                      src={social.src}
                      alt="social"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="flex items-center gap-x-2 mt-4">
            © 2022
            <Link
              className="font-bold"
              href="https://www.linkedin.com/in/desmond-coffie-606607181"
              target="_blank"
            >
              Desmond Coffie
            </Link>
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
