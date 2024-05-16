import React from "react";
import { useEffect, useState } from "react";
import Btn from "../05/Btn";

export default function TrafficMain() {
    const [tdata, setTdata] = useState([]); //전체 fetch 데이터
    const [c1, setC1] = useState(); //대분류 데이터
    const [c1Tag, setC1Tag] = useState();
    const [c1Sel, setC1Sel] = useState();

    const [c2, setC2] = useState(); //중분류 데이터
    const [c2Tag, setC2Tag] = useState();
    const [c2Sel, setC2Sel] = useState();

    const [info, setInfo] = useState(); //상세정보 데이터

    // 대분류를 선택할 때 실행
    const handleC1Select = (item) => {
        setC1Sel(item);
    };

    // 중분류를 선택할 때 실행
    const handleC2Select = (item) => {
        setC2Sel(item);
    };

    //fetch 함수로 데이터 가져오기
    const getFetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json()) //fetch결과를 json 형태로 resp변수로 다시 반환함
            .then((data) => setTdata(data.data))
            .catch((err) => console.log(err));
    };
    // 컴포넌트 생성 시 한번 실행
    useEffect(() => {
        let url =
            "https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?";
        url = `${url}page=1&perPage=17`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
        // 공공 api 서비스 키 노출을 막기 위해 환경변수 설정
        console.log(url);
        getFetchData(url);
    }, []);

    //tdata가 변경이 되면 실행
    useEffect(() => {
        if (tdata.length === 0) return;
        let tm = tdata.map((item) => item["사고유형_대분류"]);
        tm = [...new Set(tm)];

        setC1(tm);
    }, [tdata]);

    // 대분류 생성후
    useEffect(() => {
        if (!c1) return;

        let tm = c1.map((item) => (
            <Btn
                customClass={
                    c1Sel === item
                        ? "text-blue-500"
                        : "text-[#222222] hover:bg-blue-50"
                }
                key={item}
                caption={item}
                handleClick={() => handleC1Select(item)}
                height={"h-10"}
            />
        ));
        setC1Tag(tm);
    }, [c1]);

    //대분류 선택 => 중분류
    useEffect(() => {
        console.log(c1Sel, "대분류 선택");
        //중분류 만들기
        let tm = tdata
            .filter((item) => item["사고유형_대분류"] === c1Sel)
            .map((item) => item["사고유형_중분류"]);
        setC2(tm);
    }, [c1Sel]);

    // 중분류 만들어졌을 때
    useEffect(() => {
        if (!c2) return;
        let tm = c2.map((item) => (
            <Btn
                customClass={"text-white bg-blue-400 mx-1 rounded-md"}
                key={item}
                caption={item}
                handleClick={() => handleC2Select(item)}
                height={"h-8"}
            />
        ));
        setC2Tag(tm);
    }, [c2]);

    //중분류 선택  => 상세정보
    useEffect(() => {
    //   if (!info) return;

        console.log("대분류선택 :", c1Sel);
        console.log("중분류선택 :", c2Sel);
        let tm = tdata.filter(
            (item) =>
                item["사고유형_대분류"] === c1Sel &&
                item["사고유형_중분류"] === c2Sel
        );
        tm = tm[0];
        console.log("상세", tm);
        setInfo(tm["사고건수"]);
    }, [c2Sel]);

    return (
        <div className="flex flex-col w-10/12 items-center h-full">
            <div className="flex w-full border-b justify-center">{c1Tag}</div>
            <div className="mt-3">{c2Tag}</div>
            <span>사고건수  {parseInt(info).toLocaleString()}</span>
        </div>
    );
}
