'use client'
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebase/storage"
import { useState, useEffect } from "react"

type Props = {
    imgLink: string;
    unique: number;
}

const uniqueTable = {
    0: "border-emerald-300",
    1: "border-sky-400",
    2: "border-purple-400",
    3: "border-rose-500",
}
export default function SingleMarker({imgLink, unique}:Props){
    const [imgURL, setImgURL] = useState();

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
        <div className={`w-10 h-10 border-4 m-2 ${uniqueTable[unique]}  rounded-full bg-cover`} style={{
            backgroundImage: `url(${imgURL})`
        }}>  
        </div>
    );
}
