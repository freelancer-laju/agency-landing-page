import React from "react";

import UnlockImage from "../Assets/Unlock.png";

const UnlockSection = () => {
  return (
    <div className="px-5   md:w-4/5 md:flex md:items-center md:justify-around  mx-auto flex-wrap">
      <div className="md:w-1/2  self-stretch ">
        <img src={UnlockImage} alt="" />
      </div>

      <div className="md:w-1/2">
        <h1 className="hidden md:block md:text-3xl text-2xl text-center text-neutralGray font-semibold mb-5">
          The unseen of spending three <br /> years at Pixelgrade
        </h1>
        <p className=" text-justify text-neutralGray text-semibold text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-brandPrimary text-white px-5 py-2 rounded-md mt-5">
          Learn
        </button>
      </div>
    </div>
  );
};

export default UnlockSection;
