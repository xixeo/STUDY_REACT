import MyDiv3 from "./MyDiv3";

export default function MyDiv2({ dn1, dn2, dn3 }) {
    return (
        <div className=" w-1/2 h-1/2 text-emerald-600  bg-emerald-100 justify-center flex flex-col items-center">
            {`${dn1} > ${dn2}`}
            <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
        </div>
    );
}
