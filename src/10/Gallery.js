import GalleryCard from "./GalleryCard";
import Btn from "../05/Btn";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
    const [gdata, setGdata] = useState();
    const [cards, setCards] = useState();
    const inRef = useRef();

    const handleOk = () => {
        console.log("OK");
        if (inRef.current.value === "") {
            alert("키워드를 입력하세요.");
            inRef.current.focus();
            return;
        }

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url =
            url +
            `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${encodeURI(inRef.current.value)}&_type=json`;

        getFetchData(url);
    };
    const handleClear = (e) => {
        e.preventDefault();
        setGdata("");
        setCards("");
        inRef.current.value = "";
        inRef.current.focus();
    };

    // data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log("fetch", data);
                setGdata(data.response.body.items.item);
            });

        console.log("getFetchData", url);
    };
    //컴포넌트 생성시
    useEffect(() => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`;

        getFetchData(url);
    }, []);

    //gdata 만들어질때
    useEffect(() => {
        if (!gdata) return;
        console.log("gdata", gdata);

        let tm = gdata.map((item) => (
            <GalleryCard
                key={item.galContentId}
                title={item.galTitle}
                imgUrl={item.galWebImageUrl}
                content={item.galPhotographyLocation}
                spTag={item.galSearchKeyword}
            />
        ));

        setCards(tm);
    }, [gdata]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="w-full flex justify-center items-center my-5 h-40">
                <input
                    ref={inRef}
                    type="text"
                    id="txt1"
                    placeholder="입력하세요."
                />
                <Btn
                    caption="확인"
                    customClass={"bg-black text-white mx-1"}
                    handleClick={handleOk}
                />
                <Btn
                    caption="취소"
                    customClass={"bg-black text-white"}
                    handleClick={handleClear}
                />
            </div>
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
