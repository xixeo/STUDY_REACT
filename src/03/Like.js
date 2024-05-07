//1. useState import
import { useState } from "react";

export default function Like() {
    //2. state변수 선언
    const [n, setN] = useState(0); //n의 초기값 0 선언;

    //3. setN을 통해서 n의 값 변경
    const handleCount = () => {
        setN(n + 1);
        
    };

    return (
        <div className="w-full flex justify-end itmes-center mt-3">
            <span onClick={handleCount} className="text-red-500 cursor-pointer">
                ❤
            </span>
            <span className="mx-1 font-bold">좋아요</span>
            <span className="font-bold">{n}</span>
        </div>
    );
}
