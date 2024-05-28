import GalleryCard from "./GalleryCard";
import Btn from "../05/Btn";
import { useState, useEffect, useRef } from "react";
import { MdEdit } from "react-icons/md";

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
        <div className="w-full max-w-screen-xl h-full flex flex-col justify-start items-center">
            <div className="w-full flex items-center rounded-sm mb-6 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" />
                키워드 검색을 통해 api 데이터 필터링하기
            </div>
            <div className="w-3/5 lg:w-2/5 grid grid-cols-1 md:grid-cols-2 my-5">
                <label
                    htmlFor="op"
                    className="text-xl font-bold w-full
                              inline-flex justify-center items-center mb-5 md:mb-0 mr-5
                             text-gray-900 dark:text-white"
                >
                    부산 관광정보
                </label>
                <div className="flex justify-center">
                    <input
                        className="border p-2 rounded-sm"
                        ref={inRef}
                        type="text"
                        id="txt1"
                        placeholder="태종대"
                    />

                    <Btn
                        caption="확인"
                        customClass={
                            "bg-orange-500 py-2 rounded-sm text-white mx-1"
                        }
                        handleClick={handleOk}
                    />
                    <Btn
                        caption="취소"
                        customClass={"bg-orange-500 py-2 rounded-sm text-white"}
                        handleClick={handleClear}
                    />
                </div>
            </div>
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
