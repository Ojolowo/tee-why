import * as React from "react";
import Image from "next/image";

import TheGirl from "@/assets/images/called-the-girl.png";

export default function CalledTheGirl() {
  return (
    <div>
      <div className="relative">
        <Image src={TheGirl} alt="He called, she answered" />
        <h1 className="absolute mobile:relative bottom-0 text-[6.4rem] mobile:text-[2.4rem] max-w-[370px] mobile:max-w-[190px] leading-none text-white  mx-[302px] mobile:mx-[60px] mobile:mt-[60px] leading-0">
          He Called, She picked.
        </h1>
      </div>

      <div className="px-[302px] mobile:px-[60px] pb-[50px]">
        <p className="max-w-[888px] mobile:max-w-full text-[2.4rem] mobile:text-[1.4rem] mobile:leading-[30px] text-grey-100 pt-[30px]">
          Songwriter. She Ministers both with the Pure Streams and as an
          independent artist with Glory Music. Those that know Toyosi know not
          to be fooled by her goofiness, or her small frame - she pipes down a
          weight that can only be from Heaven, and leaves a trail of results
          that can only be of God. She loves God, and as a result, is passionate
          for the souls He loves also.
        </p>
      </div>
    </div>
  );
}
