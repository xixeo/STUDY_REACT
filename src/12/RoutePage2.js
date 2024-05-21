import { useSearchParams, useLocation } from "react-router-dom";
export default function RoutePage2() {
    const bread = ["🍰", "🍩"];
    //const loc = useLocation();
    //console.log(loc) //경로와 주소를 뽑아낼수는 있음
    const [sParams] = useSearchParams();
    console.log(sParams);
    // const item = sParams.get('item')
    let tm = [];
    sParams.forEach((item) =>
        bread.includes(item)
            ? tm.push(<li key={item}>{`${item} : 빵`}</li>)
            : tm.push(<li key={item}>{`${item} 노빵`}</li>)
    );

    return (
        <div>
            <ul>{tm}</ul>
        </div>
    );
}
