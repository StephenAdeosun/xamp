
import { useState,useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "@/public/logo1.svg";
import Image from "next/image"; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <nav>
      <div className="max-w-[1152px] w-full m-auto mt-[16px] px-[12px]">
        <div className="flex lg:items-center lg:justify-center justify-between  items-center gap-[58px]">
          {/* Logo */}
          <div className="w-[112px]" >
            <Link href="/" className="font-[900] text-[24px] text-[#000000]">
             <Image src={Logo} alt="logo"  width={158} height={48}/>
            </Link>
       

          </div>

          {/*Toggle button */}
          <div className="lg:hidden">
            <button className="" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <svg
                  className="w-12 h-10  transition-all duration-300 transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-12 h-10 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Regular navigation links for large screens */}
          <div
            className={`hidden lg:flex space-x-4  ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-[58px]">
              <div className="flex max-w-[646px] text-[#222222] font-[500] text-[18px]  items-center gap-[32px] justify-between">
                <Link href="/" className=" px-[20px] py-[16px]">
                Properties
                </Link>
                
                <Link href="/about" className=" px-[20px] py-[16px]">
                About
                </Link>
                <Link href="/faq" className=" px-[20px]  py-[16px]">
                FAQs
                </Link>
                <Link href="/about" className=" px-[20px]  py-[16px]">
                Contact us
                </Link>
              </div>

          
            </div>
            {/* Add more links as needed */}
          </div>


        </div>
          {/* Mobile menu for small screens */}
            {isMobileMenuOpen && (
                <div className="lg:hidden mt-2 text-[#222222] font-[700] text-[20px] " data-aos="zoom-in" data-aos-duration='900'>
                 <Link href="/" className=" px-[20px] block py-[12px] " data-aos="fade-left" data-aos-duration='400' >
                  Properties
                </Link>
                <Link href="/" className=" px-[20px] block py-[12px]" data-aos="fade-left" data-aos-duration='500'>
                  About
                </Link>
                <Link href="/faq" className=" px-[20px] block py-[12px]" data-aos="fade-left" data-aos-duration='600'>
                  FAQs
                </Link>
                <Link href="/" className=" px-[20px] block py-[12px]" data-aos="fade-left" data-aos-duration='700'>
                  Contact Us
                </Link>
               
                
               
           
                </div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;

// "use client"
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           <div>
//             <Link href="/" className="text-white font-bold text-lg">
//               My Next App
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Hamburger menu for small screens */}
//             <div className="lg:hidden">
//               <button
//                 className="text-white focus:outline-none"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? (
//                   // Close icon when mobile menu is open
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 ) : (
//                   // Hamburger icon when mobile menu is closed
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16m-7 6h7"
//                     ></path>
//                   </svg>
//                 )}
//               </button>
//             </div>
//             {/* Regular navigation links for large screens */}
//             <div className={`hidden lg:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : ''}`}>
//               <Link href="/" className="text-white">
//                 Home
//               </Link>
//               <Link href="/about" className="text-white">
//                 About
//               </Link>
//               {/* Add more links as needed */}
//             </div>
//           </div>
//         </div>
//         {/* Mobile menu for small screens */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-2">
//             <Link className="block text-white p-2" href="/">
//               Home
//             </Link>
//             <Link className="block text-white p-2" href="/about">
//               About
//             </Link>
//             {/* Add more links as needed */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
