import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 gap-5">
      <Link
        href="/"
        className="flex items-center gap-1"
      >
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevOverflow Logo"
        />
        <span className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden block">
          <span>Dev</span>
          <span className="text-primary-500">Overflow</span>
        </span>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;