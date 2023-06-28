import * as React from "react";
import Image from "next/image";

import Toyosi from "@/assets/images/hero.jpg";

import "./gallery-styles.css";

export default function Gallery() {
  return (
    <div className="Holder">
      <div className="holder1">
        <Image className="img1" src={Toyosi} alt="" />
        <Image className="img2" src={Toyosi} alt="" />
      </div>
      <div className="holder2">
        <Image className="img3" src={Toyosi} alt="" />
        <Image className="img4" src={Toyosi} alt="" />
      </div>
      <div className="holder3">
        <Image className="img5" src={Toyosi} alt="" />
        <Image className="img6" src={Toyosi} alt="" />
      </div>
    </div>
  );
}
