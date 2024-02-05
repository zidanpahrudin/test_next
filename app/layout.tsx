import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Logolmsi } from "@/assets";
import { Button } from "@/components/atom";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L&M Systems Indonesia",
  description: "L&M Systems Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="h-full w-full font-roboto bg-home-mobile md:bg-home xl:bg-contain">
        <header
          className="w-full h-fit sticky z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <nav className="w-full flex flex-col justify-between">
            <section className="z-20">
              <div
                className="flex items-center px-4 py-4 
                md:justify-around
              "
              >
                <div
                  className="flex justify-center flex-shrink
                  md:gap-4
                  lg:gap-12 
                "
                >
                  <Link href={"/"}>
                    <Button
                      label="Home"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full "
                    />
                  </Link>

                  <Link href={"#AboutUs"}>
                    <Button
                      label="About Us"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full"
                    />
                  </Link>

                  <Link href={"#Services"}>
                    <Button
                      label="Services"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full"
                    />
                  </Link>
                </div>
                <Image
                  src={Logolmsi}
                  alt="logo"
                  className="w-24
                    lg:w-32 
                  "
                />
                <div className="flex justify-center gap-8 flex-shrink">
                  <Link href={"#Client"}>
                    <Button
                      label="Client"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full"
                    />
                  </Link>

                  <Link href={"#Project"}>
                    <Button
                      label="Project"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full"
                    />
                  </Link>

                  <Link href={"#Gallery"}>
                    <Button
                      label="Gallery"
                      labelStyle="text-[12px] lg:text-lg"
                      icon={undefined}
                      style="hidden md:block opacity-60 hover:opacity-100 hover:bg-primary bg-base rounded-full"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          className="h-[500px] w-full pt-12 px-12 bg-gradient-to-b from-primary from-10% to-white to-45%
           flex flex-col items-center justify-between
        "
        >
          <section>
            <p className="text-4xl font-semibold text-text">Contact Us</p>
          </section>
          <section className="w-full h-fit flex justify-around">
            <div className="flex items-center">
              <Image
                src={Logolmsi}
                alt="Logo LMSI"
                width={120}
                className="lg:w-36"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <article className="w-fit flex gap-[8px]">
                <IoMail size={24} color="#045F8C" />
                <p className="text-secondary font-semibold">info@lmsi.co</p>
              </article>
              <article className="w-fit flex gap-[8px]">
                <IoCall size={24} color="#045F8C" />
                <p className="text-secondary font-semibold">
                  (+62 21 345 8568)
                </p>
              </article>
              <article className="w-fit flex gap-[8px]">
                <FaLocationDot size={24} color="#045F8C" />
                <p className="w-[175px] text-secondary font-semibold">
                  Jl. Ir. H. Juanda III No.8, Jakarta Pusat-10120
                </p>
              </article>
            </div>
          </section>
          <section className="w-full h-fit flex gap-1 items-center justify-center">
            <p className="text-text text-sm text-left">Copyright © 2017</p>
            <p className="text-text text-sm">-</p>
            <p className="text-secondary font-semibold text-sm text-center">
              L&M Systems Indonesia
            </p>
            <p className="text-text text-sm">|</p>
            <p className="text-text text-sm text-right">All Rights Reserved</p>
          </section>
        </footer>
      </body>
    </html>
  );
}
