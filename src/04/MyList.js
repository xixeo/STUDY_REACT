import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";
import { MdEdit } from "react-icons/md";

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
        <div className="flex flex-col w-full max-w-screen-2xl h-full justify-start">
            <div className="w-full flex items-center rounded-sm mb-6 bg-amber-500 py-3 px-3 text-white">
                <MdEdit className="mr-2" />
                클릭하면 좋아요 숫자 카운트 되는 카드 만들기
            </div>
            <div className="grid grid-cols-2 gap-2">{tags}</div>
        </div>
    );
}
