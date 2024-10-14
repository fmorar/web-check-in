// components/layout/Footer.tsx


import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-20 flex w-full flex-col items-center">
      <div className="mb-10">
        <Link href="/" className="flex items-center space-x-2">
          <img width="120px" src='/img/logo-dark.png' alt="Logo" />
        </Link>
      </div>
      <div className="mb-6 flex flex-col items-center gap-6">
        <nav className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:gap-12">
          {["About", "Features", "Blog", "Resources", "Partners", "Help", "Terms"].map((item) => (
            <Link key={item} href="/" className="text-sm font-medium text-dark-grey-600">{item}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <Link href="/">
            <FaFacebook />
          </Link>
          <Link href="/">
            <IoLogoInstagram />
          </Link>
          <Link href="/">
            <BsTwitterX />
          </Link>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-dark-grey-600">
        © {currentYear} Airchk. All rights reserved. Made with ❤️ in Costa Rica
      </p>
    </footer>
  );
}
