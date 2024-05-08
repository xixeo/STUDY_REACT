import React from "react";

export default function Btn({caption, btnColor, btnRound, handleClick}) {
  const colorB = {
    'blue' : 'bg-blue-300',
    'orange' : 'bg-orange-300',
    'red' : 'bg-red-300'
  }

  const colorBHover = {
    'blue' : 'hover:bg-blue-500',
    'orange' : 'hover:bg-orange-500',
    'red' : 'hover:bg-red-500'
  }

   const roundB = {
    'r0' : 'rounded-none',
    'r-sm' : 'rounded',
    'r-md' : 'rounded-md',
    'r-lg' : 'rounded-lg',
    'r-f' : 'rounded-full'
  }

    return (
      <button onClick={handleClick} className={`
                                    hover:transition-allinline-flex px-10 py-3 justify-center items-center text-white font-bold
                                    ${colorB[btnColor]}
                                    ${colorBHover[btnColor]}
                                    ${roundB[btnRound]}
                                    `}>
              
        {caption}
      </button>
    );
}
