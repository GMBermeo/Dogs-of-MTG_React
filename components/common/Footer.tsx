/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mb-4 flex w-screen flex-col py-4 px-4 md:px-8">
      <div className="flex justify-between">
        <Link href="/" className="hidden opacity-50 hover:opacity-100 md:block">
          {/* <Image
            src="/Logo.svg"
            height={36}
            width={36}
            alt="The 🦀 of Magic of the Gathering Logo"
          /> */}
        </Link>
        <div className="my-auto">
          <h2 className="text-sm font-semibold text-[#333545] hover:text-[#3e4153] md:text-base">
            <a href="https://www.bermeo.dev">Developed by Guilherme Bermeo</a>
          </h2>
        </div>
        <div className="flex justify-end gap-x-4 md:gap-x-6">
          <a href="https://github.com/GMBermeo">
            <Image
              src="/social/github.svg"
              height={36}
              width={36}
              alt="Github Invertocat Logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/gmbermeo/">
            <Image
              src="/social/linkedin.svg"
              height={36}
              width={36}
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </div>
      <p className="mt-0 hidden text-center text-xs text-[#282a36] lg:block">
        Magic The Gathering is a trademark of Wizards of the Coast LLC
      </p>
    </footer>
  );
};