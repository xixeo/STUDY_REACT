import React, { useState } from "react";
import Ball from "./Ball";
import Btn from "./Btn";
import { MdEdit } from "react-icons/md";

export default function Lotto() {
    ////////////
    const [tags, setTags] = useState();

    const handleClick = () => {
        // setTags(Math.floor(Math.random()*45) + 1); //랜덤 숫자 하나만 생성할때
        let arr = [];
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!arr.includes(n)) arr.push(n); //중복되는 숫자가 없을 시 배열에 푸쉬
        }

        // array 개수만큼 tm이 생성 = tm도 배열
        let tm = arr.map((item) => <Ball n={item} key={item} />);

        // + 태그를 삽입하기 위해 splice 로 배열 편집
        tm.splice(
            6,
            0,
            <span
                className="plus text-gray-950 flex items-center text-3xl mx-2 font-bold"
                key="sp"
            >
                +
            </span>
        );

        setTags(tm);
    };
    ////////////

    return (
        <div className="flex flex-col w-full max-w-2xl h-full justify-start">
            <div className="w-full flex items-center rounded-sm mb-12 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" />
                겹치지 않는 7자리 난수를 생성하기
            </div>
            <div className="justify-center border p-10">
                <div className="flex justify-center mb-10">
                    <Btn
                        caption={"로또 번호 생성하기"}
                        btnColor={"red"}
                        btnRound={"r-md"}
                        handleClick={handleClick}
                        customClass={"px-4 py-2 text-white"}
                    />
                </div>
                <div className="w-full flex justify-center">{tags}</div>
            </div>
        </div>
    );
}
