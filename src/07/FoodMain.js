import React from "react";
import { useState } from "react";
import fooddata from "./fooddata.json";
import Btn from "../05/Btn";
import FoodCard from "./FoodCard";

export default function FoodMain() {
  const [card, setCardList] = useState([]);
  // console.log(fooddata);
    // 중복되지 않는 배열 c1을 만들기
    let c1 = fooddata.map((item) => item["운영주체 분류"]); //운영주체 분류 가져오기
    c1 = new Set(c1); // 중복되는 운영주체 분류값 제거
    c1 = [...c1]; // 배열로 반환 : spread 연산자

    const handleClick = (e) => {
       console.log(e);
       let tm = fooddata.filter(item => item["운영주체 분류"] === e)
                        .map(item => <FoodCard key={item.사업장명}  data={item}/>)
       setCardList(tm)
    };
    //Btn 5개 만들기

    let btn = c1.map((item) => (
        <Btn
            customClass={'text-[#222222] hover:bg-blue-50'}
            key={`${item}`}
            caption={`${item}`}
            handleClick={()=> {handleClick(item)}}
            height={"h-10"}
        />
    ));

    // let card = fooddata.map((item) => <FoodCard key={item.사업장명}  data={item}/>)

    return (
        <div className="flex flex-col w-full h-full max-w-screen-lg">
            <div className="flex w-full justify-center border-b">{btn}</div>
            <div className="mt-5 w-full grid grid-cols-1 md:grid-cols-2 box-border">
             {card}
            </div>
        </div>
    );
}
