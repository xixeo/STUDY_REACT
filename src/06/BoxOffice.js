import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {
  const [dailyList , setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef() ;

  //데이터 가져오기
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setDailyList(data.boxOfficeResult.dailyBoxOfficeList)
      })
      .catch(err => console.log(err))

      
  }

  //날짜가 선택 되었을 때 
  const handleSelect = (e) => {
    e.preventDefault();
    // console.log(selDate.current.value) ;    //ref변수 사용시 
    // console.log(e.target.value) ;           //ref변수 사용하지 않을때

    /*
    https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
    */
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?` ;
    url = url + `key=${process.env.REACT_APP_MV_KEY}` ;
    url = url +  `&targetDt=${selDate.current.value.replaceAll('-', '')}` ;

    console.log(url) ;
    getFetchData(url) ;
  }
 
  useEffect(() => {
    setSelMv(dailyList[0]);
  } , [dailyList]);
 
  return (
    <div className="w-full max-w-3xl h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <form className="w-full">
        <div className="w-full mb-5 flex justify-end items-center">
           <label htmlFor="dateId" className="mr-5">날짜선택 </label>
           <input type="date"
                  id="dateId"
                  ref={selDate}
                  onChange={handleSelect}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block px-4 py-2" /> 
        </div>
        </form>
        <table
          className="text-left text-sm font-light text-surface w-full">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList = {dailyList} setSelMv ={setSelMv} />
        </table>
        {selMv && <BoxOfficeInfo selMv ={selMv} />}
      </div>
    </div>
  )
}