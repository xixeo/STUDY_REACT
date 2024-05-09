import React from "react";

export default function BoxOfficeTbody({dailyList}) {
  console.log(dailyList)
    const tags = dailyList.map((item) => (
      <tr key={item.movieCd} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
      <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right">{item.salesAcc}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right">{item.audiAcc}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right">{item.salesChange}</td>
  </tr>
    ));
 
  return (
        <tbody>
           {tags}
        </tbody>
    );
  
}
