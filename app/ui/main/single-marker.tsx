'use client'
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebase/storage"
import { useState, useEffect } from "react"

type Props = {
    imgLink: string;
    remark: string;
    name: string;
}

const uniqueTable = {
    0: "border-emerald-300",
    1: "border-sky-400",
    2: "border-purple-400",
    3: "border-rose-500",
}

const remark2unique = {
    '기후변화 생물지표종': 3,
    '일반': 1,
    '우점': 1,
    '법적보호종': 2,
    '군락': 0
}

export default function SingleMarker({imgLink, remark, name}:Props){
    const [imgURL, setImgURL] = useState();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const func = async () => {
            const reference = ref(storage, imgLink);
            await getDownloadURL(reference).then((x: any) => {
                setImgURL(x);
            })
        }
        func();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" w-28 h-6 bg-zinc-200 text-center rounded-md z-30" style={{visibility: isVisible? 'visible':'hidden'}}>
                {name}
            </div>
            <div className={`w-14 h-14 border-4 m-2 ${uniqueTable[remark2unique[remark as keyof typeof remark2unique] as keyof typeof uniqueTable]}  rounded-full bg-cover`} style={{
                backgroundImage: `url(${imgURL})` }}
                onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}
            >  
            </div>
        </div>
    );
}
