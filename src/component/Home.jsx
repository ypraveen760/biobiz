import React from "react";
import MainHero from "./MainHero";
import SecondHero from "./SecondHero";
import ThirdHero from "./ThirdHero";
import StepsCrousal from "./StepsCrousal";
import Card from "./Card";
import Timeline from "./Timeline";
import Steps from "./Steps";
import Add from "./Add";

const Home = () => {
  return (
    <>
      <MainHero />
      <SecondHero />
      <ThirdHero />
      <StepsCrousal />
      <Card />
      <Timeline />
      <Steps />
      <Add />
    </>
  );
};

export default Home;
