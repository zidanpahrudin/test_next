import Link from "next/link";
import React from "react";
import { Button } from "../atom";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div
      className="w-full h-[768px] justify-end pb-12
      flex items-end
      lg:items-center
    "
    >
      <section
        className="w-fit h-fit 
        flex flex-col gap-4 px-8
        lg:px-16
      "
      >
        <div className="w-fit h-100% flex flex-col gap-2 md:items-end md:gap-4">
          <div
            className="
            w-100% text-left text-white text-3xl font-bold
            md:text-right xl:text-secondary
            md:text-[40px]
          "
          >
            WELCOME TO{" "}
          </div>
          <div
            className="
            w-100% text-left text-white text-2xl font-bold
            md:text-right xl:text-secondary
            md:text-[40px]
          "
          >
            L&M SYSTEMS INDONESIA
          </div>
          <div
            className="
            text-left text-primary text-md font-semibold
            md:w-[392px] md:text-right md:text-white
            xl:text-text
          "
          >
            One Of The Longest Private Construction Company With Special
            Expertise
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-8 inline-flex md:justify-end">
          <Link href={"#Services"}>
            <Button
              style="px-4 py-1 bg-base md:bg-primary rounded-full text-text font-semibold font-['Raleway'] hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-primary hover:shadow-2xl"
              label="Our Services"
              labelStyle="text-xl"
              icon={<FaArrowRight className="w-4 h-4 relative" />}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
