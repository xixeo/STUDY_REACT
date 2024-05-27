import RecoilDiv3 from "./RecoilDiv3";
import {  AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {
  const n2 = useRecoilValue(AtomN2);
    return (
        <div className="flex flex-col justify-center items-start text-2xl font-bold">
            <div>RecoilDiv: n2 = {n2} </div>
            <RecoilDiv3 />
        </div>
    );
}
