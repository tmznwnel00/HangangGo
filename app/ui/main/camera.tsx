'use client'
import { useRef, useState} from "react"
import { collections } from "@/app/lib/placeholder-data";
import { useMediaQuery } from 'react-responsive'
import Modal from "react-modal";
import BigCard from "@/app/ui/collection/bigCard";
import { RiCameraLensFill } from "react-icons/ri";
import { FadeLoader } from "react-spinners";

export default function Camera() {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const inputRef = useRef<HTMLInputElement>(null);
    const [modalState, setModalState] = useState(false);
    const [resultData, setResultData]:Array<any> = useState(null);
    const [isDescript, setIsDescript] = useState(false);

    const customModalStyles: Modal.Styles = {
        overlay: {
            zIndex: 10
        },
        content: {
            height: "fit-content",
            maxWidth: isDescript? "768px":"384px",
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
            transition: "width 0.5s ease-out"
        },
    };

    const handleButtonClick = () => {
        if (inputRef.current) {
          inputRef.current.click()
        }
    };
    
    const handleChange = async(e:any) => {
        await setModalState(true)
        await setResultData(null)
        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        const result = await fetch("/api/images",{
            method: "POST",
            body: formData
        })
        const data = await result.json()
        if(typeof(data.res) == 'object'){
            console.log(data)
            setResultData(data)
        }
        e.target.files= null
    }

    return (
        <div className=" cursor-pointer">
            <div className=" w-24 h-24 bg-zinc-200 inline-flex items-center justify-center rounded-full border-solid border-black border-2"
                onClick={handleButtonClick}
            >
                <RiCameraLensFill className=" w-20 h-20 text-black" />
            </div>
            <input className="hidden" type="file" onChange={handleChange} ref={inputRef} name="image" accept="image/*"/>
            <Modal
                isOpen={modalState}
                onRequestClose={() => setModalState(false)}
                style={customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop on description of collection"
                shouldCloseOnOverlayClick={true}
            >
                <div className="flex flex-col md:flex-row justify-between" onClick={()=>setIsDescript(true)}>
                    {resultData?             
                    <BigCard
                        collection={resultData.res}
                    />: null}
                    {isDescript&&resultData?(
                    <div className="basis-1/2 flex flex-col p-6">
                        <div className="font-bold text-3xl">{resultData.res?.korean_name}</div>
                        <div className="font-bold text-xl mt-1">{`${resultData.res?.category}, ${resultData.res?.remark}`}</div>
                        <div className=" mt-3 text-lg">{`위도 ${resultData.res?.lat.toFixed(2)}, 경도 ${resultData.res?.lng.toFixed(2)} 에서 발견`}</div>
                        <div className="text-lg mt-1">{resultData.res.description}</div>
                        <div className="flex flex-col items-center justify-center grow">
                            <div className="text-lg font-bold mb-6">결과 확률</div>
                            <div className="text-4xl">{`${resultData.prob*100}%`}</div>
                        </div>
                    </div>):null}
                </div>
            </Modal>
        </div>
    );
}
