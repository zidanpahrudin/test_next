import React from "react";
import { Client } from "../atom";
import {
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
} from "@/assets";

const Clients = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[64px] cursor-default">
      <h1 className="text-5xl font-semibold text-secondary">Our Client</h1>
      <div
        className="
            grid grid-cols-1 gap-x-10 gap-y-10
            justify-evenly justify-items-center
            content-evenly items-center
            xl:grid-cols-4
            lg:grid-cols-3
            md:grid-cols-2
        "
      >
        <Client
          src={client8.src}
          ptName={"PT. Total Persada"}
          height={"100px"}
        />
        <Client
          src={client3.src}
          ptName={"PT. Jasa Marga (Persero)"}
          height={"100px"}
        />
        <Client
          src={client9.src}
          ptName={"PT. Waskita Karya"}
          height={"100px"}
        />
        <Client
          src={client4.src}
          ptName={"PT. Jaya Konstruksi"}
          height={"100px"}
        />
        <Client
          src={client6.src}
          ptName={"PT. Nindya Karya (Persero)"}
          height={"100px"}
        />
        <Client
          src={client7.src}
          ptName={"PT. Semen Padang"}
          height={"100px"}
        />
        <Client
          src={client5.src}
          ptName={"PT. Jaya Obayashi"}
          height={"100px"}
        />
        <Client
          src={client2.src}
          ptName={"PT. Indofood Sukses Makmur, Tbk."}
          height={"100px"}
        />
      </div>
    </div>
  );
};

export default Clients;
