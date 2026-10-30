'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowRight, Croissant, MapPin, Store } from 'lucide-react'
import { MiniCoin } from './mini-coin'
import kum from '../../kum.png'

const ROUTE = [
  { icon: Croissant, label: '성심당', sub: '빵지순례 출발' },
  { icon: MiniCoinIcon, label: '꿈돌이 화폐', sub: '환전하고' },
  { icon: Store, label: '중앙시장', sub: '로컬 미식 탐험' },
]

function MiniCoinIcon({ className }: { className?: string }) {
  return <MiniCoin className={className} />
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden bg-dots pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-cream blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 size-96 rounded-full bg-orange/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-navy bg-blue px-4 py-1.5 text-sm font-bold text-ivory shadow-pop"
          >
            <MapPin className="size-4" aria-hidden="true" />
            대전 로컬 미식 탐험 프로젝트
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="font-display text-4xl leading-[1.15] text-navy text-balance sm:text-5xl lg:text-6xl"
          >
            성심당에서 빵 샀다면?
            <br />
            이제{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue">중앙시장</span>
              <span
                className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 rounded bg-cream md:h-5"
                aria-hidden="true"
              />
            </span>
            으로
            <br />
            떠날 시간!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            꿈돌이 화폐로 즐기는 대전 로컬 미식 탐험.{' '}
            <strong className="font-bold text-navy">먹고, 찍고, 모으고, 선물까지</strong> 받아 가세요!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href="#money"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-blue px-6 py-3.5 font-bold text-ivory shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
            >
              꿈돌이 화폐 알아보기
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#stamp"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-ivory px-6 py-3.5 font-bold text-navy shadow-pop transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none"
            >
              미식 투어 시작하기
            </a>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            aria-label="추천 관광 동선"
            className="mt-2 flex w-full items-center gap-1 rounded-3xl border-2 border-dashed border-navy/40 bg-ivory/70 p-3 sm:w-auto sm:gap-2"
          >
            {ROUTE.map((step, i) => (
              <li key={step.label} className="flex flex-1 items-center gap-1 sm:flex-none sm:gap-2">
                <div className="flex flex-1 flex-col items-center gap-1 text-center sm:flex-row sm:text-left">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-cream">
                    <step.icon className="size-6 text-navy" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-navy">{step.label}</span>
                    <span className="text-[11px] text-muted-foreground">{step.sub}</span>
                  </span>
                </div>
                {i < ROUTE.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-orange" aria-hidden="true" />
                )}
              </li>
            ))}
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-cream/70 blur-xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[2rem] border-2 border-navy/15 bg-ivory shadow-pop-lg">
            <Image
              src={kum}
              alt="꿈돌이 캐릭터가 들어간 꿈돌이 우주코인 콘셉트 이미지"
              priority
              sizes="(min-width: 1024px) 520px, 92vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#how"
        className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-xs font-bold tracking-widest text-navy/60 hover:text-navy"
      >
        SCROLL
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </motion.span>
        <span className="sr-only">이용 방법으로 이동</span>
      </a>
    </section>
  )
}
