import React from "react";

const SecondHero = () => {
  return (
    <div className="hero  min-h-[50vh]">
      <div className="hero-content  flex-col lg:flex-row">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZOYKbS70aVcP55lOVjF1ariw_kM4db_6Dw&s"
          className="max-w-2xl md:h-64  rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Who Are We?</h1>
          <p className="py-3 lg:py-6 md:text-xl lg:text-2xl">
            With an experience of over 15 years, BioBiz is a dynamic team of
            industry experts, environmental enthusiasts, and visionary
            professionals dedicated to catalyzing positive change. With a
            passion for sustainable growth, we bring together a diverse range of
            skills and perspectives to provide you with unparalleled expertise
            in the field of Indian biomass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
