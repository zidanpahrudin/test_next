import React from "react";
import Image from "next/image";

interface CarouselProps {
  src: React.ReactNode;
  name: string;
}

const CarouselCard: React.FC<CarouselProps> = ({ src, name }) => {
  return (
    <div className="carousel-item flex-col items-center gap-2">
      <Image
        src={`${src}`}
        alt={`${src?.toString}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "360px", height: "216px" }}
        className="rounded-2xl"
      />
      <p className="text-text font-semibold text-wrap">{name}</p>
    </div>
  );
};

export default CarouselCard;
