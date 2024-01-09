import React from "react";

const FooterTop = () => {
  return (
    <>
      <section className="w-full h-auto px-5 md:px-10 bg-[#F5F7FA] mt-20">
        <div className="py-5 text-center">
          <h1 className="text-[25px] md:text-[40px] text-neutralGray font-semibold">
            Pellentesque suscipit <br /> fringilla libero eu.
          </h1>
          <button className="text-white bg-brandPrimary px-5 py-2 rounded-lg mt-10">
            Get a Demo
          </button>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
