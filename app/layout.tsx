import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/app/ui/globals.css'
import { Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], 
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: 'Hangang Go',
  description: 'Hangang Go',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&autoload=false`}
          async></script>
      </head>
      <body className={`${inter.className} ${notoSansKr.className} bg-sky-100`}>{children}
      </body>
    </html>
  )
}
