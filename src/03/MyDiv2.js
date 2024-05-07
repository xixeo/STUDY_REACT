import MyDiv3 from "./MyDiv3";

export default function MyDiv2({ dn1, dn2, dn3 }) {
    return (
        <div className="m-3 w-full h-full text-emerald-600  bg-rose-200 justify-center flex flex-col items-center">
            {`${dn1} > ${dn2}`}
            <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
        </div>
    );
}
