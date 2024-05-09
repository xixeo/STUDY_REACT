import React from "react";
// import { useEffect, useState } from "react";
import boxOffice from "./BoxOffice.json";

export default function BoxOffice_1() {
    const dailyList = boxOffice.boxOfficeResult.dailyBoxOfficeList;

    return (
        <div>
            <div>
                {dailyList.map((movie) => (
                    <div key={movie.movieCd}>
                        <div className="text-sm font-bold text-center bg-red-500 text-white py-1">
                            {movie.rank}
                        </div>
                        <div className="flex justify-between items-baseline">
                            {/* img경로는 public 하위로 지정해야 엑박이 뜨지 않는다 */}
                            <img
                                className="h-20"
                                src={`./img/${movie.movieCd}.jpg`}
                                alt={movie.movieCd}
                            ></img>
                            <div className="text-gl font-bold">
                                {movie.movieNm}
                            </div>
                        </div>
                        <p>일일 관객수: {movie.audiCnt}</p>
                        <p>누적 관객수: {movie.audiAcc}</p>
                        <div className="text-sm text-zinc-700">
                            {movie.openDt} 개봉
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
