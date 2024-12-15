import React from "react";

const MainHero = () => {
  return (
    <div
      className="hero min-h-[60vh] -z-50 relative"
      style={{
        backgroundImage:
          "url(https://plasticseurope.org/wp-content/uploads/2021/10/5.6._aaheader.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{
          backdropFilter: "blur(5px)",
        }}
      ></div>

      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-10xl">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">
            ACCELERATING INDIA'S SUSTAINABILITY THROUGH{" "}
            <span className="py-3 text-green-500 font-serif">BIOMASS</span>
          </h1>
          <p className="mb-5 text-base md:text-lg font-medium">
            At <span className="text-green-500 font-bold">BioBiz</span>, we are
            keen to capitalize on India’s rich biodiversity and the availability
            of large amounts of biomass residues to develop a sustainable
            bio-economy and attractive business opportunities for diverse
            stakeholders – farmers, rural stakeholders, end-use industries,
            entrepreneurs/startups, and financial investors. As part of a
            leading climate tech consulting firm, we will provide critical
            assistance with market intelligence, data-driven analyses,
            professional networking, and opportunities for relevant stakeholders
            to get effective visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
