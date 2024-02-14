/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Banner from "@/public/real.png";
import Link from "next/link";

function realEstate() {
  return (
    <div>
      <div className="text-center  pt-[129px]  ">
        <h1 className="font-[500] text-[20px]  md:text-[48px]   max-w-[647px] m-auto">
          One App For All Your Real Estate Problems
        </h1>
      </div>

      <div className="md:flex-row flex max-w-[1280px] flex-col mt-[64px] mx-4  gap-[78px]">
        <div className="flex flex-col max-w-[586px] gap-4">
          <div>
            <h1 className="font-[500] text-[20px]  md:text-[24px]   text-[#0A0700]">
              1. Tenants
            </h1>
            <p className="font-[400] text-[16px]  md:text-[18px] mt-[16px] max-w-[562px] text-[#475467]">
              Our platform simplifies the search for your next home. With
              detailed property listings, virtual tours, and secure
              communication channels, finding the perfect rental property has
              never been easier.
            </p>

            <Link href="/tenants" className="">
              <h2
                className={`mt-[24px] font-[500] text-[#023E8A] flex gap-[8px]`}
              >
                Learn more
                <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </Link>
          </div>
          <div>
            <h1 className="font-[500] text-[20px]  md:text-[24px]   text-[#0A0700]">
              2. Landlords
            </h1>
            <p className="font-[400] text-[16px]  md:text-[18px] mt-[16px] max-w-[562px] text-[#475467]">
              As a landlord, you can list your properties effortlessly, reaching
              a wide audience of potential tenants. Our platform offers tools to
              manage your listings, track inquiries, and communicate with
              prospective tenants seamlessly.
            </p>

            <Link href="/tenants" className="">
              <h2
                className={`mt-[24px] font-[500] text-[#023E8A] flex gap-[8px]`}
              >
                Learn more
                <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </Link>
          </div>
          <div>
            <h1 className="font-[500] text-[20px]  md:text-[24px]   text-[#0A0700]">
              3. Agents
            </h1>
            <p className="font-[400] text-[16px]  md:text-[18px] mt-[16px] max-w-[562px] text-[#475467]">
              Real estate agents benefit from our platform's advanced features
              tailored to their needs. Manage multiple listings, collaborate
              with clients, and track leads efficiently, all within one
              intuitive interface.
            </p>

            <Link href="/tenants" className="">
              <h2
                className={`mt-[24px] font-[500] text-[#023E8A] flex gap-[8px]`}
              >
                Learn more
                <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </Link>
          </div>
        </div>
        <div className="m-auto">
          <Image src={Banner} width={616} height={611} alt="" />
        </div>
      </div>
    </div>
  );
}

export default realEstate;
