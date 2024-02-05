import React from "react";
import { ProjectCard } from "../molecul";
import { client1, client2, client3, client6, client7, client9 } from "@/assets";

const ProjectContent = () => {
  return (
    <section
      className="grid grid-cols-1 gap-8 px-8
        justify-items-center
        lg:grid-cols-2
    "
    >
      <ProjectCard
        client={client3.src}
        project="Jalan Tol Cipularang Tahap II - Seksi III.3. Jembatan Cisomang, Cikalong Wetan."
        style="lg:flex-row-reverse"
        styleLabel="text-left lg:text-right sm:text-center"
      />
      <ProjectCard
        client={client6.src}
        project="Packing Plant PT. Semen Padang, Malahayati."
        style=""
        styleLabel="text-left sm:text-center"
      />
      <ProjectCard
        client={client7.src}
        project="Terminal Semen PT. Semen Padang, Malahayati, NAD."
        style="lg:flex-row-reverse"
        styleLabel="text-left lg:text-right sm:text-center"
      />
      <ProjectCard
        client={client2.src}
        project="Perbaikan Demaga A Bogasari, TJ. Priok."
        style=""
        styleLabel="text-left sm:text-center"
      />
      <ProjectCard
        client={client1.src}
        project="Heavy Loaded Load Improvement, Paket BP-01, Merak - Cilegon."
        style="lg:flex-row-reverse"
        styleLabel="text-left lg:text-right sm:text-center"
      />
      <ProjectCard
        client={client9.src}
        project="Pier Head Tol Becakayu, Jakarta Timur."
        style=""
        styleLabel="text-left sm:text-center"
      />
    </section>
  );
};

export default ProjectContent;
