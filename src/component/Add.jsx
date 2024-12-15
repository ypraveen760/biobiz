import React from "react";

const Add = () => {
  return (
    <div className="bg-gradient-to-r from-[#aafab7]  to-[#80D0C7] border rounded-md w-full my-8  flex *:my-3 flex-col items-center justify-center mx-auto">
      <div className="">
        <h1 className="text-3xl font-bold  text-center">
          Intrested?
          <br />
          Contact Us Now
        </h1>
        <p className="  text-center">
          <a
            href="https://www.eai.in/"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.eai.in
          </a>
          <br />
          Phone: +91 9952910083
          <br /> Email:{" "}
          <a
            href="mailto:consult@eai.in"
            className="text-blue-500 underline hover:text-blue-700"
          >
            consult@eai.in
          </a>
          <br />
          <address className="text-gray-700 mt-4">
            EAI A5C, Anugraha Apartments,
            <br /> No 41, Nungambakkam High Road,
            <br /> Nungambakkam, Chennai - 600034,
            <br /> Tamil Nadu, India
            <br /> Landmark: Building right next to the Taj Coromandel Hotel
          </address>
        </p>
      </div>
    </div>
  );
};

export default Add;
