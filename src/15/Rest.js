import React, { useEffect, useState } from "react";

export default function Rest() {
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    useEffect(() => {
        let url = "http://localhost:3005/posts";
        getFetch(url);
    }, []);

    const getFetch = async (url) => {
        const resp = await fetch(url); //await이 끝나면 다음이 실행된다
        const data = await resp.json();
        setTdata(data);
    };

    useEffect(() => {
        console.log(tdata);
    }, [tdata]);

    useEffect(() => {
      if(!tdata) return;
      let tm = tdata.map((item) => (
        <div className="text-xl font-bold" key={item.title}>{item.title}</div>
    ));
        setTags(tm);
    }, [tdata]);

    return <div>{tags}</div>;
}
