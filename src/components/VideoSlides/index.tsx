import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowRight from "@/assets/images/arrow-right.svg";
import ArrowLeft from "@/assets/images/arrow-left.svg";
import Image from "next/image";
import styled from "@emotion/styled";

export default function VideoSlides() {
  return (
    <div className="relative w-full">
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        interval={500}
        renderArrowPrev={(onClick, _nextItemExists, accessibilityLabel) => {
          return (
            <Concealer className="left" aria-label={accessibilityLabel}>
              <button className="scroll-button" onClick={onClick}>
                <Image src={ArrowLeft} alt="Arrow" />
              </button>
            </Concealer>
          );
        }}
        renderArrowNext={(onClick, _nextItemExists, accessibilityLabel) => {
          return (
            <Concealer className="right" aria-label={accessibilityLabel}>
              <button className="scroll-button" onClick={onClick}>
                <Image src={ArrowRight} alt="Arrow" />
              </button>
            </Concealer>
          );
        }}
      >
        {Array(3)
          .fill("")
          .map((_, idx) => (
            <div key={idx.toString()} className="w-full">
              <iframe
                className="h-[615px] mobile:h-[315px]"
                src="https://www.youtube.com/embed/yApXkxr--rw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

const Concealer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 40px 0;

  .scroll-button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;
