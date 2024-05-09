import React from "react";
import boxOffice from "./BoxOffice.json";
import BoxOfficeTbody from "./BoxOfficeTbody"
import BoxOfficeTheader from "./BoxOfficeTheader"

export default function BoxOffice() {
    const dailyList = boxOffice.boxOfficeResult.dailyBoxOfficeList;
    // dailyList 배열에서 dailyList.movieNm값 다 가져오기
    // let nm = dailyList.map((item) => (
    //     <tr key={item.movieCd}>
          
    //     </tr>
    // ));

    return (
        // <div>
        //     <ul>{nm}</ul>
        // </div>
        <div className="w-full p-5 h-full">
            <div className="flex flex-col">
                <table className="text-left text-sm font-light text-surface ">
                   <BoxOfficeTheader/>
                   <BoxOfficeTbody dailyList={dailyList}/>
                </table>
            </div>
        </div>
    );
}
