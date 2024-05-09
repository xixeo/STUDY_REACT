import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function BoxOfficeInfo({ selMv }) {
    // console.log(selMv, "BoxOfficeInfo");
    return (
        <div className="group w-full flex justify-center items-end py-4 mt-4 bg-black cursor-pointer">
            <span className="font-bold mr-4 text-xl text-white">
                " {selMv.movieNm} "
            </span>
            <span className="text-neutral-400 group-hover:text-yellow-200 duration-300 ease-in-out flex items-center">
                정보 보러가기
                <IoIosArrowForward className="ml-1 group-hover:translate-x-1 transition  " />
            </span>
            {/* 영화정보 */}
        </div>
    );
}
