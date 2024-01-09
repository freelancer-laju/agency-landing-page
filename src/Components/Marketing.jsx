import React from "react";

import Card1 from "../Assets/marketingCard1.png";
import Card2 from "../Assets/marketingCard2.png";
import Card3 from "../Assets/marketingCard3.png";

const Marketing = () => {
  return (
    <section className="px-5 md:px-10">
      <div>
        <h1 className="md:text-[36px] text-3xl font-semibold text-neutralGray text-center">
          Caring is the new marketing
        </h1>
        <p className="text-neutralGray  md:w-[50%] mx-auto my-5 text-justify md:text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>

      {/* card section */}
      <div className=" flex justify-center items-center md:flex md:justify-around md:items-center gap-4 flex-wrap mt-10">
        <section className="md:w-[366px] h-[366px]  relative">
          <div className="flex items-center justify-center">
            <img src={Card1} alt="" />
            <div className="bg-[#F5F7FA] shadow-md shadow-gray-400 w-[317px] h-auto text-center absolute top-44 flex flex-col justify-center items-center p-5 rounded-lg">
              <p className="text-[18px]">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <button className="text-brandPrimary text-[20px] font-semibold mt-2">
                Read more...
              </button>
            </div>
          </div>
        </section>

        <section className="w-[366px] h-[366px] relative">
          <div className="flex items-center justify-center">
            <img src={Card2} alt="" />
            <div className="bg-[#F5F7FA] shadow-md shadow-gray-400 w-[317px] h-auto text-center absolute top-44 flex flex-col justify-center items-center p-5 rounded-lg">
              <p className="text-[18px]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <button className="text-brandPrimary text-[20px] font-semibold mt-2">
                Read more...
              </button>
            </div>
          </div>
        </section>

        <section className="w-[366px] h-[366px] relative">
          <div className="flex items-center justify-center">
            <img src={Card3} alt="" />
            <div className="bg-[#F5F7FA] shadow-md shadow-gray-400 w-[317px] h-auto text-center absolute top-44 flex flex-col justify-center items-center p-5 rounded-lg">
              <p className="text-[18px]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <button className="text-brandPrimary text-[20px] font-semibold mt-2">
                Read more...
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Marketing;
