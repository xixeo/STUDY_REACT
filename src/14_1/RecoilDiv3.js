import Btn from "../05/Btn";

export default function RecoilDiv3({ num, setN, num2 }) {
  const handleUp = () => {
    setN(num + 1);
    
  }
  const handleDown = () => {
    setN(num - 1);
  }
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-2xl font-bold">
                <div>RecoilDiv: n = {num}</div>
            </div>
            <Btn customClass={'bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg'} caption={"증가"} handleClick={handleUp} />
            <Btn customClass={'bg-yellow-400 px-8 mx-1 rounded-sm py-2 text-lg'} caption={"감소"} handleClick={handleDown} />
        </div>
    );
}
