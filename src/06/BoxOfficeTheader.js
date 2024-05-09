import React from "react";

export default function BoxOfficeTheader() {
    return (
        <thead className="border-b border-neutral-300 font-medium bg-neutral-200 ">
            <tr className="text-center">
                <th scope="col" className="px-6 py-3 text-left">
                    순위
                </th>
                <th scope="col" className="px-6 py-3">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    증감률
                </th>
            </tr>
        </thead>
    );
}
