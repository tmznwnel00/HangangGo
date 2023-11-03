'use client'
import Modal from "react-modal";
import { useState } from "react"
import { useMediaQuery } from 'react-responsive'
import BigCard from "@/app/ui/collection/bigCard";

export default function ResultModal({collection, modalState, setModalState}:{collection:any, modalState:any, setModalState: Function}) {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const customModalStyles: Modal.Styles = {
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
        <Modal
            isOpen={modalState}
            onRequestClose={() => setModalState(false)}
            style={customModalStyles}
            ariaHideApp={false}
            contentLabel="Pop on description of collection"
            shouldCloseOnOverlayClick={true}
        >
            <div className="flex flex-col md:flex-row justify-between">
                <BigCard 
                    // collection={collection} 
                    collection={{
                        "category": "식물",
                        "korean_name": "줄장지뱀",
                        "imgLink": "gs://hanganggo-88a45.appspot.com/Takydromus_wolteri.jpeg",
                        "remark": "서울시 보호종",
                        "lat": 25,
                        "lng": 126,
                        "hangang_alphabet": "R",
                        "description" : "서울시 보호종으로 잎은 달걀 혹은 콩팥처럼 생겼다. 크기는 보통 길이 1.5-2.5cm, 너비 2-3cm로 끝은 둥글고 밑은 심장형이며 가장자리에 둔한 톱니가 있다. 꽃은4~5월에 연한 보라색으로 핀다.",
                    }}
                />
                {/* <div className="basis-1/2 flex flex-col p-6">
                    <div className="font-bold text-3xl">{modalCollection?.korean_name}</div>
                    <div className="font-bold text-xl mt-1">{`${modalCollection?.category}, ${modalCollection?.remark}`}</div>
                    <div className=" mt-3 text-lg">{`위도${modalCollection?.lat} 경도${modalCollection?.lng} 에서 발견`}</div>
                    <div className="text-lg mt-1">{modalCollection.description}</div>
                </div> */}
            </div>
        </Modal>
    );
}
