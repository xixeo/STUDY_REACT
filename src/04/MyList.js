import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";

export default function MyList() {
    // MyListData가 가지고 있는 imrUrl 다 가져오는 반복문
    // filter의 결과, map의 결과 모두 array
    const tags = MyListData.map((item) => (
        <MyListItem
            title={item.title}
            imgUrl={item.imgUrl}
            content={item.content}
            key={item.title}
        />
    ));

    return (
        <div className="flex flex-wrap w-full max-w-screen-lg">
            <div className="grid grid-cols-2 gap-2">{tags}</div>
        </div>
    );
}
