import React from "react";
import { useState } from "react";
import bank from "./img/bank.png";
import market from "./img/market.png";
import busan from "./img/busan.png";

export default function FoodCard({ data }) {
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
        // false면 true로 true면 false로 반환
    };
    // const data = {
    //   구분: "기초푸드뱅크",
    //   시군구: "부산진구",
    //   사업장명: "부산진구기초푸드뱅크",
    //   신고기준: "임의",
    //   "사업장 소재지": "부산광역시 부산진구 당감서로 16(당감동)",
    //   "연락처(대표번호)": "051-896-2320",
    //   팩스번호: "051-894-2320",
    //   "운영주체 분류": "1. 사회복지법인",
    //   운영주체명: "당감종합사회복지관",
    // };

    // console.log(fooddata)

    return (
        <div className="w-f90 m-2 flex border border-[#eeeeee] shadow-lg shadow-[#e9e9e9]  rounded-md p-4 justify-center items-center">
            <div className="w-1/3 flex justify-between">
                <img
                    src={
                        data["구분"] === "기초푸드뱅크"
                            ? bank
                            : data["구분"] === "광역지원센터"
                            ? busan
                            : market
                    }
                    alt="bank"
                />
            </div>
            <div className="ml-5 w-2/3 h-full flex flex-col justify-between items">
                <div>
                    <p className="text-xl font-bold text-slate-600">
                        {data.사업장명}
                    </p>
                    <div className="text-md text-slate-600 font-bold">
                        {data.운영주체명}
                    </div>
                    <div className="text-sm text-slate-500">
                        {data["사업장 소재지"]}
                    </div>
                </div>
                {/* isShow && :isShow가 trud면~ */}
                <div
                    onClick={handleShow}
                    className="w-full cursor-pointer bg-stone-600 h-7 flex items-center pl-2 mt-2 mb-1 text-white"
                >
                    {isShow && <span>{data["연락처(대표번호)"]}</span>}
                </div>
            </div>
        </div>
    );
}
