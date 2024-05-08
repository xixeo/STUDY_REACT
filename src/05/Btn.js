import React from "react";

export default function Btn({ caption, btnColor, btnRound, btnBorder, handleClick }) {
    const bg = {
        blue: "bg-blue-300",
        orange: "bg-orange-300",
        red: "bg-red-300",
    };

    const bgHover = {
        blue: "hover:bg-blue-500",
        orange: "hover:bg-orange-500",
        red: "hover:bg-red-500",
    };

    const round = {
        "r-0": "rounded-none",
        "r-sm": "rounded",
        "r-md": "rounded-md",
        "r-lg": "rounded-lg",
        "r-f": "rounded-full",
    };

    const border = {
      "b-0": "border-0",
      "b-1": "border",
  };

//   const borderColor = {
//     "b-0": "border-0",
//     "b-1": "border",
// };

    return (
        <button
            onClick={handleClick}
            className={`
                                    hover:transition-allinline-flex px-10 py-3 justify-center items-center text-white font-bold
                                    ${bg[btnColor]}
                                    ${bgHover[btnColor]}
                                    ${round[btnRound]}
                                    ${border[btnBorder]}
                                    `}
        >
            {caption}
        </button>
    );
}
