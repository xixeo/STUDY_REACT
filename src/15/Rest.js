import React, { useEffect, useState, useRef } from "react";
import InputBox from "../components/InputBox";
import { MdEdit } from "react-icons/md";
import Btn from "../05/Btn";

export default function Rest() {
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateID, setUpdateID] = useState();

    const txt1Ref = useRef();
    const txt2Ref = useRef();
    
    const jsonUpdate = (item) => {
        console.log(item, "item");

        txt1Ref.current.value = item.title;
        txt2Ref.current.value = item.author;

        setIsUpdate(true);
        setUpdateID(item.id);
    };

    const jsonDelete = async (id) => {
        console.log(id);

        let url = `http://localhost:3005/posts/${id}`;
        await fetch(url, {
            method: "DELETE",
        });

        setTdata(tdata.filter((item) => item.id !== id));
    };

    const jsonUpdate2 = async () => {
        console.log("jsonUpdate2");

        const putData = {
            id: updateID,
            title: txt1Ref.current.value,
            author: txt2Ref.current.value,
        };
        let url = `http://localhost:3005/posts/${updateID}`;
        const resp = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(putData),
        });
        const data = await resp.json();

        setTdata(tdata.map((item) => (item.id === updateID ? data : item)));
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        setIsUpdate(false);
        setUpdateID("");
    };

    const jsonPost = async () => {
        console.log("입력");
        if (txt1Ref.current.value === "") {
            alert("제목을 입력하세요.");
            txt1Ref.current.focus();
            return;
        }
        if (txt2Ref.current.value === "") {
            alert("작성자를 입력하세요.");
            txt2Ref.current.focus();
            return;
        }
        const postData = {
            title: txt1Ref.current.value,
            author: txt2Ref.current.value,
        };

        let url = "http://localhost:3005/posts";

        const resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const data = await resp.json();
        console.log(data);

        setTdata([data, ...tdata]);
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
    };

    const getFetch = async (url) => {
        const resp = await fetch(url); //await이 끝나면 다음이 실행된다
        const data = await resp.json();
        setTdata(data);
    };
    useEffect(() => {
        let url = "http://localhost:3005/posts";
        getFetch(url);
    }, []);


    const handleOK = () => {
        if (isUpdate) jsonUpdate2();
        else jsonPost();
    };


    useEffect(() => {
        console.log(tdata);
        if (!tdata) return;
        let tm = tdata.map((item, index) => (
            <tr key={item.id} className="border-b border-neutral-300">
                <td className="p-2 text-sm text-center">{index + 1}</td>
                <td className="p-2 text-sm">{item.title}</td>
                <td className="p-2 text-sm">{item.author}</td>
                <td className="p-2 text-sm text-center">
                    <Btn
                        handleClick={() => jsonDelete(item.id)}
                        caption={"삭제"}
                        customClass={
                            "text-sm py-1 border border-red-500 rounded-sm text-red-600 hover:bg-red-500 hover:text-white"
                        }
                    />
                </td>
                <td className="p-2 text-sm text-center">
                    <Btn
                        handleClick={() => jsonUpdate(item)}
                        caption={"수정"}
                        customClass={
                            "text-sm py-1 border border-blue-500 rounded-sm text-blue-600 hover:bg-blue-500 hover:text-white"
                        }
                    />
                </td>
            </tr>
        ));
        setTags(tm);
    }, [tdata]);

    return (
        <div className="w-full max-w-screen-xl h-full flex flex-col justify-start items-start">
            {/* <div className="w-full flex items-center rounded-sm bg-amber-500 py-3 px-3 text-white">
            <MdEdit className="mr-2"/> JSON server를 사용하여 테이블 데이터 추가/삭제 하기
            </div> */}
            <div className="w-full flex items-center mt-12 mb-6 justify-center">
                <label className="text-sm font-bold" htmlFor="">
                    제목
                </label>
                <InputBox
                    customClass={
                        "border border-neutral-300 rounded-sm px-2 py-1 ml-2 mr-4"
                    }
                    id="txt1"
                    type="text"
                    inRef={txt1Ref}
                />
                <label className="text-sm font-bold" htmlFor="">
                    작성자
                </label>
                <InputBox
                    customClass={
                        "border border-neutral-300 rounded-sm px-2 py-1 ml-2 mr-4"
                    }
                    id="txt2"
                    type="text"
                    inRef={txt2Ref}
                />
                <Btn
                    handleClick={handleOK}
                    caption={isUpdate ? "수정" : "입력"}
                    customClass={
                        "text-sm py-1.5 px-10 rounded-sm text-white bg-black border border-black"
                    }
                />
            </div>
            <table className="w-full">
                <thead className="border-b border-neutral-300 font-medium">
                    <tr className="bg-[#ebebeb] text-[#222] font-bold">
                        <th scope="col" className="px-6 py-3 text-sm w-1/7">
                            번호
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm w-3/7">
                            제목
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm w-1/7">
                            작성자
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm w-1/7">
                            삭제
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm w-1/7">
                            편집
                        </th>
                    </tr>
                </thead>
                <tbody>{tags}</tbody>
            </table>
        </div>
    );
}
