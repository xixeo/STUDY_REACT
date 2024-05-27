import { useState, useEffect } from "react";
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
    const [n, setN] = useState(0);
    const [n2, setN2] = useState();

    // useEffect(()=>{}, [n]) //n이 변경되면 감지되는 거
    useEffect(()=>{
      setN2(n * 2)
    }, [n])

    return (
        <div className="flex flex-col justify-center items-center text-2xl font-bold">
            <div>RecoilDiv: n = {n}, n2= {n2}</div>
            <RecoilDiv2 num={n} setN={setN} num2={n2} />
        </div>
    );
}
