import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
    return (
        <div className=" w-1/2 h-1/2 text-emerald-600  bg-emerald-100 justify-center flex flex-col items-center">
          {`${probs.dn1} > ${probs.dn2}`}
           <MyDiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3}/>
        </div>
    );
}
