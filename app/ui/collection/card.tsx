'use client'
import { useEffect, useState, useRef } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "@/firebase/storage"
import Image from "next/image";

const uniqueTable = {
    0: "from-gray-300 via-zinc-400 to-stone-300",
    3: "from-sky-500 via-emerald-400 to-cyan-300",
    4: "from-amber-200 via-lime-300 to-amber-300",
    1: "from-rose-500 via-fuchsia-200 to-pink-400",
    2: "from-emerald-400 via-lime-200 to-green-500",
}
const remark2unique = {
    '환경부지정 멸종위기 야생동식물':4,
    '서울시 보호종':3,
    '기후변화 생물지표종':2,
    '일반':0,
    '생태계교란종':1
}

const categoryIconTable = {
    '양서파충류': 'reptile_icon.png',
    '식물':'plants_icon.png',
    '조류':'bird_icon.png',
    '어류':'fish_icon.png',
    '육상곤충':'insects_icon.png',
    '포유류': 'mammalia_icon.png'
}

export default function Card({ collection, clickFunction }:{ collection: any, clickFunction: Function}){
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
        <div className={`flex flex-col aspect-[4/5] ${uniqueTable[remark2unique[collection.remark]]} bg-gradient-to-tr basis-1/2
         cursor-pointer hover:shadow-lg`}
            style={{padding:"4%"}}
            onClick={()=>{clickFunction(collection)}}
        >
            <div className="w-full flex flex-row justify-between basis-1/6 mb-1" ref={titleBlockRef} >
                <div className="flex items-center basis-4/5 bg-zinc-200 justify-between font-bold pl-3">
                    {collection.korean_name}
                </div>
                <div className=" border-x-transparent border-y-zinc-200" style={{borderBottomWidth:`${titleHeight}px`,borderRightWidth:`${titleHeight/5}px`}}></div>
                <div className="flex items-center basis-1/5 text-end justify-center">
                    <Image 
                        alt="icon"
                        src={`/assets/${categoryIconTable[collection.category]}`}
                        width={25}
                        height={25}
                    />
                </div>
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
