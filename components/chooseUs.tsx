import React from "react";
import Image from "next/image";
import C1 from "../public/c1.png";
import C2 from "../public/c2.png";
import C3 from "../public/c3.png";
import C4 from "../public/c4.png";
import C5 from "../public/c5.png";
import C6 from "../public/c6.png";

function chooseUs() {
  const card = [
    {
      title: "Extensive Property Listings",
      description:
        "Gain access to a diverse range of properties including apartments, houses, commercial spaces, and more, all in one place.",
      image: C1,
    },
    {
      title: "Professional Agents",
      description:
        "Our team of professional agents are dedicated to helping you find the perfect property, and are available to answer any questions you may have.",
      image: C2,
    },
    {
      title: "Secure Transactions",
      description:
        "We ensure that all transactions are secure, and that your personal information is kept safe and confidential.",
      image: C3,
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support team is available 24/7 to help you with any queries or concerns you may have.",
      image: C4,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Our platform is designed to be user-friendly, making it easy for you to navigate and find exactly what you’re looking for.",
      image: C5,
    },
    {
      title: "Customized Searches",
      description:
        "Customize your search to find the perfect property for you, based on your specific requirements.",
      image: C6,
    },
  ];
  return (
    <div className="max-w-[1280px]">
      <div className="text-center  mt-[96px]  ">
        <div>
          <h1 className="font-[500] text-[24px] md:text-[48px] max-w-[816px] m-auto text-[#0A0700]">
            Why choose us?
          </h1>
          <p className="font-[400] text-[16px]  md:text-[20px] mt-[24px] max-w-[816px] m-auto text-[#475467]">
            Discover the difference, find a world of comfort with Xamp
          </p>
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 m-auto  max-w-[1280px] w-full  md:grid-cols-3 gap-4 mt-10">
        {card.map((item, index) => (
          <div
            key={index}
            className="max-w-[410px] py-[36px] m-auto min-h-[262px] border border-[#EAECF0] rounded-[8px] shadow-md px-[20px]"
          >
            <div>
              <Image
                src={item.image}
                width={10}
                height={10}
                alt=""
                className="w-[52px]"
              />
            </div>
            <h1 className="font-[600] max-w-[370px] w-full mt-[20px] text-[18px] md:text-[20px] text-[#0A0700]">
              {item.title}
            </h1>
            <p className="font-[400] mt-[8px] max-w-[370px] w-full text-[14px] md:text-[16px] m-auto text-[#475467]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default chooseUs;
