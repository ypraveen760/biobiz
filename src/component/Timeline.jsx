import React from "react";

const Timeline = () => {
  return (
    <div className=" bg-green-50 p-7">
      <h1 className="text-xl text-center p-3 md:text-3xl ">Our Experties</h1>
      <ul className="timeline mx-5  timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            Founded by <span className="font-bold">IITM/IIMC</span>{" "}
            Professionals
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            Assisted corporate leaders and top management for{" "}
            <span className="font-bold">15+ years</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <span className="font-bold">250+</span> Consulting assignments
            <br />
            <span className="font-bold">2000+</span> Research report buyers
            <br />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end max-sm:text-sm timeline-box">
            <span className="font-bold">3000+</span>
            <br /> Professional connects
            <br /> with key <br />
            stakeholders investor,government,
            <br />
            R&D,startups
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
