'use client'
import { useEffect, useState, useRef } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebase/storage"

const uniqueTable = {
    0: "border-emerald-300",
    1: "border-sky-400",
    2: "border-purple-400",
    3: "border-rose-500",
}
export default function BigCard({ collection }:{ collection: any}){
    const [titleHeight, setTitleHeight ] = useState(0);
    const titleBlockRef = useRef(null)
    const [imgURL, setImgURL] = useState();

    useEffect(() => {
        const func = async () => {
            const reference = ref(storage, collection.imgLink);
            await getDownloadURL(reference).then((x: any) => {
                setImgURL(x);
            })
        }
        func();
    }, []);

    
    useEffect(()=>{
        setTitleHeight(titleBlockRef.current?.offsetHeight)
    },[])

    return (
        <div className="flex flex-col aspect-[4/5]  from-sky-500 via-emerald-400 to-cyan-300 bg-gradient-to-tr basis-1/2"
            style={{padding:"2%"}}
        >
            <div className="w-full flex flex-row justify-between basis-1/6 mb-3" ref={titleBlockRef} >
                <div className="flex items-center basis-4/5 bg-zinc-200 justify-between font-bold pl-3 text-2xl">
                    {collection.korean_name}
                </div>
                <div className=" border-x-transparent border-y-zinc-200" style={{borderBottomWidth:`${titleHeight}px`,borderRightWidth:`${titleHeight/5}px`}}></div>
                <div className="flex items-center basis-1/5 text-end justify-center">23</div>
            </div>
            <div className=" w-full rounded-md basis-5/6 flex justify-between flex-col" 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:`url(${imgURL})`    
                }}
            >
            </div>
        </div>
    );
}
