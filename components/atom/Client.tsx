import Image from "next/image";
import React from "react";

interface ClientProps {
  src: React.ReactNode;
  ptName: String;
  height: String;
}

const Client: React.FC<ClientProps> = ({ src, ptName, height }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="h-fit w-[250px] p-8
      bg-base rounded-[50px] drop-shadow-primary
        flex justify-center"
      >
        <Image
          src={`${src}`}
          width={0}
          height={0}
          alt={"ptName"}
          sizes="100vh"
          style={{ width: "auto", height: `${height}` }}
        />
      </div>
      <div className="h-full flex items-center justify-center">
        <p className="font-semibold text-[16px] text-center text-text">
          {ptName}
        </p>
      </div>
    </div>
  );
};

export default Client;
