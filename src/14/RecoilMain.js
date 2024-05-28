import RecoilDiv1 from "./RecoilDiv1";
import { RecoilRoot } from "recoil";
import { MdEdit } from "react-icons/md";

export default function RecoilMain() {
    return (
        <div className="w-full max-w-screen-xl h-full flex flex-col justify-start items-start">
            <div className="w-full flex items-center rounded-sm mb-6 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" /> 
                Recoil을 사용하여 Local storage에 값 저장하기
            </div>
            <RecoilRoot >
                <RecoilDiv1 />
            </RecoilRoot>
        </div>
    );
}
