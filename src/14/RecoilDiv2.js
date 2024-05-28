import RecoilDiv3 from "./RecoilDiv3";
import {  AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {
  const n2 = useRecoilValue(AtomN2);
    return (
        <div className="w-full w-fu flex flex-col my-5 justify-center items-center text-2xl font-bold">
            <div>RecoilDiv: n2 = {n2} </div>
            <RecoilDiv3 />
        </div>
    );
}
