import React from "react";

export default function MyListItem({ title, imgUrl, content }) {
    return (
        <div className="flex w-full justify-center items-start border p-5">
            <div className="flex w-2/5">
                <img src={imgUrl} alt={imgUrl} />
            </div>
            <div className="flex flex-col justify-between w-3/5 px-3 h-full">
                <div>
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-sm pt-2">{content}</div>
                </div>
                <div className="flex justify-end text-xs items-center">
                    <span className="text-red-500">❤</span>
                    <span className="mx-1 font-bold">좋아요</span>
                    <span className="font-bold">0</span>
                </div>
            </div>
        </div>
    );
}
