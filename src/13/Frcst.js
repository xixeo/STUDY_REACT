import Btn from "../05/Btn";
import SelectBox from "../components/SelectBox";
import InputBox from "../components/InputBox";
import { MdEdit } from "react-icons/md";

import getxy from "./mock/getxy.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Frcst() {
    const navigate = useNavigate();
    const [ops, setOps] = useState([]);
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();

    const inRef = useRef();
    const selRef = useRef();

    const handleArea = () => {
        let tm = getxy.filter((item) => item["1단계"] === selRef.current.value);
        tm = tm[0];
        console.log(tm);
        setX(tm["격자 X"]);
        setY(tm["격자 Y"]);
        setArea(selRef.current.value);
    };

    const handleUrl = (gubun) => {
        if (!x || !y || !inRef.current.value) {
            alert("날짜와 지역을 선택하세요.");
            return;
        }

        navigate(
            `/11?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll(
                "-",
                ""
            )}&area=${area}`
        );
    };

    //컴포넌트 생성시
    useEffect(() => {
        let tm = getxy.map((item) => item["1단계"]);
        // console.log(tm)
        setOps(tm);
    }, []);

    useEffect(() => {
        console.log(
            "x=",
            x,
            "y=",
            y,
            "area=",
            area,
            "dt=",
            inRef.current.value
        );
    });
    return (
        <div
            className="w-full max-w-2xl h-full flex flex-col
                        justify-start items-center"
        >
            <div className="w-full flex items-center rounded-sm mb-6 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" />
                값이 다른 데이터를 하나의 컴포넌트로 넘겨 받아 출력하기
            </div>
            <h1
                className="w-10/12 text-2xl font-bold 
                     flex justify-center items-center m-5"
            >
                단기예보
            </h1>
            <div className="w-full flex justify-center items-center ">
                <div
                    className="w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2"
                >
                    <InputBox
                        id="dt"
                        type="date"
                        inRef={inRef}
                        customClass={
                            "bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        }
                    />
                    <SelectBox
                        id="sel"
                        ops={ops}
                        selRef={selRef}
                        initText="지역 선택"
                        customClass={
                            "bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        }
                        handleChange={handleArea}
                    />
                    <Btn
                        caption="초단기예보"
                        customClass={
                            "bg-blue-500 text-white py-2 rounded-sm font-bold"
                        }
                        handleClick={() => handleUrl("초단기")}
                    />
                    <Btn
                        caption="단기예보"
                        customClass={
                            "bg-blue-500 text-white py-2 rounded-sm font-bold"
                        }
                        handleClick={() => handleUrl("단기")}
                    />
                </div>
            </div>
        </div>
    );
}
