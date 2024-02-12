import React from "react";
import Image from "next/image";
import List1 from "../public/list.png";
import List2 from "../public/list2.svg";
import List3 from "../public/list3.svg";
import List4 from "../public/list4.svg";
import List5 from "../public/lists.svg";
import Arrow from "../public/arrow.svg";
import Link from "next/link";

function exploreList() {
  const listings = [
    {
      id: 1,
      location: "Enugu",
      properties: 132,
      image: List1,
      href: "/listings",
    },
    {
      id: 2,
      location: "Lagos",
      properties: 132,
      image: List2,
      href: "/listings",
    },
    {
      id: 3,
      location: "Abuja",
      properties: 132,
      image: List3,
      href: "/listings",
    },
    {
      id: 4,
      location: "Port Harcourt",
      properties: 132,
      image: List4,
      href: "/listings",
    },
    {
      id: 5,
      location: "Kano",
      properties: 132,
      image: List5,
      href: "/listings",
    },
    {
      id: 6,
      location: "Ibadan",
      properties: 132,
      image: List1,
      href: "/listings",
    },
  ];
  return (
    <div className="mx-6">
      <h1 className="mt-[96px] text-[24px] md:text-[40px] font-[500]">Explore Listings</h1>

      <div className="max-w-[1280px]  mt-[48px]  ">
        <div className=" grid grid-cols-1 m-auto   w-full  md:grid-cols-3   items-center min-h-[122px] gap-[16px]  ">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="border rounded-sm flex items-center px-[16px] min-h-[122px] gap-[16px]  max-w-[405px] shadow-lg "
            >
              <div>
                <Image
                  src={listing.image}
                  width={72}
                  height={72}
                  alt="listing"
                />
              </div>
              <div className="max-w-[221px] w-full">
                <h2 className="md:text-[20px] text-[18px]  font-[600]">{listing.location}</h2>
                <p className="text-[16px] font-[400] text-[#57585B]">
                  {listing.properties} properties
                </p>
              </div>
              <div>
                <Link href={listing.href}>
                  <Image src={Arrow} width={72} height={72} alt="listing" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default exploreList;
