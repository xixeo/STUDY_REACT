import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
    const [n, setN] = useRecoilState(AtomN);
    const n2 = useRecoilValue(AtomN2);

    useEffect(() => {
        if (!localStorage.getItem("n")) return;
        setN(parseInt(localStorage.getItem("n")));
    }, []);

    return (
        <div className="flex flex-col justify-center items-start text-2xl font-bold">
            <div>
                RecoilDiv: n = {n}, n2= {n2}
            </div>
            <RecoilDiv2 />
        </div>
    );
}
