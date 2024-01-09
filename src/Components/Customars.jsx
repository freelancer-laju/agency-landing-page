import React from "react";

import { FaArrowRight } from "react-icons/fa6";

import customers from "../Assets/CustomarImage.png";
import Logo1 from "../Assets/Logo1.png";
import Logo2 from "../Assets/Logo2.svg";
import Logo3 from "../Assets/Logo3.svg";
import Logo4 from "../Assets/Logo4.svg";
import Logo5 from "../Assets/Logo5.svg";
import Logo6 from "../Assets/Logo6.svg";

const Customars = () => {
  return (
    <section className="bg-[#F5F7FA] py-10 w-full my-10 md:my-20  md:flex md:items-center md:justify-center  mx-auto lg:px-[200px]">
      {/* left div */}
      <div className="md:w-1/4">
        <a href="">
          <img className="w-full md:hidden lg:block" src={customers} alt="" />
        </a>
      </div>

      {/* right div */}
      <div className="md:w-3/4 px-5">
        <p className="text-neutralGray md:text-[16px] text-sm text-justify w-full">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="text-lg text-brandPrimary font-semibold my-2">
          Tim Smith
        </h1>
        <span className="text-neutralGray text-sm">
          British Dragon Boat Racing Association
        </span>

        {/* customers logo */}
        <div className="mt-4">
          <a
            href=""
            className="flex flex-wrap gap-4 items-center justify-center">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
            <button className="flex items-center justify-center gap-1 text-brandPrimary font-semibold">
              Meet all customers <span>{<FaArrowRight />}</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Customars;
