import React from "react";
import { CarouselCard, GalleryCard } from "../molecul";
import {
  lm1,
  lm10,
  lm11,
  lm12,
  lm13,
  lm14,
  lm3,
  lm4,
  lm5,
  lm6,
  lm7,
  lm8,
  lm9,
} from "@/assets";
const GalleryContent = () => {
  return (
    <section
      className="w-full h-full 
        flex flex-col justify-center items-center gap-8
    "
    >
      <article>
        <p className="text-5xl text-secondary font-semibold">Gallery</p>
      </article>
      <article
        className="hidden md:grid grid-cols-3 relative px-8
            lg:grid-cols-4
        "
      >
        <GalleryCard src={lm13.src} />
        <GalleryCard src={lm3.src} />
        <GalleryCard src={lm5.src} />
        <GalleryCard src={lm4.src} />
        <GalleryCard src={lm6.src} />
        <GalleryCard src={lm7.src} />
        <GalleryCard src={lm9.src} />
        <GalleryCard src={lm8.src} />
        <GalleryCard src={lm10.src} />
        <GalleryCard src={lm11.src} />
        <GalleryCard src={lm12.src} />
        <GalleryCard src={lm14.src} />
      </article>
      <article className="md:hidden">
        <div
          className="w-[280px] carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box
                sm:w-[425px]
            "
        >
          <CarouselCard src={lm13.src} name="BNI City Tower Jakarta" />
          <CarouselCard
            src={lm3.src}
            name="Bogor-Ciawi-Sukabumi, Toll road project"
          />
          <CarouselCard
            src={lm5.src}
            name="Cisadane Bridge, Bumi Serpong Damai, Tangerang"
          />
          <CarouselCard
            src={lm4.src}
            name="Cipularang Tollroad & Tollbridge Stage II"
          />
          <CarouselCard src={lm6.src} name="Jakarta Stock Exchange" />
          <CarouselCard src={lm7.src} name="Bogasari Silo" />
          <CarouselCard src={lm9.src} name="Matraman Flyover, Jakarta" />
          <CarouselCard src={lm8.src} name="Cawang - Priok Tollroad, Jakarta" />
          <CarouselCard src={lm10.src} name="Graha Askrindo" />
          <CarouselCard src={lm11.src} name="Lippo Life Centre, Jakarta" />
          <CarouselCard
            src={lm12.src}
            name="Menara Masjid Pondok Pesantren Modern Gontor "
          />
          <CarouselCard src={lm14.src} name="Menara Park Apartemen, Menteng" />
        </div>
      </article>
    </section>
  );
};

export default GalleryContent;
