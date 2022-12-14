import React from "react";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeData, setAllMemeData] = useState([]);

  // Initial API request
  useEffect(() => {
    const getMemes = async function() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const memesApi = await response.json();
      setAllMemeData(memesApi.data.memes);
    }
    getMemes();
  }, []);

  const getMemeImage = function () {
    const randomUrl = allMemeData[randomNum(0, allMemeData.length - 1)].url;
    // Shallow copy our memes
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomUrl,
    }));
  };

  const handleChange = function (event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
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
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="input-form input-hover"
            type="text"
            placeholdger="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
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
        <div className="w-full flex justify-center relative">
          <img
            className=" rounded-sm aspect-video object-contain"
            src={meme.randomImage}
          />
          <h3 className="caption top-2">{meme.topText}</h3>
          <h3 className="caption bottom-2 ">{meme.bottomText}</h3>
        </div>
      )}
    </section>
  );
}

export default Meme;
