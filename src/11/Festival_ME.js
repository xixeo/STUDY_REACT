import React from "react";
import GalleryCard from "../10/GalleryCard";
import { useState, useEffect, useRef } from "react";

export default function Festival() {
    const [tdata, setTdata] = useState([]);
    const [select, setSelect] = useState(); //대분류 데이터
    const [selectTag, setSelectTag] = useState();
    const [cards, setCards] = useState();
    const selRef = useRef();

    const handleChange = (e) => {
        // setSelect(item);
        // console.log(e.target.value);
        if (!select) return;
        let tm = tdata
            .filter((item) => item["GUGUN_NM"] === e.target.value)
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

    // data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json()) //fetch결과를 json 형태로 resp변수로 다시 반환함
            .then((data) => setTdata(data.getFestivalKr.item)) //37개 리스트 가져옴
            .catch((err) => console.log(err));
    };

    // 컴포넌트 생성 시 한번 실행
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + `&numOfRows=37&resultType=json`;
        // 공공 api 서비스 키 노출을 막기 위해 환경변수 설정
        getFetchData(url);
    }, []);

    //tdata가 변경이 되면 실행
    useEffect(() => {
        if (tdata.length === 0) return;
        let tm = tdata.map((item) => item["GUGUN_NM"]);
        tm = [...new Set(tm)].sort();
        setSelect(tm);
    }, [tdata]);

    // 분류 생성후
    useEffect(() => {
        if (!select) return;

        let tm = select.map((item) => (
            <option key={item.idx} value={item}>
                {item}
            </option>
        ));
        setSelectTag(tm);
    }, [select]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-center text-xl font-bold mb-2">부산 축제 정보</div>
            <select className="border p-2 mb-4" onChange={handleChange}>{selectTag}</select>
            <div
                className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2"
            >
                {cards}
            </div>
        </div>
    );
}
