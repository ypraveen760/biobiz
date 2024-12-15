import React from "react";

const ThirdHero = () => {
  return (
    <div className="hero bg-green-50 min-h-[40vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://t4.ftcdn.net/jpg/03/06/24/33/240_F_306243372_8Usp2BdksldvNoEAA1Z9eJuo0Gssm5gk.jpg"
          className="max-w-2xl md:h-64   h-44 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">What Do We Do?</h1>
          <p className="py-3 lg:py-6 md:text-xl lg:text-2xl ">
            At BioBiz, we are at the forefront of revolutionizing the way
            businesses approach sustainable development through the utilization
            of Indian biomass. Our expert team leverages advanced analytics,
            comprehensive research, and innovative technologies to provide
            tailored solutions for integrating biomass into your business
            strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdHero;
