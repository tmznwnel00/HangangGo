'use client'
import { useEffect, useState, useRef } from "react";

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
export default function Card(){
    const [titleHeight, setTitleHeight ] = useState(0);
    const titleBlockRef = useRef(null)
    
    useEffect(()=>{
        setTitleHeight(titleBlockRef.current?.offsetHeight)
    },[])

    return (
        <div className="flex flex-col aspect-[4/5] p-1.5 from-sky-500 via-emerald-400 to-cyan-300 bg-gradient-to-tr">
            <div className="w-full flex flex-row justify-between basis-1/6 mb-1" ref={titleBlockRef} >
                <div className="flex items-center basis-4/5 bg-zinc-200 justify-between">
                    청개구리
                </div>
                <div className=" border-x-transparent border-y-zinc-200" style={{borderBottomWidth:`${titleHeight}px`,borderRightWidth:`${titleHeight/5}px`}}></div>
                <div className="flex items-center basis-1/5 text-end justify-center">23</div>
            </div>
            <div className=" w-full rounded-md basis-5/6 flex justify-between flex-col" 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:`url('https://species.nibr.go.kr/UPLOAD/digital/species/120000064979/BIMGVP0000011285.jpg')`    
                }}
            >
                {/* <div className="w-full bg-zinc-200/20 basis-1/5">
                    <p className="text-base font-bold">청개구리</p>
                    <p className=" text-xs">양서 파충류</p>
                </div> */}
            </div>
        </div>
    );
}
