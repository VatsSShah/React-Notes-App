import React, { useState } from "react";
import Card from "./Card";


function Foreground() {
  const data = [
    {
      desc: "This is a react project made by me my primary tech stack is MERN",
      fliesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
    },
    {
        desc: "This is a react project made by me my primary tech stack is MERN",
        fliesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
      },
      {
        desc: "This is a react project made by me my primary tech stack is MERN",
        fliesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
      },
  ];
  useState();
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((items, index)=>(
        <Card data={item} />
      ))}
    </div>
  );
}

export default Foreground;
