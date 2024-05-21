import React from "react";
import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    const [tdata, setTdata] = useState(); // fetch 데이터

    const [category1, setCategory1] = useState(); //대분류 데이터
    const [select1, setSelect1] = useState(); //선택된 대분류 데이터

    const [category2, setCategory2] = useState(); //중분류 데이터
    const [select2, setSelect2] = useState(); //선택된 중분류 데이터

    const [info, setInfo] = useState(); //상세정보

    //사용자 정의 함수
    const getFetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setTdata(data.data))
            .catch((err) => console.log(err));
    };
    //컴포넌트 생성 시
    useEffect(() => {
        let url =
            "https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?";
        url = `${url}page=1&perPage=17`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;

        getFetchData(url);
    }, []);

    //tdata 변경될 때
    useEffect(() => {
        if (!tdata) return;
        let tm = tdata.map((item) => item["사고유형_대분류"]);
        tm = [...new Set(tm)];

        setCategory1(tm);
    }, [tdata]);

    // 대분류 생성 후
    useEffect(() => {
        if (!tdata || !category1) return;
    }, [category1]);

    //대분류를 선택하면 category 2 생성
    useEffect(() => {
        if (!tdata || !category1 || !select1) return;

        let tm = tdata
            .filter((item) => item["사고유형_대분류"] === select1)
            .map((item) => item["사고유형_중분류"]);
        setCategory2(tm);
    }, [select1]);

    // 중분류가 선택되면
    useEffect(() => {
        if (!tdata || !category1 || !select1 || !select2) return;

        let tm = tdata.filter(
            (item) =>
                item["사고유형_대분류"] === select1 &&
                item["사고유형_중분류"] === select2
        );
        tm = tm[0];

        const infoKey = [
            "사고건수",
            "사망자수",
            "중상자수",
            "경상자수",
            "부상신고자수",
        ];
        console.log(infoKey, tm, 'infokkkk')
        tm = infoKey.map((item) => (
            <div key={item} >
                <div className="bg-slate-300 py-1 mt-3">{item}</div>
                <div className="bg-slate-100 py-3">{tm[item]}</div>
            </div>
        ));
        setInfo(tm);
    }, [select2]);

    return (
        <div className="w-full max-w-3xl">
            <div>
                {category1 && (
                    <TrafficNav
                        title="대분류"
                        category={category1}
                        select={select1}
                        setSelect={setSelect1}
                    />
                )}
            </div>
            <div className="mt-2">
                {category2 && (
                    <TrafficNav
                        title="중분류"
                        category={category2}
                        select={select2}
                        setSelect={setSelect2}
                    />
                )}
            </div>
            <div className="mt-2 w-full grid grid-cols-5 text-center">{info}</div>
        </div>
    );
}
