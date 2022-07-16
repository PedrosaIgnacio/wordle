import React from "react";
import { GridCard } from "./GridCard";
import nachoImg from "../../imgs/nacho2.jpg";
import pauImg from "../../imgs/pau.jpg";
import sofiImg from "../../imgs/sofi.jpg";
import delfiImg from "../../imgs/delfi.jpg";
import consuImg from "../../imgs/consu.jpg";
import franImg from "../../imgs/fran.jpg";
import pedroImg from "../../imgs/pedro.jpg";
import delfiVImg from "../../imgs/delfiV.jpg";

export const GridMembers = () => {
  const members = [
    {
      name: "Ignacio Pedrosa",
      description: "El programador",
      img: `${nachoImg}`,
      hashtags: ["developer", "travel", "music"],
    },
    {
      name: "Paula Arrascaeta",
      description: "La que conoce a todos",
      img: `${pauImg}`,
      hashtags: ["party", "ryhtmicgym", "rock&roll"],
    },
    {
      name: "Sofia Almendra",
      description: "La ñoña del grupo",
      img: `${sofiImg}`,
      hashtags: ["morat", "analyst", "countrysidegirl"],
    },
    {
      name: "Delfina Dionisio",
      description: "La chica monster",
      img: `${delfiImg}`,
      hashtags: ["lofigirl", "spotify", "quietgril"],
    },
    {
      name: "Consuelo Cordoba",
      description: "La triple T",
      img: `${consuImg}`,
      hashtags: ["tini", "hockey", "family"],
    },
    {
      name: "Francisco Menendez",
      description: "El mas intenso",
      img: `${franImg}`,
      hashtags: ["disneyboy", "shawnmendes", "bestlaugh"],
    },
    {
      name: "Pedro Argañaraz",
      description: "El chico Fresco",
      img: `${pedroImg}`,
      hashtags: ["storieteller", "football", "rockstar"],
    },
    {
      name: "Delfina Valle",
      description: "La amante de los Perros",
      img: `${delfiVImg}`,
      hashtags: ["dancelover", "chia", "beach"],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
      {members.map((m, ind) => {
        return (
          <GridCard
            key={ind}
            name={m.name}
            description={m.description}
            img={m.img}
            hashtags={m.hashtags}
          />
        );
      })}
    </div>
  );
};
