import { BsCollectionFill} from "react-icons/bs";

export default function Nav() {

    return (
        <div className="flex flex-row justify-between">
            <div className="w-12 h-12 bg-sky-600 inline-flex items-center justify-center rounded-xl">
                <BsCollectionFill className="w-6 h-6 text-zinc-200" />
            </div>
            <div className="w-12 h-12 bg-sky-600 inline-flex items-center justify-center rounded-xl">
                <BsCollectionFill className="w-6 h-6 text-zinc-200" />
            </div>
            <div className="w-12 h-12 bg-sky-600 inline-flex items-center justify-center rounded-xl">
                <BsCollectionFill className="w-6 h-6 text-zinc-200" />
            </div>
            <div className="grow-0 hidden"><input className="hidden" type="file" name="image" accept="image/*"/></div>
        </div>
    );
}
