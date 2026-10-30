import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Jua, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const jua = Jua({ weight: '400', subsets: ['latin'], variable: '--font-jua', display: 'swap' })
const noto = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto', display: 'swap' })

export const metadata: Metadata = {
  title: '꿈돌이 화폐 DREAMDOL MONEY | 대전 중앙시장 로컬 미식 탐험',
  description:
    '성심당에서 빵 샀다면? 이제 중앙시장으로! 꿈돌이 화폐로 즐기는 대전 로컬 미식 탐험. 먹고, 찍고, 모으고, 선물까지 받아 가세요.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '꿈돌이 화폐 DREAMDOL MONEY',
    description: '빵지순례 다음은? 꿈돌이와 중앙시장! 대전 로컬 미식 탐험 프로젝트',
    images: ['/images/coin-hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f4fd8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${jua.variable} ${noto.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
