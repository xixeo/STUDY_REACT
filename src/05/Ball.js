import React from "react";

export default function Ball({n}) {

  const colorN = {
      'b0' : 'bg-pink-400',
      'b1' : 'bg-orange-400',
      'b2' : 'bg-yellow-400',
      'b3' : 'bg-lime-400',
      'b4' : 'bg-cyan-400',
      'b5' : 'bg-pink-400',
      'b6' : 'bg-violet-400'
  }

    return (
      <div className={`inline-flex border border-white w-14 h-14 mx-2 shadow-md justify-center items-center rounded-full text-2xl font-bold ${colorN["b" + Math.floor(n / 10)]} text-white`}>{n}</div>
    );
}
