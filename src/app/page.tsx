"use client";

import Image from "next/image";
import styled from "@emotion/styled";

import Toyosi from "@/assets/images/hero.jpg";
import ToyosiSmall from "@/assets/images/hero-mobile.png";
import Header from "@/components/Header";
import CalledTheGirl from "@/components/CalledTheGirl";
import Gallery from "@/components/Gallery";
import EmjoyTheFullness from "@/components/EnjoyTheFullness";
import WaitingList from "@/components/WaitingList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Header />

        <Image src={Toyosi} alt="Toyosi" className="mobile:hidden" />

        <Image
          src={ToyosiSmall}
          alt="Toyosi"
          className="hidden mobile:block h-screen w-screen"
        />

        <div className="w-full z-[50] absolute left-0 flex flex-col gap-[14px] items-center mt-[50px]">
          <h1 className="text-[2.4rem] text-white">TOYOSI OSENI</h1>

          <ul className="flex gap-[31px] font-medium text-grey text-[1.4rem] text-center">
            <li>GOSPEL ARTISTE</li>
            <li>SONG WRITER</li>
            <li>MUSICIAN</li>
          </ul>
        </div>

        {/* <SkewedDiv /> */}
      </section>

      <div className="mt-[200px]"></div>

      <CalledTheGirl />
      <Gallery />
      <EmjoyTheFullness />
      <WaitingList />
      <Footer />
    </>
  );
}

const SkewedDiv = styled.div`
  left: 0;
  position: absolute;
  bottom: -200px;
  width: 100%;
  height: 300px;
  background: #000;
  -moz-transform: skew(0deg, -5deg);
  -webkit-transform: skew(0deg, -5deg);
  -o-transform: skew(0deg, -5deg);
  -ms-transform: skew(0deg, -5deg);
  transform: skew(0deg, -5deg);
  z-index: 30;
`;
