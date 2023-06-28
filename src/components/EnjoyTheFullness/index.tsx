import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import Music from "@/assets/images/music.png";
import MusicPlayer from "./components/MusicPlayer";

export default function EmjoyTheFullness() {
  return (
    <div className="relative bg-dark py-[50px] mt-[50px]">
      <Wrapper></Wrapper>
      <div className="absolute top-[50px] px-[100px] left-0 h-full w-full">
        <div className="flex justify-between">
          <div className="flex-1 mt-[45px]">
            <h1 className="max-w-[373px] text-[6.4rem] leading-none mb-[45px]">
              Enjoy the Fullness of Toyosi Oseni
            </h1>

            <Image src={Music} alt="Spotify, Apple Music" />
          </div>

          <div className="flex-1">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 600px;
  background-image: url("/hero.jpg");
  background-position: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  -webkit-filter: blur(2px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
