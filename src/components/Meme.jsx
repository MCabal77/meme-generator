import React from "react";
import { useState } from "react";
import memesData from "../data/memes";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeData, setAllMemeData] = useState(memesData.data);

  const getMemeImage = function () {
    const memesArray = allMemeData.memes;
    const randomUrl = memesArray[randomNum(0, memesArray.length - 1)].url;
    // Shallow copy our memes
    setMeme((prevMemes) => ({
      ...prevMemes,
      randomImage: randomUrl,
    }));
  };

  function randomNum(inclusiveLower, inclusiveUpper) {
    return (
      Math.floor(Math.random() * (inclusiveUpper - inclusiveLower + 1)) +
      inclusiveLower
    );
  }

  return (
    <section className="my-8 mx-8 flex flex-col">
      <form className="flex flex-col mb-9">
        {/* Input wrapper */}
        <div className="flex justify-center gap-4">
          <input
            className="input-form input-hover"
            type="text"
            placeholder="Top Text"
            name="topText"
          ></input>
          <input
            className="input-form input-hover"
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
          ></input>
        </div>
        <button
          type="button"
          className="bg-primary hover:bg-gradient-to-br rounded-md h-10 mt-4 font-bold text-white text-base"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </form>
      {/* Conditionally render the image */}
      {meme.randomImage && (
        <div className="w-full flex justify-center">
          <img
            className=" rounded-sm aspect-video object-contain"
            src={meme.randomImage}
          ></img>
        </div>
      )}
    </section>
  );
}

export default Meme;
