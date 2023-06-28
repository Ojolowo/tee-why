import * as React from "react";
import Image from "next/image";

import Facebook from "@/assets/images/footer/facebook.png";
import Instagram from "@/assets/images/footer/instagram.png";
import Twitter from "@/assets/images/footer/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full h-screen pt-[88px] bg-[url('/footer-bg.png')] bg-cover bg-no-repeat flex justify-start items-center flex-col text-center">
      <h3 className="text-[3.8rem]">ToyosiOseni</h3>

      <p className="font-semibold text-[1.2rem]">© Copyright 2023</p>

      <div className="flex justify-between w-[160px] mt-[28px]">
        <Image src={Facebook} alt="Facebook" />
        <Image src={Twitter} alt="Twitter" />
        <Image src={Instagram} alt="Instagram" />
      </div>

      <button className="py-[1.6rem] px-[3.6rem] mt-[3.8rem] text-[1.4rem] border-2 border-white bg-transparent cursor-pointer text-white">
        Say Hello
      </button>
    </footer>
  );
}
