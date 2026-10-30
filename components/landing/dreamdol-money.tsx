'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { BookOpen, Coins, Package, RefreshCw, Star, Ticket } from 'lucide-react'
import { Reveal, SectionHeading } from './shared'

const KIT = [
  { icon: Coins, title: '실물 꿈돌이 코인', desc: '앞면엔 별 마스코트, 뒷면엔 엽전 문양' },
  { icon: Package, title: '전용 파우치', desc: '코인과 교환권을 담는 꿈돌이 블루 파우치' },
  { icon: BookOpen, title: '리플렛 & 관광 지도', desc: '중앙시장 탐험 코스가 담긴 일러스트 지도' },
  { icon: Ticket, title: '먹거리 교환권', desc: '제휴 점포에서 쓰는 지류형 교환권' },
]

export function DreamdolMoney() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="money" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="DREAMDOL MONEY"
          title={
            <>
              대전 여행을 특별하게 만드는
              <br />
              작은 코인!
            </>
          }
          description="꿈돌이 화폐는 중앙시장 곳곳의 로컬 가치를 발견하고 경험하도록 돕는 특별한 관광 체험 수단입니다."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col items-center gap-5">
            <div className="[perspective:1200px]">
              <motion.button
                type="button"
                onClick={() => setFlipped((v) => !v)}
                aria-label={flipped ? '코인 앞면 보기' : '코인 뒷면 보기'}
                className="relative size-64 cursor-pointer [transform-style:preserve-3d] md:size-80"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14 }}
              >
                <CoinFace side="front" />
                <CoinFace side="back" />
              </motion.button>
            </div>
            <button
              type="button"
              onClick={() => setFlipped((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-cream px-4 py-2 text-sm font-bold text-navy shadow-pop transition-transform hover:-translate-y-0.5"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              {flipped ? '앞면 보기' : '뒷면 보기'}
            </button>
            <p className="text-xs text-muted-foreground">* 코인 디자인은 콘셉트 시안입니다.</p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-2 border-navy shadow-pop-lg">
                <Image
                  src="/images/money-kit.png"
                  alt="꿈돌이 코인, 파우치, 관광 지도 리플렛, 먹거리 교환권 구성품 목업"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full border-2 border-navy bg-orange px-3 py-1 text-xs font-bold text-ivory">
                  TOUR KIT 구성 시안
                </span>
              </div>
            </Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {KIT.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <li className="flex h-full gap-3 rounded-2xl border-2 border-navy bg-card p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue text-ivory">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold text-navy">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoinFace({ side }: { side: 'front' | 'back' }) {
  const isBack = side === 'back'
  return (
    <span
      className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-navy bg-[radial-gradient(circle_at_30%_25%,#fff3c4,#f4b82c_55%,#b97a0c)] shadow-pop-lg [backface-visibility:hidden]"
      style={isBack ? { transform: 'rotateY(180deg)' } : undefined}
    >
      <span className="absolute inset-[7%] rounded-full border-2 border-dashed border-brown/60" />
      {isBack ? (
        <span className="flex flex-col items-center gap-3">
          <span className="relative flex size-24 items-center justify-center rounded-full border-4 border-brown/70 md:size-28">
            <span className="size-9 rounded-sm border-4 border-brown/70 bg-ivory/60" />
          </span>
          <span className="font-display text-xl text-brown md:text-2xl">대전 중앙시장</span>
          <span className="text-xs font-bold tracking-[0.3em] text-brown/80">1 DREAMDOL</span>
        </span>
      ) : (
        <span className="flex size-[78%] flex-col items-center justify-center gap-2 rounded-full border-4 border-navy bg-blue">
          <span className="text-xs font-bold tracking-[0.3em] text-cream">DREAMDOL</span>
          <Star className="size-20 fill-cream text-navy md:size-24" strokeWidth={1.5} aria-hidden="true" />
          <span className="font-display text-lg text-cream">꿈돌이 화폐</span>
        </span>
      )}
    </span>
  )
}
