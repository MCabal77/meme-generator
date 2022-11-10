import React from "react";
import { useState } from "react";

function Ternary() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  const buttonPress = function() {
    setIsGoingOut(prevState => !prevState);
  }

  return (
    <section className=" bg-gray-700 h-screen w-full ">
      <header className=" flex flex-col items-center gap-5 pt-5">
        <h3 className=" text-5xl text-white">
          Do I feel like going out tonight?
        </h3>
        <button className="rounded-[50%] cursor-pointer bg-white w-48 h-48 font-bold text-3xl hover:bg-slate-400 transition duration-300" onClick={buttonPress}>
          {isGoingOut ? 'Yes' : 'No'}
        </button>
      </header>
    </section>
  );
}

export default Ternary;
