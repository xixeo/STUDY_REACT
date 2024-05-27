import Btn from "../05/Btn";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilDiv3() {
    const [n, setN] = useRecoilState(AtomN);

    const handleUp = () => {
        setN(n + 1);
    };
    const handleDown = () => {
        setN(n - 1);
    };
    const handleSave = () => {
        localStorage.setItem("n", n);
    };
    const handleDel = () => {
        // localStorage.setItem("n", 0);
        localStorage.removeItem("n");
        setN(0)
    };
    
    return (
        <div>
            <div className="flex flex-col justify-center items-start text-2xl font-bold mb-10">
                <div>RecoilDiv: n = {n}</div>
            </div>
            <Btn
                customClass={"bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg"}
                caption={"증가"}
                handleClick={handleUp}
            />
            <Btn
                customClass={"bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg"}
                caption={"감소"}
                handleClick={handleDown}
            />
            <Btn
                customClass={"bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg"}
                caption={"local 저장"}
                handleClick={handleSave}
            />
            <Btn
                customClass={"bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg"}
                caption={"local 삭제"}
                handleClick={handleDel}
            />
        </div>
    );
}
