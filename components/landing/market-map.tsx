'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Armchair, Camera, Coins, DoorOpen, Route, Utensils } from 'lucide-react'
import { Reveal, SectionHeading, StatusBadge } from './shared'
import { cn } from '@/lib/utils'

const SPOTS = [
  { id: 'entrance', icon: DoorOpen, label: '중앙시장 주요 입구', status: '위치 준비 중', x: '12%', y: '78%', color: 'bg-navy' },
  { id: 'exchange', icon: Coins, label: '꿈돌이 화폐 환전소', status: '예정', x: '28%', y: '52%', color: 'bg-blue' },
  { id: 'food', icon: Utensils, label: '먹거리 제휴 점포', status: '제휴 예정', x: '54%', y: '30%', color: 'bg-orange' },
  { id: 'rest', icon: Armchair, label: '구매품 취식 쉼터', status: '예정', x: '72%', y: '62%', color: 'bg-brown' },
  { id: 'photo', icon: Camera, label: '포토존', status: '예정', x: '86%', y: '24%', color: 'bg-orange' },
  { id: 'course', icon: Route, label: '스탬프 투어 코스', status: '코스 설계 중', x: '46%', y: '74%', color: 'bg-blue' },
]

export function MarketMap() {
  const [active, setActive] = useState(SPOTS[1].id)
  const current = SPOTS.find((s) => s.id === active) ?? SPOTS[0]

  return (
    <section id="map" className="relative bg-cream/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="MARKET MAP"
          title="꿈돌이와 함께 중앙시장을 탐험해 봐요!"
          description="탐험 지도는 콘셉트 일러스트입니다. 실제 시설 위치는 확정되는 대로 업데이트돼요."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-navy bg-[#fdf3dc] shadow-pop-lg">
              <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" aria-hidden="true" preserveAspectRatio="none">
                <rect x="20" y="30" width="110" height="70" rx="14" fill="#ffe9a8" stroke="#14213d" strokeWidth="2" />
                <rect x="150" y="20" width="120" height="60" rx="14" fill="#ffd9bd" stroke="#14213d" strokeWidth="2" />
                <rect x="290" y="110" width="90" height="80" rx="14" fill="#ffe9a8" stroke="#14213d" strokeWidth="2" />
                <rect x="60" y="130" width="70" height="60" rx="14" fill="#dbe4ff" stroke="#14213d" strokeWidth="2" />
                <rect x="160" y="110" width="110" height="80" rx="14" fill="#fff" stroke="#14213d" strokeWidth="2" />
                <rect x="220" y="230" width="150" height="50" rx="14" fill="#ffd9bd" stroke="#14213d" strokeWidth="2" />
                <path
                  d="M48 234 C 90 200, 100 160, 112 156 S 200 100, 216 90 S 260 170, 288 186 S 330 90, 344 72"
                  fill="none"
                  stroke="#ff7a1a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="2 12"
                />
              </svg>
              <span className="absolute top-3 left-3 rounded-full border-2 border-navy bg-ivory px-3 py-1 text-xs font-bold text-navy">
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
                    'absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-navy text-ivory shadow-pop md:size-12',
                    spot.color,
                  )}
                  style={{ left: spot.x, top: spot.y }}
                  whileHover={{ scale: 1.12 }}
                  animate={active === spot.id ? { scale: 1.18, y: -4 } : { scale: 1, y: 0 }}
                >
                  <spot.icon className="size-5" aria-hidden="true" />
                  {active === spot.id && (
                    <span className="absolute -inset-1.5 animate-ping rounded-full border-2 border-orange" aria-hidden="true" />
                  )}
                </motion.button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-3xl border-2 border-navy bg-navy p-5 text-ivory shadow-pop" aria-live="polite">
              <p className="text-xs font-bold tracking-[0.2em] text-cream">SELECTED</p>
              <div className="mt-2 flex items-center gap-3">
                <current.icon className="size-7 text-orange" aria-hidden="true" />
                <p className="font-display text-2xl">{current.label}</p>
              </div>
              <p className="mt-2 text-sm text-ivory/75">
                현재 상태: <strong className="text-cream">{current.status}</strong> — 정확한 위치는 운영 확정 후 안내됩니다.
              </p>
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
