import * as React from "react";
import Image from "next/image";

import Thumbnail from "@/assets/images/thumbnail.png";
import styled from "@emotion/styled";

export default function VideoSlides() {
  const carouselRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);
  let step = 1;

  const carouse = () => {};

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(10%)`;
    }
  }, [carouselRef.current.offsetWidth]);
  return (
    <div className="relative w-full overflow-x-hidden bg-black z-[1000] py-[100px] h-auto">
      <div
        className="carousel flex justify-between gap-[50px] ease-linear duration-[6000ms]"
        ref={carouselRef}
      >
        <Slide>
          <Image src={Thumbnail} alt="ILIWYC" className="h-full w-full" />
        </Slide>
        <Slide>
          <Image src={Thumbnail} alt="ILIWYC" className="h-full w-full" />
        </Slide>
        <Slide>
          <Image src={Thumbnail} alt="ILIWYC" className="h-full w-full" />
        </Slide>
      </div>
    </div>
  );
}

const Slide = styled.div`
  width: 600px;
  flex: 0 70% 1;
`;
