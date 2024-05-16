import React from "react";
import Btn from "../05/Btn";
// import { useState } from "react";

export default function TrafficNav({title, category, select, setSelect}) {
    // const title = "대분류";
    // const category = ["차대사람", "차대차", "차량단독", "철길건널목"];
    // const [select, setSelect] = useState();
    const cTag = category.map((item) => (
        <Btn
            handleClick={() => handleClick(item)}
            key={item}
            caption={item}
            customClass={
                select == item
                    ? "bg-rose-600 text-white py-2 rounded-sm mx-1"
                    : "bg-rose-400 text-white py-2 rounded-sm mx-1"
            }
        />
    ));
    const handleClick = (item) => {
        console.log(item);
        setSelect(item);
    };

    return (
        <div className="w-full flex justify-between items-center">
            <div className="w-1/5">교통사고 {title}</div>
            <div className="w-4/5 text-right">{cTag}</div>
        </div>
    );
}
