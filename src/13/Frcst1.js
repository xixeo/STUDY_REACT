import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SelectBox from "../components/SelectBox";
import localData from "./mock/getxy.json";
import Btn from "../05/Btn";
export default function Frcst() {
    const selDate = useRef(); // 날짜 선택
    const selRef = useRef(); //지역 선택
    const [lData, setLdata] = useState(); //날씨 api
    const [ops, setOps] = useState(); //축제 구정보
    const [x, setX] = useState(); //날씨 api
    const [y, setY] = useState(); //날씨 api
    const [area, setArea] = useState();

    //날짜가 선택 되었을 때
    const handleSelect = () => {
        let pDate = selDate.current.value.replaceAll("-", "");
        console.log(pDate);
    };

    //구선택
    const handleLoSelect = () => {
        let tm = localData.filter(
            (item) => item["1단계"] === selRef.current.value
        );
        setX(tm[0]["격자 X"]);
        setY(tm[0]["격자 Y"]);
    };

    const handleClickUltra = () => {
        let add = 0;
        console.log("초단기클릭", add);
        // let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?` ;
        // url = url + `key=${process.env.REACT_APP_API_KEY}` ;
        // url = url +  `&numOfRows=10&pageNo=1&base_date=${selDate.current.value.replaceAll('-', '')}&base_time=0600&` ;
        // url = url +  `nx=55&ny=127` ;

        // console.log(url) ;
        // getFetchData(url) ;
    };
    const handleClickVilage = () => {
        let add = 1;
        console.log("단기클릭", add);
    };

    // 컴포넌트 생성 시 한번 실행
    // useEffect(() => {
    //     let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?`;
    //     url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
    //     url = url + `&numOfRows=10&pageNo=1&base_date=${pDate}&base_time=0600&nx=55&ny=127`;
    //     // 공공 api 서비스 키 노출을 막기 위해 환경변수 설정
    //     getFetchData(url);
    // }, []);

    return (
        <div className="w-full max-w-2xl flex flex-col items-start justify-start h-full">
            <h2 className="text-2xl font-bold my-5">단기예보 선택</h2>
            {/* <Link to='/11'>단기예보 HOME</Link> */}
            <div className="grid grid-cols-2">
                <input
                    type="date"
                    id="dateId"
                    ref={selDate}
                    onChange={handleSelect}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block px-4 py-2"
                />

                <select
                    id="op"
                    ref={selRef}
                    onChange={handleLoSelect}
                    className="border p2"
                >
                    {localData.map((item) => (
                        <option>{item["1단계"]}</option>
                    ))}
                </select>

                {/* <SelectBox
                    id="op"
                    selRef={selRef}
                    ops={ops}
                    initText="지역 선택"
                    handleChange={handleLoSelect}
                    customClass={"border p-2"}
                /> */}
            </div>
            <div className="grid grid-cols-2">
                <Btn
                    customClass={
                        "bg-cyan-400 px-14 py-2 mx-1 rounded-sm text-white"
                    }
                    caption={"초단기 예보"}
                    handleClick={handleClickUltra}
                />
                <Btn
                    customClass={
                        "bg-cyan-400 px-14 py-2 mx-1 rounded-sm text-white"
                    }
                    caption={"단기 예보"}
                    handleClick={handleClickVilage}
                />
            </div>
        </div>
    );
}
