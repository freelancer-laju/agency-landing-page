import { Carousel } from "@material-tailwind/react";
import HeroBanner from "../Assets/hero1.png";

export function CarouselCustomNavigation() {
  return (
    <div>
      <Carousel
        className="rounded-sm w-full h-[50vh] md:h-[85vh] bg-[#F5F7FA]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="text-gray-900 absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`text-gray-900 block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-brandPrimary" : "w-4 bg-gray-900"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>
        {/* slide 1 */}
        <div className="relative px-5 md:px-0 h-full w-full flex items-center justify-between">
          <img
            className="absolute  right-5 hidden lg:block w-[450px]"
            src={HeroBanner}
            alt="Slide 1"
          />
          <div className="absolute  md:px-10">
            <h1 className="text-4xl text-neutralGray md:text-[64px] md:leading-[76px] font-semibold">
              Lessons and insights <br />{" "}
              <span className="text-brandPrimary">from 8 years</span>
            </h1>
            <p className="mt-[24px] text-neutralGray">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="mt-5 bg-brandPrimary text-white px-4 py-2 rounded-md hover:shadow-md shadow-brandPrimary focus:right-5">
              Register
            </button>
          </div>
        </div>

        {/* slide 2 */}
        <div className="relative px-5 md:px-0 h-full w-full flex items-center justify-between">
          <img
            className="absolute  right-5 hidden lg:block w-[450px]"
            src={HeroBanner}
            alt="Slide 1"
          />
          <div className="absolute  md:px-10">
            <h1 className="text-4xl text-neutralGray md:text-[64px] md:leading-[76px] font-semibold">
              Lessons and insights <br />{" "}
              <span className="text-brandPrimary">from 8 years</span>
            </h1>
            <p className="mt-[24px] text-neutralGray">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="mt-5 bg-brandPrimary text-white px-4 py-2 rounded-md hover:shadow-md shadow-brandPrimary focus:right-5">
              Register
            </button>
          </div>
        </div>

        {/* slide 3 */}
        <div className="relative px-5 md:px-0 h-full w-full flex items-center justify-between">
          <img
            className="absolute  right-5 hidden lg:block w-[450px]"
            src={HeroBanner}
            alt="Slide 1"
          />
          <div className="absolute  md:px-10">
            <h1 className="text-4xl text-neutralGray md:text-[64px] md:leading-[76px] font-semibold">
              Lessons and insights <br />{" "}
              <span className="text-brandPrimary">from 8 years</span>
            </h1>
            <p className="mt-[24px] text-neutralGray">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="mt-5 bg-brandPrimary text-white px-4 py-2 rounded-md hover:shadow-md shadow-brandPrimary focus:right-5">
              Register
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
