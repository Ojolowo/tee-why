import * as React from "react";
import Image from "next/image";

import Image2 from "@/assets/images/waiting-list/image-2.png";
import Music from "@/assets/images/i-have-grace.png";
import styled from "@emotion/styled";
import media from "@/styles/media";

export default function NewMusic() {
  return (
    <Wrapper>
      <div className="container flex bg-deepGrey w-[814px] min-h-[362px] rounded-[6px] py-[60px] px-[30px]">
        <div>
          <Image
            src={Image2}
            alt=""
            width={349}
            height={94}
            className="mb-[20px ]"
          />

          <div className="w-[349px] mobile:w-100% content-start text-left mt-[16px]">
            <h2 className="text-[2.4rem]">Join The Waiting List</h2>

            <p className="text-[1.4rem] text-lightGrey">
              Be first to know when there is a new release.
            </p>

            <div className="w-full flex h-[5.2rem] mt-[20px]">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-[70%] bg-[#131313] pl-[1rem] border-none text-white text-[1.4rem] outline-none placeholder-[#282828]"
              />
              <button className="w-[30%] text-[1.4rem] bg-white text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-[3.6rem] mobile:px-0">
          {Array(5)
            .fill("")
            .map((_, idx) => {
              return (
                <div
                  key={idx.toString()}
                  className="flex justify-between py-[10px] border-b-[1px] border-b-[#202020] mobile:w-full"
                >
                  <div className="flex gap-[17px]">
                    <Image src={Music} alt="I have grace" />
                    <div>
                      <p className="text-[1.4rem] text-white font-semibold">
                        I have Grace
                      </p>
                      <p className="text-[1.2rem] text-grey">Toyosi Oseni</p>
                    </div>
                  </div>

                  <p className="text-grey-100 text-[1.2rem] font-semibold">
                    Coming soon
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;

  ${media.mobile} {
    top: 55%;
    padding: 0 px;
  }

  ${media.mobile} {
    .container {
      flex-direction: column;
      max-width: 100%;
      gap: 40px;
    }
  }
`;
