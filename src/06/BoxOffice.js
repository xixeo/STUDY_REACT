import React from "react";
import boxOffice from "./BoxOffice.json";

export default function BoxOffice() {
    const dailyList = boxOffice.boxOfficeResult.dailyBoxOfficeList;

    // dailyList 배열에서 dailyList.movieNm값 다 가져오기
    let nm = dailyList.map((item) => (
        <li key={item.movieCd}>{item.rank} : {item.movieNm}</li>
    ));

    return (
        <div>
            <ul>{nm}</ul>
        </div>
    );
}
