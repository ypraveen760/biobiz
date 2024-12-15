import React from "react";

const Card = () => {
  return (
    <div className="bg-green-50   p-10">
      <h1 className="text-4xl md:text-5xl text-center py-8 font-bold">
        Why To Choose US?
      </h1>
      <div className="flex justify-center flex-col items-center  lg:flex-row gap-10">
        <div className="card bg-base-100  image-full md:w-96 shadow-xl">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/08/84/76/25/240_F_884762550_4lAUZUhs8HopV7Q5l99s6GdZs25zAqnL.jpg"
              alt="plant"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Collaboration in India's Biomass Ecosystem
            </h2>
            <p>
              We unite stakeholders in India's biomass ecosystem, fostering
              collaboration among farmers, logistics providers, processors,
              government, energy companies, and more
            </p>
          </div>
        </div>
        <div className="card bg-base-100 image-full md:w-96 shadow-xl">
          <figure>
            <img
              src="https://t3.ftcdn.net/jpg/09/72/01/38/240_F_972013821_PUtFpcQXr3sEveVRnHO58YLSqdwMz5rb.jpg"
              alt="plant"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">A Hub for Biomass Stakeholders</h2>
            <p>
              A vital hub for intelligence, promotion, and networking,
              connecting stakeholders in the biomass business.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 image-full md:w-96 shadow-xl">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/06/41/21/17/240_F_641211737_NAYakx5KxS4WPojeKssbhkJW5JMc83Jy.jpg"
              alt="plant"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Driving Innovation in Biomass Technology
            </h2>
            <p>
              We excel in innovation, consistently exploring new technologies to
              provide cutting-edge solutions, leveraging our expertise in the
              field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
