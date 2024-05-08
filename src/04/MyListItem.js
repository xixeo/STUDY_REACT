import React from "react";
// import Like from "../03/Like";
// 2. useEffect 훅 import
import { useState, useEffect } from "react";

export default function MyListItem({ title, imgUrl, content }) {
    const [cnt, setCnt] = useState(0);
    const handleClick = () => {
        setCnt(cnt + 1);
// 1. 콘솔창에 cnt는 setCnt 동작 전에 출력되기 때문에 변경된 값이 정확하게 찍히지 않음. (=리액트는 비동기이기때문에)
        // console.log(cnt, 'cnt')
    }

    // 3. useEffect를 사용하여 
    // 3-1. 컴포넌트 생성시 최초 한번 자동으로 실행 : useEffect(()=> {}, []) : defendency array가 있는경우
    // useEffect(()=> {
    //     console.log(title, '변경 cnt', cnt);
    // }, [cnt]);

    // 3-2. 값이 변경될 때마다 실행
    useEffect(()=>{
        console.log(title, '변경됨', cnt)
    })

    return (
        <div className="flex w-full justify-center items-start border p-5">
            <div className="flex w-2/5">
                <img src={imgUrl} alt={imgUrl} />
            </div>
            <div className="flex flex-col justify-between w-3/5 px-3 lg:px-0 pt-3 h-full">
                <div>
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-sm pt-2">{content}</div>
                </div>
                <div className="flex justify-end text-xs items-center">
                    <span onClick={handleClick} className="text-red-500 cursor-pointer">❤</span>
                    <span className="mx-1 font-bold">좋아요</span>
                    <span className="font-bold">{cnt}</span>
                </div>
            </div>
        </div>
    );
}
