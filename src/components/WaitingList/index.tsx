import * as React from "react";
import Image from "next/image";

import Image1 from "@/assets/images/waiting-list/image-1.png";
import Image2 from "@/assets/images/waiting-list/image-2.png";
import Image3 from "@/assets/images/waiting-list/image-3.png";

export default function WaitingList() {
  return (
    <div>
      <div className="w-full block justify-center items-center bg-deepGrey p-[100px]">
        <div className="flex flex-col w-full gap-[30px]">
          <Image src={Image1} alt="" className="w-full h-[13rem]" />

          <div className="w-full bg-red flex items-start justify-between h-[14rem]">
            <Image src={Image2} alt="" className="w-[60%]" />

            <div className="w-[35%] content-start text-left">
              <h2 className="text-[2.4rem]">Join The Waiting List</h2>

              <p className="text-[1.4rem] text-lightGrey">
                Be first to know when there is a new release.
              </p>

              <div className="w-full flex h-[5.2rem] mt-[20px]">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-[70%] bg-grey-100 pl-[1rem] border-none text-white text-[1.4rem] outline-none placeholder-white"
                />
                <button className="w-[30%] text-[1.4rem] bg-white text-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <Image src={Image3} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
