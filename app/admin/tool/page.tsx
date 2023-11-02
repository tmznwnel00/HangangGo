import KakaoMapTool from "@/app/ui/admin/kakao-map-tool"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <div className="relative h-full">
        <div className="w-full h-full bg-sky-300">
          <div className="w-full h-full">
            <KakaoMapTool />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10">icon line</div>
      </div>
    </main>
  )
}
