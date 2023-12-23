"use client";

import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const menu = [
    { href: "/", name: "Home" },
    { href: "/favourite", name: "Favourite" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          <div className="content flex py-2">
            <Image
              src="/city-title.png"
              alt="logo"
              width={25}
              height={30}
              className="object-contain img"
            />
            <p className="item-body px-2">e-City</p>
          </div>
        </Link>
      </div>

      <ul className="hidden lg:flex">
        {menu.map(({ href, name }) => (
          <li
            key={name}
            className="nav-links px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <div className="absolute w-60 h-20 right-0 rounded-lg shadow border mt-36">
          <ul id="navbar-ul" className="space-y-3 dark:text-white">
            {menu.map(({ href, name }) => (
              <li
                key={name}
                className="flex flex-row transform transition-colors duration-200 border-l-2 border-transparent md:hidden"
              >
                <Link onClick={() => setNav(!nav)} href={href}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
