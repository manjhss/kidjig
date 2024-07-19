import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import SecondaryButton from "@/components/ui/seconday-button";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
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

  return (
    <header className="py-3 sticky top-0 z-50 backdrop-blur-3xl bg-black/40">
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <Logo />

          <nav>
            <ul className="hidden md:flex gap-[28px]">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-[18px] text[#E4E6F2] hover:text-[#6881FF] transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <SecondaryButton>Book a call</SecondaryButton>
            <DropdownMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
