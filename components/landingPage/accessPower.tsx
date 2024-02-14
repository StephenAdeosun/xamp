import React from "react";
import Image from "next/image";
import Access from "@/public/access.svg";
import Apple from "@/public/apple.svg";
import Google from "@/public/google.svg";

function accessPower() {
  return (
    <div className="max-w-[1280px] rounded-[24px] md:pr-[24px] flex flex-col md:flex-row gap-[20px] md:gap-[247px] mt-[192px]  px-[16px]  md:pl-[64px] bg-[#F9FAFB] min-h-[484px]">
      <div className="mt-[104px] px-[16px] max-w-[648px] min-h-[160px]">
        <h1 className=" font-[500] text-[20px]  md:text-[36px] max-w-[465px] text-[#0A0700]">
          Access the power of our platform on the go.{" "}
        </h1>
        <p className=" font-[400] text-[14px]  md:text-[16px] mt-[24px] max-w-[389px] text-[#9b9b9b]">
          Download our app now and start searching for your perfect property
          anytime, anywhere!
        </p>

        <h1 className="font-[600] text-[14px] mt-[40px]">
            Get the app
        </h1>
        <div className="flex mt-[16px] gap-[16px]">
            <Image src={Apple} width={160} height={48} alt="" />
            <Image src={Google} width={160} height={48} alt="" />
        </div>
      </div>

    <div className="mt-[32px]">
        <Image src={Access} width={480} height={420} alt="" />
    </div>

    </div>
  );
}

export default accessPower;
