import { useParams } from "react-router-dom"
export default function RoutePage1() {
  const item = useParams().item;
  const bread = ['🍰', '🍩'];
  return (
    <div>
      RoutePage1 : {bread.includes(item) ?
                    `${item} : 빵입니다`
                  :  `${item} : 노빵`}
    </div>
  )
}
