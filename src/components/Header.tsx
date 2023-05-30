import * as React from "react";
import Image from "next/image";

import Logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <div className="w-full absolute flex justify-between items-center px-[111px] top-[44px] h-[44px]">
      <Image src={Logo} alt="Toyosi Oseni" height={52} />

      <div className="flex items-center gap-[7px]">
        <h2 className="text-[1.6rem] font-bold uppercase">New Music</h2>
        <div className="w-[11px] h-[11px] rounded-full bg-white"></div>
      </div>

      <div className="w-[28px]">
        <div className="border border-white mb-[5px]"></div>
        <div className="border border-white mb-[5px]"></div>
        <div className="border border-white"></div>
      </div>
    </div>
  );
}
