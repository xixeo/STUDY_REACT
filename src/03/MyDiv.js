import MyDiv2 from "./MyDiv2";
import { BsFillSuitHeartFill } from "react-icons/bs";
//1. useState import
import { useState } from "react";

export default function MyDiv() {
    //2. state변수 선언
    const[n, setN] = useState(0) //n의 초기값 0 선언;

    //3. setN을 통해서 n의 값 변경
    const handleCount = () => {
        setN(n + 1);
    }

    const dName1 = "div 1";
    const dName2 = "div 2";
    const dName3 = "div 3";


    return (
        <div className="w-1/2 h-1/2 border border-stone-300 text-white text-md px-8 py-5 items-center flex flex-col justify-center">
            <MyDiv2 dn1={dName1} dn2={dName2} dn3={dName3} />
            <div className="w-full flex justify-end itmes-center mt-3">
                <span onClick={handleCount} className="text-red-500 text-xl cursor-pointer"><BsFillSuitHeartFill /></span>
                <span className="ml-2 text-stone-900">{n}</span>
            </div>
        </div>
    );
}
