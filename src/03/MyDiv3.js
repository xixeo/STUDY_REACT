export default function MyDiv3({ dn1, dn2, dn3 }) {
    return (
        <div className=" w-1/2 h-1/2 bg-white text-emerald-700 flex justify-center items-center">
            {`${dn1} > ${dn2} > ${dn3}`}
        </div>
    );
}
