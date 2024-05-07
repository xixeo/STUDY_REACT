import MyDiv2 from "./MyDiv2";

export default function MyDiv() {
    const dName1 = "div 1";
    const dName2 = "div 2";
    const dName3 = "div 3";

    return (
        <div className="w-1/2 h-1/2 bg-emerald-300 text-white text-md px-8 py-5 items-center flex flex-col justify-center">
            {dName1}
            <MyDiv2 dn1={dName1} dn2={dName2} dn3={dName3} />
        </div>
    );
}
