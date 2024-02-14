import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";

function footer() {
  return (
    <div className="bg-[#0E294B] pb-[48px] min-h-[364px] mt-[64px] pt-[64px] ">
      <div className="max-w-[1216px] mx-[16px]   min-h-[132px] ">
        <div className=" flex  md:flex-row flex-col  justify-between ">
          <div className="">
            <div>
              <Image src={Logo} alt="" width={182} height={48} />
            </div>

            <p className="font-[400] max-w-[320px] mt-[32px] h-[48px] text-[16px] text-[#FFF]">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          <div className="flex flex-row max-w-[832px] w-full justify-between mt-[64px] md:mt-0 ">
            <div>
              <h2 className="font-[400] text-[14px] text-[#FFF]">Properties</h2>
              <ul className="text-[#FFF] mt-[16px] flex flex-col gap-[6px] font-[500] text-[16px]">
                <Link href="/">
                  <li>Buy</li>
                </Link>
                <Link href="/">
                  <li>Rent</li>
                </Link>
                <Link href="/">
                  <li>Lease</li>
                </Link>
              </ul>
            </div>

            <div>
              <h2 className="font-[400] text-[14px] text-[#FFF]">Company</h2>
              <ul className="text-[#FFF] mt-[16px] flex flex-col gap-[6px] font-[500] text-[16px]">
                <Link href="/">
                  <li>About us</li>
                </Link>
                <Link href="/">
                  <li>Privacy</li>
                </Link>
                <Link href="/">
                  <li>Terms</li>
                </Link>
              </ul>
            </div>

            <div>
              <h2 className="font-[400] text-[14px] text-[#FFF]">Support</h2>
              <ul className="text-[#FFF] mt-[16px] flex flex-col gap-[6px] font-[500] text-[16px]">
                <Link href="/">
                  <li>Help Center</li>
                </Link>
                <Link href="/">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>


            <div className="max-w-[1280px] min-h-[56px] pt-[32px] border-t-[1px] border-[#57585B] mt-[64px]">

                <div className="flex justify-between md:flex-row gap-[32px] md:gap-0 flex-col">
                    <p className="text-[#FFF]">© 2024 XampApp UI. All rights reserved.</p>
                    <div className="flex md:justify-between gap-[24px]">
                        <Image src={Facebook} alt="" width={24} height={24} />
                        <Image src={Twitter} alt="" width={24} height={24} />
                        <Image src={Instagram} alt="" width={24} height={24} /> 
                    </div>
                </div>

            </div>


      </div>
    </div>
  );
}

export default footer;
