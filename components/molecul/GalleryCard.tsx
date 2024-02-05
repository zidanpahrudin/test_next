import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  src: React.ReactNode;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ src }) => {
  return (
    <div
      className="relative transition ease-in-out duration-500
        hover:scale-125 hover:transition-all hover:ease-in-out hover:duration-500 hover:z-10
    "
    >
      <Image
        src={`${src}`}
        alt={`${src?.toString}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "300px", height: "180px" }}
        className="hover:rounded-xl"
      />
    </div>
  );
};

export default GalleryCard;
