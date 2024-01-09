import React from "react";

import PanaImage from "../Assets/Pana.png";

const Pana = () => {
  return (
    <section className="w-full h-auto lg:px-[200px] mt-10 px-5 md:flex md:items-center md:justify-between">
      {/* Left div */}
      <div className="md:w-1/2 justify-center items-center">
        <a href="">
          <img src={PanaImage} alt="" />
        </a>
      </div>

      {/* Right div */}
      <div className="mt-10 md:mt-0 md:w-1/2 ">
        <div>
          <h1 className="text-2xl px-10 md:px-0 text-center md:text-left text-neutralGray font-semibold  lg:text-[34px] lg:leading-10  top-0">
            How to design your site footer like we did
          </h1>
          <p className="text-neutralGray text-justify my-5">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="text-white bg-brandPrimary px-5 py-2 rounded-md ">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pana;
