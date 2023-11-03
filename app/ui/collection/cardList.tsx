"use client"
import Card from "@/app/ui/collection/card"
import BigCard from "@/app/ui/collection/bigCard";
import { useState } from "react"
import Modal from "react-modal";
import { useMediaQuery } from 'react-responsive'

const remark2unique = {
    '환경부지정 멸종위기 야생동식물':4,
    '서울시 보호종':3,
    '기후변화 생물지표종':2,
    '일반':0,
    '생태계교란종':1
}

export default function CardList({collections}:{collections:Array<any>}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalCollection, setModalCollection]:Array<any> = useState();
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const customModalStyles: Modal.Styles = {
        // overlay: {
        //   backgroundColor: " rgba(0, 0, 0, 0.4)",
        //   width: "100%",
        //   height: "100vh",
        //   zIndex: "10",
        //   position: "fixed",
        //   top: "0",
        //   left: "0",
        // },
        content: {
            height: "fit-content",
            maxWidth:"768px",
            width: isMobile? "90%":"100%",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "auto",
            padding: 0,
        },
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-8 max-w-3xl w-full">
                {collections.sort((a,b)=>(remark2unique[b.remark as keyof typeof remark2unique]-remark2unique[a.remark as keyof typeof remark2unique])).map((collection,i)=>{
                return(
                    <Card key={i} collection={collection} 
                        clickFunction={(collection:any)=>{
                            setModalOpen(true);
                            setModalCollection(collection);
                        }}
                    />
                )})}
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop on description of collection"
                shouldCloseOnOverlayClick={true}
            >
                <div className="flex flex-col md:flex-row justify-between">
                    <BigCard 
                        collection={modalCollection} 
                    />
                    <div className="basis-1/2 flex flex-col p-6">
                        <div className="font-bold text-3xl">{modalCollection?.korean_name}</div>
                        <div className="font-bold text-xl mt-1">{`${modalCollection?.category}, ${modalCollection?.remark}`}</div>
                        <div className=" mt-3 text-lg">{`위도${modalCollection?.lat} 경도${modalCollection?.lng} 에서 발견`}</div>
                        <div className="text-lg mt-1">{modalCollection?.description}</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
