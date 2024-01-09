import React from "react";

// sections
import { Test } from "./Components/Test";
import { CarouselCustomNavigation } from "./Components/CarouselCustomNavigation";
import Client from "./Components/Client";
import { Members } from "./Components/Memers";
import UnlockSection from "./Components/UnlockSection";
import Achievement from "./Components/Achievement";
import Pana from "./Components/Pana";
import Customars from "./Components/Customars";
import Marketing from "./Components/Marketing";
import FooterTop from "./Components/FooterTop";
import FooterComponent from "./Components/FooterComponent";

const App = () => {
  return (
    <>
      <Test />
      <CarouselCustomNavigation />
      <Client />
      <Members />
      <UnlockSection />
      <Achievement />
      <Pana />
      <Customars />
      <Marketing />
      <FooterTop />
      <FooterComponent />
    </>
  );
};

export default App;
