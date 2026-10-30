'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Armchair, Camera, Coins, DoorOpen, Route, Utensils } from 'lucide-react'
import { Reveal, SectionHeading, StatusBadge } from './shared'
import { cn } from '@/lib/utils'
import b1 from '../../b1.png'
import b2 from '../../b2.png'
import b3 from '../../b3.png'
import b4 from '../../b4.png'
import b5 from '../../b5.png'
import b6 from '../../b6.png'

const SPOTS = [
  {
    id: 'entrance',
    icon: DoorOpen,
    label: '중앙시장 주요 입구',
    status: '위치 준비 중',
    color: 'bg-navy',
    image: b1,
    alt: '중앙시장 주요 입구 이미지',
    frame: { left: '5%', top: '11%', width: '27%', height: '25%' },
  },
  {
    id: 'exchange',
    icon: Coins,
    label: '꿈돌이 화폐 환전소',
    status: '예정',
    color: 'bg-blue',
    image: b3,
    alt: '꿈돌이 화폐 환전소 이미지',
    frame: { left: '38%', top: '7%', width: '31%', height: '23%' },
  },
  {
    id: 'food',
    icon: Utensils,
    label: '먹거리 제휴 점포',
    status: '제휴 예정',
    color: 'bg-orange',
    image: b6,
    alt: '먹거리 제휴 점포 이미지',
    frame: { left: '40%', top: '40%', width: '30%', height: '29%' },
  },
  {
    id: 'rest',
    icon: Armchair,
    label: '구매품 취식 쉼터',
    status: '예정',
    color: 'bg-brown',
    image: b2,
    alt: '구매품 취식 쉼터 이미지',
    frame: { left: '55%', top: '79%', width: '38%', height: '15%' },
  },
  {
    id: 'photo',
    icon: Camera,
    label: '포토존',
    status: '예정',
    color: 'bg-orange',
    image: b5,
    alt: '꿈돌이 포토존 이미지',
    frame: { left: '75%', top: '41%', width: '20%', height: '28%' },
  },
  {
    id: 'course',
    icon: Route,
    label: '스탬프 투어 코스',
    status: '코스 설계 중',
    color: 'bg-blue',
    image: b4,
    alt: '스탬프 투어 코스 이미지',
    frame: { left: '14%', top: '47%', width: '20%', height: '24%' },
  },
]

export function MarketMap() {
  const [active, setActive] = useState(SPOTS[0].id)
  const current = SPOTS.find((s) => s.id === active) ?? SPOTS[0]

  return (
    <section id="map" className="relative bg-cream/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="MARKET MAP"
          title="꿈돌이와 함께 중앙시장을 탐험해 봐요!"
          description="탐험 지도는 콘셉트 시안입니다. 실제 시설 위치는 확정되는 대로 업데이트돼요."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-navy bg-[#fdf3dc] shadow-pop-lg">
              <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" aria-hidden="true" preserveAspectRatio="none">
                <path
                  d="M58 225 C 92 192, 115 170, 134 158 S 186 105, 210 88 S 250 143, 282 180 S 329 104, 350 78"
                  fill="none"
                  stroke="#ff7a1a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="2 12"
                />
              </svg>

              <span className="absolute top-3 left-3 z-20 rounded-full border-2 border-navy bg-ivory px-3 py-1 text-xs font-bold text-navy">
                DREAMDOL MARKET MAP · 콘셉트 시안
              </span>

              {SPOTS.map((spot) => (
                <motion.button
                  key={spot.id}
                  type="button"
                  onClick={() => setActive(spot.id)}
                  aria-pressed={active === spot.id}
                  aria-label={`${spot.label} (${spot.status})`}
                  className={cn(
                    'absolute overflow-hidden rounded-3xl border-2 border-navy bg-card shadow-pop transition-all',
                    active === spot.id && 'ring-4 ring-orange/60',
                  )}
                  style={spot.frame}
                  whileHover={{ scale: 1.025, y: -3 }}
                >
                  <Image
                    src={spot.image}
                    alt={spot.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 45vw"
                    className="object-cover"
                  />
                  <span className={cn('absolute right-2 bottom-2 z-10 flex size-9 items-center justify-center rounded-full border-2 border-navy text-ivory shadow-pop', spot.color)}>
                    <spot.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/45 to-transparent" aria-hidden="true" />
                </motion.button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-3xl border-2 border-navy bg-navy text-ivory shadow-pop" aria-live="polite">
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-transparent" aria-hidden="true" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold tracking-[0.2em] text-cream">SELECTED</p>
                <div className="mt-2 flex items-center gap-3">
                  <current.icon className="size-7 text-orange" aria-hidden="true" />
                  <p className="font-display text-2xl">{current.label}</p>
                </div>
                <p className="mt-2 text-sm text-ivory/75">
                  현재 상태: <strong className="text-cream">{current.status}</strong> — 정확한 위치는 운영 확정 후 안내됩니다.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {SPOTS.map((spot) => (
                <li key={spot.id}>
                  <button
                    type="button"
                    onClick={() => setActive(spot.id)}
                    className={cn(
                      'flex w-full flex-col items-start gap-1.5 rounded-2xl border-2 border-navy p-3 text-left transition-colors',
                      active === spot.id ? 'bg-cream' : 'bg-card hover:bg-cream/60',
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-navy">
                      <span className={cn('size-2.5 rounded-full', spot.color)} aria-hidden="true" />
                      {spot.label}
                    </span>
                    <StatusBadge>{spot.status}</StatusBadge>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
