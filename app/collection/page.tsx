import CardList from "@/app/ui/collection/cardList";
import { getCollections } from "@/app/lib/data"
import { IoMdArrowBack } from "react-icons/io";
import { BiSolidShare } from "react-icons/bi";
import Link from "next/link";

export default async function Home() {
  // const collections = await getCollections();
  const collections = await (await fetch("http://27.119.34.53:8080/api/collections?user_id=1", {cache: 'no-store'})).json()
  const valuesOfColections = Object.values(collections)

  return (
    <main className="flex flex-col min-h-screen h-screen items-center m-2 rounded-2xl">
        <div className="flex justify-between w-full max-w-3xl mb-2">
          <Link href="/" className=" inline-flex justify-center items-center w-10 h-10 rounded-full hover:bg-slate-400/50 cursor-pointer">
            <IoMdArrowBack className=" w-6 h-6 text-zinc-600" /> 
          </Link>
          <div className=" inline-flex justify-center items-center w-10 h-10 rounded-full hover:bg-slate-400/50 cursor-pointer">
            <BiSolidShare  className=" w-6 h-6  text-zinc-600"/>
          </div>
        </div>
        <CardList collections={valuesOfColections} />
    </main>
  )
}
