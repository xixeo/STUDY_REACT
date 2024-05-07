import MyListData from "./MyListData.json"
import MyListItem from "./MyListItem"

export default function MyList() {
  // MyListData가 가지고 있는 imrUrl 다 가져오는 반복문
  // filter의 결과, map의 결과 모두 array
  const tags = MyListData.map(item => <img src={item.imgUrl} alt="{item.imgUrl}"/>)

  return (
    <div>
      <MyListItem/>
      {/* {tags} */}
    </div>
  )
}
