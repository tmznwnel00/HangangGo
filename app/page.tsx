import KakaoMap from "@/app/ui/main/kakao-map"
import Nav from "@/app/ui/main/nav"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <div className="relative h-full">
        <div className="w-full h-full">
          <div className="w-full h-full">
            <KakaoMap />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full p-10">
          <Nav />
        </div>
      </div>
    </main>
  )
}
