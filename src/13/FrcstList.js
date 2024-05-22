import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SelectBox from "../components/SelectBox";
import getCode from "./mock/getcode.json";

export default function FrcstList() {
    //url 전달 값
    const [sPrams] = useSearchParams();
    const gubun = sPrams.get("gubun");
    const x = sPrams.get("x");
    const y = sPrams.get("y");
    const dt = sPrams.get("dt");
    const area = sPrams.get("area");
    console.log(gubun, x, y, dt, area);

    //state 변수
    const [ops, setOps] = useState([]); // selectBox
    const [tdata, setTdata] = useState(); //날씨 api

    //ref 변수
    const selRef = useRef();

    // data fetch
    const getFetchData = (url) => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          console.log("fetch", data)
          setTdata(data.response.body.items.item)
        })
        ;
    }

    const handleSelect = () => {
      console.log(selRef.current.value)
      // let tm = tdata.filter(item => item[0] === selRef.current.value)
      // .map((item) => (
      //     <div>{item.value}</div>
      // ));

    }

    //컴포넌트 생성시
    useEffect(() => {
        //항목 select
        let tm = getCode
            .filter(item =>
                gubun === "단기"
                    ? item["예보구분"] === "단기예보"
                    : item["예보구분"] === "초단기예보"
            )
            .map(item => item["항목명"]);
        console.log(tm);
        setOps(tm);

        let url ;
        if ( gubun === '초단기') {
          url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
          url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
          url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}` ;
        }
        else {
          url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
          url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
          url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}` ; 
        }
        getFetchData(url);
    }, []);

    useEffect(() => {
      console.log(tdata)
    },[tdata])

    return (
        <div className="w-full max-w-2xl flex flex-col items-start justify-start h-full">
            <div className="w-full lg:flex items-center text-2xl font-bold">
                <div className="mb-4 lg:mb-0 lg:w-2/3">
                    <span className="text-amber-500 mr-2">{area}</span> {gubun}
                    예보
                </div>
                <SelectBox
                    id="sel"
                    ops={ops}
                    selRef={selRef}
                    initText="항목 선택"
                    handleChange={handleSelect} 
                    customClass={
                        "bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }
                />
            </div>
        </div>
    );
}
