import RecoilDiv3 from "./RecoilDiv3";

export default function RecoilDiv2({ num, setN, num2 }) {
    return (
        <div className="flex flex-col justify-center items-center text-2xl font-bold">
            <div>RecoilDiv: n = {num}, n2 = {num2}</div>
            <RecoilDiv3 num={num} setN={setN} num2={num2}/>
        </div>
    );
}
