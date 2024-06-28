"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutBtn } from "./logout-btn";

export default function SideNav() {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Admin", href: "/admin" },
  ];
  return (
    <div className="bg-black text-slate-400  p-5 min-h-screen max-w-[500px]">
      <ul className="flex flex-col items-center gap-y-5">
        {navLinks &&
          navLinks.map((link) => (
            <li
              key={link.label}
              className="w-44 rounded p-2 text-center bg-zinc-900"
            >
              <Link
                href={link.href}
                className={`${pathname === link.href ? "text-white" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
      <LogoutBtn />
    </div>
  );
}
