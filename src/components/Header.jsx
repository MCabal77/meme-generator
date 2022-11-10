import React from "react";
import { trollFace } from '../assets';

function Header() {
  return (
    // Wrapper for our header
    <header className=" bg-primary h-16 pl-5 pr-9">
      {/* Wrapper for text */}
      <section className=" flex items-center h-full">
        {/* Wrapper for left side. Includes logo and website name */}
        <div className="flex gap-2">
          <img src={trollFace}></img>
          <h1 className=" font-bold text-xl text-white">Meme Generator</h1>
        </div>
        {/* Wrapper for right side. States the project */}
        <div className=" text-white ml-auto font-medium text-base">
          <h2> React Course - Project 3</h2>
        </div>
      </section>
    </header>
  );
}

export default Header;
