import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Logo from "@/assets/images/logo.png";
import media from "@/styles/media";

export default function Header() {
  const [isNavActive, setIsNavActive] = React.useState<boolean>(false);

  return (
    <div className="w-full absolute flex justify-between items-center px-[111px] top-[44px] h-[44px] mobile:px-[24px]">
      <Image src={Logo} alt="Toyosi Oseni" height={52} />

      <div className="flex items-center gap-[7px]">
        <h2 className="text-[1.6rem] font-bold uppercase">New Music</h2>
        <div className="w-[11px] h-[11px] rounded-full bg-white"></div>
      </div>

      <NavLinks active={isNavActive}>
        <li>
          <Link href="#">Gallery</Link>
        </li>
        <li>
          <Link href="#">Story</Link>
        </li>
        <li>
          <Link href="#">Music</Link>
        </li>
        <li>
          <Link href="#">Video</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </NavLinks>

      <Burger
        active={isNavActive}
        className="w-[24px] z-[1000]"
        onClick={() => setIsNavActive(!isNavActive)}
      >
        <div className="line-1 border border-white mb-[5px]"></div>
        <div className="line-2 border border-white mb-[5px]"></div>
        <div className="line-3 border border-white"></div>
      </Burger>
    </div>
  );
}

const NavLinks = styled.ul<{ active?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  padding: 100px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  transition: all 300ms ease-in-out;
  color: white;
  list-style-type: none;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    css`
      width: 100%;
    `};

  & > * + * {
    margin-top: 3em;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2.4rem;
    text-align: left;
  }
`;

const Burger = styled.div<{ active?: boolean }>`
  > div {
    transition: all 0.3s ease;
  }

  ${({ active }) =>
    active &&
    css`
      position: fixed;
      right: 111px;

      ${media.mobile} {
        right: 24px;
      }

      .line-1 {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      .line-2 {
        opacity: 0;
      }

      .line-3 {
        transform: rotate(45deg) translate(-3px, -6px);
      }
    `}
`;
