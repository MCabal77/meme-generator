import React from 'react';

function Boxes({ isOn, toggle }) {

  return (
    // Everytime the box gets clicked, it runs `changeState`
    <div className={`${isOn ? `bg-green-400` : `bg-red-400 `} duration-300 flex justify-center items-center rounded-md border border-gray-600 h-48 w-48` } onClick={toggle} >
      <p className='text-3xl duration-300 '>{isOn ? 'On' : 'Off'}</p>
    </div>
  )
}

export default Boxes