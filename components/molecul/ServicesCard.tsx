import React from "react";
import { Card } from "../atom";
import { FaBuilding, FaPencilRuler } from "react-icons/fa";
import { RiSettingsFill } from "react-icons/ri";
import { card1, card2, card3 } from "@/assets";

const ServicesCard = () => {
  return (
    <div
      className="flex flex-col gap-8 mx-8
      md:mx-14
      lg:flex-row
      xl:mx-56
    "
    >
      <Card
        src={card1.src}
        icon={<FaBuilding color="#A9E44D" size={110} />}
        title="Prestressing"
        desc="Prestressing is a construction system which eliminates or reduces significantly the load and tensile force of the concrete so that the whole structure is able to withstand heavy loads. Prestressing construction has been popular among archltects and engineers because of its cost efficiency."
      />
      <Card
        src={card2.src}
        icon={<FaPencilRuler color="#A9E44D" size={110} />}
        title="Silo Forming & Silo Construction"
        desc="Slipforming is a construction method for building various shapes of tower and silo. Major construction projects adopting LM System's slipforming and fromwork have had successful results in forming chimneys, silos, towers, bridge piers, caisson, high rise building, core walls and shear walls."
      />
      <Card
        src={card3.src}
        icon={<RiSettingsFill color="#A9E44D" size={110} />}
        title="Bridge Bearing & Heavy Lifting"
        desc="Mechanical pot bearings are the new generation of bridge bearings. They are the result of technological innovation to solve structural problems encountered in civil engineering works. Launching Girder Systems is an alternative to shorten cycle-time and provide maximum safety foe erection of heavy precast concrete girders."
      />
    </div>
  );
};

export default ServicesCard;
