import React from "react";
import { AboutUsContent } from "../organism";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="py-28 w-full h-fit relative bg-white">
      {/* Rectangle Top */}
      <div className="hidden md:block absolute w-7/12 h-[120px] right-0 bg-primary" />

      {/* Rectangle Bottom */}
      <div className="hidden md:block absolute w-1/2 h-[110px] left-0 top-[528px] bg-primary" />

      <div className="px-4">
        <AboutUsContent />
      </div>
    </div>
  );
};

export default AboutUs;
