import Image from "next/image";
import React from "react";
import SliderIMG from "../public/KDB_0604.jpg";


function Hero() {
  return (
    <div className="flex w-full h-3/4">
      <div className="-z-10 ">
        <Image
          priority
          src={SliderIMG}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"        
        />
      </div>
    </div>
  );
}

export default Hero;
