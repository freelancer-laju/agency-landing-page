import React from "react";

import Logo1 from "../Assets/Logo1.png";
import Logo2 from "../Assets/Logo2.svg";
import Logo3 from "../Assets/Logo3.svg";
import Logo4 from "../Assets/Logo4.svg";
import Logo5 from "../Assets/Logo5.svg";
import Logo6 from "../Assets/Logo6.svg";

const Client = () => {
  return (
    <div className="w-full my-10">
      <div className="text-center">
        <h1 className="md:text-[36px] text-2xl font-semibold text-neutralGray">
          Our Clients
        </h1>
        <p className="text-neutralGray px-4">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="px-5 mt-5 md:px-10  flex items-center justify-between">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
      </div>
    </div>
  );
};

export default Client;
