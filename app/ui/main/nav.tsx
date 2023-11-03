import { BsCollectionFill} from "react-icons/bs";
import Camera  from "@/app/ui/main/camera";
import Link from "next/link";

export default function Nav() {

    return (
        <div className="flex flex-row justify-between items-center">
            <Link className="w-12 h-12 bg-sky-600 inline-flex items-center justify-center rounded-xl hover:bg-sky-500" href="/collection">
                <BsCollectionFill className="w-6 h-6 text-zinc-200" />
            </Link>
            <Camera />
            <div className="w-12 h-12 bg-sky-600 inline-flex items-center justify-center rounded-xl invisible">
                <BsCollectionFill className="w-6 h-6 text-zinc-200" />
            </div>
            <div className="grow-0 hidden"><input className="hidden" type="file" name="image" accept="image/*"/></div>
        </div>
    );
}
