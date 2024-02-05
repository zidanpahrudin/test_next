"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  client: React.ReactNode;
  project: string;
  style: string;
  styleLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  client,
  project,
  style,
  styleLabel,
}) => {
  const [isWider, setIsWider] = useState(false);

  return (
    <div
      className={`${style}
        flex flex-col items-center justify-center gap-x-8 gap-y-4
        flex-grow flex-shrink
        h-fit p-8
        bg-base rounded-[50px] drop-shadow-primary
        md:flex-row md:w-auto md:max-w-[510px] sm:w-[300px]
      `}
    >
      <Image
        src={`${client}`}
        width={0}
        height={0}
        alt={"project"}
        sizes="100vh"
        style={{ width: "auto", height: "100px" }}
      />
      <div
        className={`${styleLabel}
          flex items-center h-100% w-fit text-wrap font-semibold text-text
        `}
      >
        <p className="text-[14px] md:text-[16px]">{project}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
