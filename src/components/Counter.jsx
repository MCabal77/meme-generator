import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = function () {
    // This isn't the best practice 
    // You need to set a call back function to your `setCount` function
    // setCount(count + 1);

    // This would be best practice
    // Whenever you do a callback like this, react always passes the old value as a reference, hence why our variable name here is called `prevCounter`
    setCount(prevCounter => prevCounter + 1);
  };

  const decrementCounter = function () {
    setCount(prevCounter => prevCounter - 1);
  };

  return (
    <div className="flex text-xl justify-center text-white items-end">
      {/* Decrement counter */}
      <button className=" button " onClick={decrementCounter}>
        -
      </button>
      {/* Show the current counter */}
      <div
        className={`bg-gray-900 h-24 w-24 rounded-[50%] flex justify-center items-center font-semibold ${
          count > 0
            ? `text-green-600`
            : count < 0
            ? `text-red-600`
            : `text-white`
        }`}
      >
        {count}
      </div>
      {/* Increment counter */}
      <button className="button" onClick={incrementCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
