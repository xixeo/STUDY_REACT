import React from "react";

export default function BoxOfficeTbody({ dailyList }) {
    console.log(dailyList);

    return (
        <tbody>
            {dailyList.map((item) => (
                <tr
                    key={item.movieCd}
                    className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100"
                >
                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                        {item.rank}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                        {item.movieNm}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-right">
                        {parseInt(item.salesAcc).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-right">
                        {parseInt(item.audiAcc).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-right">
                        {item.rankInten}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
