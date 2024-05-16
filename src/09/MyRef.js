import React from "react";
import { useState, useEffect, useRef } from "react";
import Btn from "../05/Btn";

export default function MyRef() {
  let cVal = 0;

  const [sVal, setSVal] = useState(0);
  const rVal = useRef(0);

  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();

  const handleClick = () =>{
    console.log('x1 = ', x1.current.value)
    console.log('x2 = ', x2.current.value)

    if (!x1.current.value){alert('값을 입력하세요'); x1.current.focus(); return}
    x3.current.value = parseInt(x1.current.value) +parseInt(x2.current.value)
    console.log('x3 = ', x3.current.value)
  }

  const handleClickComp = () => {
    cVal++
    console.log(cVal)
  }
  const handleClickState = () => {
    console.log()
    setSVal(sVal + 1) // 값이 바뀔 때마다 실시간으로 렌더링
  }
  const handleClickRef = () => {
    rVal.current = rVal.current + 1
    console.log(rVal) // 바뀌는 값을 저장하고 있다가 렌더링 될 때 화면에 반영
  }

  // 변수 변경이 되면

  useEffect(() => {
    console.log(sVal)
  }, [sVal])

    return (
        <div className="w-10/12 flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 text-center mb-4">
                <span className="mx-1 font-bold text-cyan-400">컴포넌트 변수 : {cVal}</span>
                <span className="mx-1 font-bold text-rose-500">state 변수 : {sVal}</span>
                <span className="mx-1 font-bold text-violet-500">ref 변수 : {rVal.current}</span>
            </div>
            <div className="grid grid-cols-3 text-center mb-10">
                <span><Btn customClass={'bg-cyan-400 mx-1 rounded-sm text-white'} caption={'component'} handleClick={handleClickComp}/></span>
                <span><Btn customClass={'bg-rose-500 mx-1 rounded-sm text-white'} caption={'state'} handleClick={handleClickState}/></span>
                <span><Btn customClass={'bg-violet-500 mx-1 rounded-sm text-white'} caption={'ref'} handleClick={handleClickRef}/></span>
            </div>
            <div className="flex flex-nowrap items-center">
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="txt1" ref={x1}/>
              <span className="mx-2"> + </span>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="txt2" ref={x2}/>
              <Btn customClass={'rounded-full'} caption={'='} handleClick={handleClick}/>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="txt3" ref={x3}/>
            </div>
        </div>
    );
}
