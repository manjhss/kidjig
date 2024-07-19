"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu() {
  const navItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Process",
      path: "/process",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "FAQs",
      path: "/faqs",
    },
  ];

  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="md:hidden relative cursor-pointer">
      <Menu size={32} onClick={() => setDisplayMenu(!displayMenu)} />

      {displayMenu && (
        <nav className="py-3 w-[180px] absolute top-14 right-0 border border-[#404040] bg-[#0c0c0c] rounded-[12px]">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="block px-6 py-2 text-[18px] text[#E4E6F2] hover:bg-[#6881FF] transition-all duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
