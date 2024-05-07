export default function MyDiv3(probs) {
    return (
        <div className=" w-1/2 h-1/2 bg-white text-emerald-700 flex justify-center items-center">
               {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
        </div>
    );
}
