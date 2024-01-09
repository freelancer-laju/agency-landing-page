import React from "react";

import Achievement1 from "../Assets/achievement1.png";

const Achievement = () => {
  return (
    <div className="md:justify-center w-full h-auto  md:px-10 bg-[#F5F7FA] py-20 px-5 mt-10 md:mt-0">
      <section className="md:px-[200px]  flex justify-between items-center flex-wrap">
        <div className="hidden lg:block">
          <div>
            <h1 className="text-3xl font-semibold text-neutralGray">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h1>
            <p className="text-[16px] text-neutralGray mt-5">
              We reached here with our hard work and dedication
            </p>
          </div>
        </div>

        <div className="absolute  md:px-[200px] text-center md:right-14 mt-10 mx-auto">
          <div className="flex gap-10">
            <div className="flex gap-4">
              <div>
                <img className="w-[48px] h-[48px]" src={Achievement1} alt="" />
              </div>

              <div>
                <h1 className="md:text-[26px] text-lg text-neutralGray font-bold">
                  2,245,341
                </h1>
                <span className="md:text-[16px] text-neutralGray">Members</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <img className="w-[48px] h-[48px]" src={Achievement1} alt="" />
              </div>
              <div>
                <h1 className="md:text-[26px] text-neutralGray font-bold text-lg">
                  2,245,341
                </h1>
                <span className="md:text-[16px] text-neutralGray">Members</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 my-5">
            <div className="flex gap-4">
              <div>
                <img src={Achievement1} alt="" />
              </div>
              <div>
                <h1 className="md:text-[26px] text-neutralGray font-bold text-lg">
                  2,245,341
                </h1>
                <span className="md:text-[16px] text-neutralGray">Members</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <img src={Achievement1} alt="" />
              </div>
              <div>
                <h1 className="md:text-[26px] text-neutralGray font-bold text-lg">
                  2,245,341
                </h1>
                <span className="md:text-[16px] text-neutralGray">Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
