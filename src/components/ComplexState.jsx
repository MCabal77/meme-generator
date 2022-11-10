import React from "react";
import { useState } from "react";

import user from "/src/assets/user.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

// import ArrayItem from "./ArrayItem";
import Boxes from "./Boxes";

import boxes from "../data/boxes";

// Complext state for arrays
// function ComplexState() {
//   const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

//   const addItem = function () {
//     return setThingsArray((prevArray) => [
//       ...prevArray,
//       `Thing ${prevArray.length + 1}`,
//     ]);
//   }

//   return (
//     // Background
//     <section className=" text-white bg-green-500 min-h-screen h-full">
//       {/* Container for our content */}
//       <div className=" p-10 flex flex-col items-center">
//         {/* Our button */}
//         <button
//           className=" border-2 rounded-[50px] px-10 py-5 font-semibold text-3xl mb-5"
//           onClick={addItem}
//         >
//           Add Item
//         </button>

//         {/* Our array */}
//         {thingsArray.map((element, index) => (
//           <ArrayItem key={index} item={element} />
//         ))}
//       </div>
//     </section>
//   );
// }

function ComplexState() {
  const [squares, setSquares] = useState(boxes);

  const toggle = function (id) {
    // Call `setSquares` which is the state setter function
    // We use the callback version because we care about what the previous state looked like
    setSquares((prevSquares) => {
      // For each of the previous squares, we'll map over them
      // Reminder: .map() returns a new array without modifying the original array
      // Whatever gets returned on this callback function will be placed in the same index in the new array as the old array
      return prevSquares.map((prevSquare) => {
        // Check if the id matches the id passed in the parent function
        // If true, then replace the old object with a new object, but overwrite the on state
        // If not true, give old square
        return prevSquare.id === id ? { ...prevSquare, on: !prevSquare.on } : prevSquare;
      });
    });
  };

  return (
    // Main container
    <section className="flex flex-col items-center">
      <h1 className=" text-2xl p-5">Boxes will go here</h1>
      {/* Box container */}
      <div className="w-full flex justify-center gap-5">
        {squares.map((element) => (
          <Boxes
            key={element.id}
            isOn={element.on}
            toggle={() => {toggle(element.id)}}
          />
        ))}
      </div>
    </section>
  );
}

// function ComplexState() {
//   const [contact, setContact] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   return (
//     // Background
//     <section className="flex justify-center items-center min-h-screen">
//       {/* Card Container */}
//       <article className=" w-[18rem] border border-gray-300 rounded-lg h-[30rem] shadow-card">
//         {/* Image */}
//         <img src={user} className="w-full px-[10%] pt-[10%]"></img>
//         {/* Text Wrapper */}
//         <div className="flex flex-col mx-5 flex-wrap">
//           {/* Conditionally Render Star Icon */}
//           {contact.isFavorite ? (
//             <AiFillStar size={40} />
//           ) : (
//             <AiOutlineStar size={40} />
//           )}
//           {/* Name */}
//           <h2 className=" font-semibold text-3xl my-5">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           {/* Telephone */}
//           <p className=" text-gray-500">{contact.phone}</p>
//           {/* Email */}
//           <p className=" text-gray-500">{contact.email}</p>
//         </div>
//       </article>
//     </section>
//   );
// }

export default ComplexState;
