import Card from "@/app/ui/collection/card"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-screen items-center">
        <div className="grid grid-cols-4 gap-x-2 gap-y-8 max-w-3xl w-full">
            {[1,2,3,4,5,6,7,8,9,10].map((num,i)=>{
                return(
                    <Card key={i}/>
                )
            })}
        </div>
    </main>
  )
}
