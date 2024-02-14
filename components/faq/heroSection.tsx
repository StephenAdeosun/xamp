import React from "react";
import Link from "next/link";

function heroSection() {
    const faqs = [
        {
            question: "Are there any loyalty programs or incentives for frequent users of Xamp?",
            answer: "Yes, we have a loyalty program for frequent users of Xamp. You can earn points for every transaction you make on the platform. These points can be redeemed for discounts on future transactions."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact customer support via email at"

        },
        {
            question: "How do I sign up for an account?",
            answer: "You can sign up for an account by clicking on the sign up button on the top right corner of the page. You will be required to fill in your details and verify your email address."
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on the forgot password link on the login page. You will be required to fill in your email address and a password reset link will be sent to your email."
        },
        {
            question: "How do I list my property on Xamp?",
            answer: "You can list your property on Xamp by clicking on the list property button on the top right corner of the page. You will be required to fill in the details of your property and upload images. Once your property is listed, it will be available for viewing by potential buyers."
        },
        {
            question: "How do I search for properties on Xamp?",
            answer: "You can search for properties on Xamp by using the search bar on the home page. You can filter your search by location, price, and property type to find the perfect property for you."
        }
    ]
  return (
    <div className='-mb-[140px] md:-mb-0'>
      <div className="max-w-[960px] m-auto px-[16px] my-[48px] md:my-[96px]">
        <h1 className="md:text-[48px] text-[30px]  text-center font-[600]">FAQs</h1>
        <p className="md:text-[20px] text-[16px] mt-[32px] md:mt-[24px]  text-center text-[#27292C] font-[400]">
          See if you can find the answers you are looking for below. If not,
          please contact our support team (embed link to email support) and we
          will get back to you ASAP.
        </p>
      </div>

      <div className="max-w-[1280px] grid grid-cols-1  w-full  md:grid-cols-3 gap-8  px-[16px] md:px-[36px] m-auto">
       
       {faqs.map((faq, index) => (
              <div key={index} className=" max-w-[384px] min-h-[208px]  ">
                     <h2 className="text-[18px] font-[600]">{faq.question}</h2>
                <p className="text-[16px] font-[400] mt-[16px]">{faq.answer}</p>
              </div>
         ))}

      </div>



      <div className=' max-w-[1280px] mt-[64px] md:px-[36px]  px-[16px]'>
      <div className=' flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between rounded-2xl py-[32px] px-[16px] md:px-[32px] min-h-[130px] bg-[#F9FAFB]'>
        <div>
        <h1 className="text-[24px] font-[600]">Still have questions?</h1>
        <p className="text-[18px] mt-[8px]  text-[#27292C] font-[400]">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        </div>

         <div>
            <Link href="/contact">
                <button className="bg-[#023E8A] text-white rounded-[40px] w-[134px] px-[20px] py-[10px] ">Get in touch</button>
            </Link>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default heroSection;
