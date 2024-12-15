import React from "react";

const StepsCrousal = () => {
  return (
    <div className="flex justify-center flex-col p-5 items-center  ">
      <h1 className="text-4xl items-center py-4 md:text-5xl font-bold">
        How Do We Do?
      </h1>
      <ol className="steps  steps-vertical">
        <li className="step font-bold md:text-xl  step-primary">
          Opportunity Identification
        </li>
        <ul className="ml-14 md:text-lg list-disc">
          <li>
            Helping clients recognize potential areas for growth and success.
          </li>
          <li>
            Analyzing market trends, consumer behavior, and emerging needs to
            spot untapped opportunities.
          </li>
        </ul>
        <li className="step font-bold md:text-xl step-primary">
          Market Intelligence
        </li>
        <ul className="ml-14 md:text-lg list-disc">
          <li>
            Providing data-driven insights to make informed business decisions.
          </li>
          <li>
            Leveraging market research, competitive analysis, and industry
            forecasts to stay ahead of the curve.
          </li>
        </ul>
        <li className="step font-bold md:text-xl step-primary">
          Strategic Assistance
        </li>
        <ul className="ml-14 md:text-lg list-disc">
          <li>
            Supporting clients in developing actionable strategies to achieve
            their goals.
          </li>
          <li>
            Offering expertise in planning, execution, and overcoming challenges
            to ensure long-term success.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default StepsCrousal;
