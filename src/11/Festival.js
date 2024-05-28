import React from "react";
import { useState, useEffect, useRef } from "react";
import SelectBox from "../components/SelectBox";
import GalleryCard from "../10/GalleryCard";
import { MdEdit } from "react-icons/md";

export default function Festival() {
    const [tdata, setTdata] = useState(); //부산 축제 정보
    const [ops, setOps] = useState(); //축제 구정보
    const selRef = useRef(); //옵션 선택
    const [cards, setCards] = useState();

    // data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log("fetch", data);
                setTdata(data.getFestivalKr.item);
            });

        console.log("getFetchData", url);
    };

    //구선택
    const handleGuSelect = () => {
        console.log(selRef.current.value);
        if (!ops) return;
        let tm = tdata
            .filter((item) => item["GUGUN_NM"] === selRef.current.value)
            .map((item) => (
                <GalleryCard
                    key={item.UC_SEQ}
                    title={item.TITLE}
                    content={item.SUBTITLE}
                    imgUrl={item.MAIN_IMG_NORMAL}
                    spTag={item.MAIN_PLACE}
                />
            ));
        setCards(tm);
    };

    // 컴포넌트 생성 시 한번 실행
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + `&numOfRows=37&resultType=json`;
        // 공공 api 서비스 키 노출을 막기 위해 환경변수 설정
        getFetchData(url);
    }, []);

    //데이터가 fetch 되었을때
    useEffect(() => {
        if (!tdata) return;
        console.log(tdata);
        let tm = tdata.map((item) => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();
        setOps(tm);
    }, [tdata]);

    return (
        <div className="w-full max-w-screen-xl h-auto min-h-full flex flex-col justify-start items-start">
            <div className="w-full flex items-center rounded-sm mb-6 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" />
                selec를 통해 api 데이터 필터링하기
            </div>
            <form className="w-full flex justify-center items-center h-full">
                <div className="w-3/5 lg:w-2/5 grid grid-cols-1 md:grid-cols-2 my-5 h-full">
                    <label
                        htmlFor="op"
                        className="text-xl font-bold
                              inline-flex justify-center items-center mb-5 md:mb-0 mr-5
                             text-gray-900 dark:text-white"
                    >
                        부산축제정보
                    </label>
                    {ops && (
                        <SelectBox
                            id="op"
                            selRef={selRef}
                            ops={ops}
                            initText="---부산 지역 구 선택 ---"
                            handleChange={handleGuSelect}
                            customClass={"border p-2"}
                        />
                    )}
                </div>
            </form>
            <div
                className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-5 place-items-center"
            >
                {cards}
            </div>
        </div>
    );
}
