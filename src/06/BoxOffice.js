import React from "react";
import { useState, useEffect } from "react";
// import boxOffice from "./BoxOffice.json";
import boxOffice from "./BoxOffice2.json";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeTheader from "./BoxOfficeTheader";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOffice() {
    // dailyList 배열에서 dailyList.movieNm값 다 가져오기
    // let nm = dailyList.map((item) => (
    //     <tr key={item.movieCd}>

    //     </tr>
    // ));

    const [dailyList, setDailyList] = useState([]);
    const [selMv, setSelMv] = useState();
    const now = new Date();
    const nowStr = now.toLocaleDateString()

    useEffect(() => {
        setDailyList(boxOffice.boxOfficeResult.dailyBoxOfficeList);
        setSelMv(dailyList[0]);
        console.log(dailyList, "eeee");
    }, [dailyList]);

    return (
        // <div>
        //     <ul>{nm}</ul>
        // </div>
        <div className="w-full max-w-screen-lg p-5 h-full">
            <div className="flex flex-col">
                <div className="flex justify-between items-end my-5 ">
                <div className="text-2xl font-bold ">Daily Movie Chart</div>
                <div>{nowStr}</div>
                </div>
                <table className="text-left text-sm font-light text-surface ">
                    <BoxOfficeTheader />
                    <BoxOfficeTbody dailyList={dailyList} setSelMv={setSelMv} />
                    {/* 메소드도 전달 가능 */}
                </table>
                {selMv && <BoxOfficeInfo selMv={selMv} />}
            </div>
        </div>
    );
}
