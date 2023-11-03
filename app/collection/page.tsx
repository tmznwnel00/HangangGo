import CardList from "@/app/ui/collection/cardList";
import { getCollections } from "@/app/lib/data"

export default async function Home() {
  // const collections = await getCollections();
  const collections = await (await fetch("http://27.119.34.53:8080/api/collections?user_id=1", {cache: 'no-store'})).json()
  const valuesOfColections = Object.values(collections)
  
  return (
    <main className="flex flex-col min-h-screen h-screen items-center m-2">
        <CardList collections={valuesOfColections} />
    </main>
  )
}
