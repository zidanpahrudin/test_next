import React from "react";
import Image from "next/image";
import { Button } from "../atom";
import { lm1, lm2 } from "@/assets";
import { FaArrowRight } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <section
      className="flex flex-col p-8 gap-8 justify-center
      md:flex-row-reverse md:gap-10
    "
    >
      {/* About Us */}
      <article
        className="w-fit flex flex-col gap-4 z-10
        xl:w-[515px]
      "
      >
        <h1
          className="
              flex items-center gap-x-[16px]
              text-4xl font-semibold text-text text-right
              border-b-[1px] border-accentThird pb-4
              w-full
          "
        >
          <RiTeamFill width={56} color={"#4A5489"} />
          About Us
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-justify text-text text-md lg:text-lg">
            <strong>L&M Systems Indonesia</strong> is a leading private
            construction company with over 25 years of expertise. Specializing
            in slipforming, ground anchor installation, girder launching,
            prestressing, structural repair, and general construction, the
            company has successfully completed more than 1,000 projects. Some
            notable contributions include landmark projects like the Cisomang
            Bridge, Harbour Highway, Bogor, Sukabumi, and toll roads.{" "}
          </p>
          <p className="text-justify text-text text-md lg:text-lg">
            Established in 1993, PT <strong>L&M Systems Indonesia</strong> has
            been a key player in Indonesia&apos;s construction sector, operating
            in various areas such as prestressing, slipforming, silo/chimney
            construction, heavy lifting, structural repair, bridge bearing,
            ground anchors, jet grouting, and general construction.{" "}
          </p>
        </div>
        <Image
          src={lm2}
          alt="lm1"
          height={327}
          width={586}
          className="rounded-2xl hidden md:block"
        />
      </article>

      {/* Our Mission */}
      <article
        className="w-fit items-end flex flex-col gap-4 z-10
        md:justify-center
        xl:w-[515px]
      "
      >
        <Image
          src={lm1}
          alt="lm1"
          height={343}
          width={515}
          className="rounded-2xl hidden md:block"
        />
        <h1
          className="
              flex items-center gap-x-[16px]
              text-4xl font-semibold text-text text-right
              border-b-[1px] border-accentThird pb-4
              w-full
              md:justify-end
          "
        >
          <TbTargetArrow width={56} color={"#4A5489"} />
          Our Mission
        </h1>
        <p className="text-justify text-text text-md lg:text-lg md:text-right">
          Provide excellent construction work as well asinnovative technology
          and generate quality service. We commited to be professional,
          experienced and trustworthy.
        </p>
        <Link href={"#Project"}>
          <Button
            style="shadow-lmsi rounded-full px-4 py-2 transition ease-in-out duration-500
              hover:bg-primary hover:transition hover:ease-in-out hover:duration-500
              sm:bg-primary
              lg:bg-base
            "
            label="Look Our Project"
            labelStyle=""
            icon={<FaArrowRight />}
          />
        </Link>
      </article>
    </section>
  );
};

export default AboutUsContent;
