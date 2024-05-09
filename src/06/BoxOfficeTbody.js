import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

export default function BoxOfficeTbody({dailyList, setSelMv}) {
  const handleMvSelect = (i) => {
    setSelMv(i)
  }
  const tags = dailyList.map((item) => (
    <tr key={item.movieCd} onClick={() => handleMvSelect(item)} className="cursor-pointer border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
      <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right"> {parseInt(item.salesAcc).toLocaleString()}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right"> {parseInt(item.audiAcc).toLocaleString()}</td>
     {/* <td className="whitespace-nowrap px-6 py-3 text-right">{item.rankInten}{(item.rankInten < 0 )? '🔻' : '🔺'}</td> */}
     <td className="whitespace-nowrap px-6 py-3 flex items-center font-bold justify-center">
     <span>{item.rankInten > 0 ? <GoTriangleUp className="text-red-500"/> : 
             item.rankInten < 0 ? <GoTriangleDown className="text-blue-500"/> : '-' }
        </span>
        <span>
        {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
        </span>
      </td>
  </tr>
    ));



 
  return (
        <tbody>
           {tags}
        </tbody>
    );
  
}
