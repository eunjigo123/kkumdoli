'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Camera, Check, Coins, Gift, PartyPopper, RotateCcw, Store, Trophy, Utensils } from 'lucide-react'
import { Reveal, SectionHeading, StatusBadge } from './shared'
import { cn } from '@/lib/utils'

const MISSIONS = [
  { icon: Store, title: '중앙시장 방문하기', reward: '웰컴 스티커' },
  { icon: Coins, title: '꿈돌이 화폐 사용하기', reward: '스탬프 1개' },
  { icon: Utensils, title: '로컬 먹거리 2곳 방문', reward: '스탬프 2개' },
  { icon: Camera, title: 'SNS 인증하기', reward: '추가 교환권' },
  { icon: Trophy, title: '스탬프 완성하기', reward: '한정판 굿즈' },
]

export function StampTour() {
  const [done, setDone] = useState<boolean[]>(() => MISSIONS.map(() => false))
  const count = done.filter(Boolean).length
  const complete = count === MISSIONS.length
  const progress = Math.round((count / MISSIONS.length) * 100)

  const toggle = (i: number) =>
    setDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <section id="stamp" className="relative overflow-hidden bg-blue py-20 text-ivory md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-dots" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="STAMP TOUR"
          tone="light"
          title="먹을수록 쌓이는 즐거움!"
          description="미션을 하나씩 완료하고 스탬프북을 채워 보세요. 아래 스탬프북을 눌러 투어를 미리 체험할 수 있어요."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="relative rounded-[2rem] border-2 border-navy bg-ivory p-5 text-navy shadow-pop-lg md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-blue">DREAMDOL STAMP BOOK</p>
                  <h3 className="font-display text-2xl md:text-3xl">꿈돌이 스탬프북</h3>
                </div>
                <StatusBadge tone="example">체험용 미리보기</StatusBadge>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-end justify-between text-sm font-bold">
                  <span>진행률</span>
                  <span className="font-display text-xl text-blue">
                    {count} / {MISSIONS.length}
                  </span>
                </div>
                <div
                  className="h-5 overflow-hidden rounded-full border-2 border-navy bg-cream"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="스탬프 투어 진행률"
                >
                  <motion.div
                    className="h-full rounded-full bg-[repeating-linear-gradient(45deg,var(--brand-orange)_0_10px,#ff9a4d_10px_20px)]"
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  />
                </div>
              </div>

              <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {MISSIONS.map((m, i) => (
                  <li key={m.title}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-pressed={done[i]}
                      aria-label={`${m.title} ${done[i] ? '스탬프 취소' : '스탬프 찍기'}`}
                      className={cn(
                        'relative flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-full border-2 border-dashed transition-colors',
                        done[i] ? 'border-orange bg-orange/10' : 'border-navy/40 bg-cream/40 hover:bg-cream',
                      )}
                    >
                      <AnimatePresence mode="wait">
                        {done[i] ? (
                          <motion.span
                            key="on"
                            initial={{ scale: 2.2, opacity: 0, rotate: -30 }}
                            animate={{ scale: 1, opacity: 1, rotate: -12 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                            className="flex size-[82%] flex-col items-center justify-center rounded-full border-[3px] border-orange text-orange"
                          >
                            <m.icon className="size-6" aria-hidden="true" />
                            <span className="font-display text-xs">참 잘했어요</span>
                          </motion.span>
                        ) : (
                          <motion.span
                            key="off"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center text-navy/50"
                          >
                            <m.icon className="size-6" aria-hidden="true" />
                            <span className="font-display text-sm">{i + 1}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-navy/20 pt-4">
                <p className="text-sm text-muted-foreground">
                  {complete ? '스탬프북 완성! 완주 보상을 확인하세요.' : `완주까지 스탬프 ${MISSIONS.length - count}개 남았어요.`}
                </p>
                <button
                  type="button"
                  onClick={() => setDone(MISSIONS.map(() => false))}
                  disabled={count === 0}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy px-3 py-1.5 text-sm font-bold transition-colors hover:bg-cream disabled:opacity-40"
                >
                  <RotateCcw className="size-4" aria-hidden="true" />
                  다시 하기
                </button>
              </div>

              <AnimatePresence>
                {complete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[2rem] bg-navy/90 p-6 text-center text-ivory backdrop-blur-sm"
                    role="status"
                  >
                    <Confetti />
                    <motion.span
                      initial={{ rotate: -20, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="flex size-20 items-center justify-center rounded-full border-2 border-ivory bg-orange"
                    >
                      <PartyPopper className="size-10" aria-hidden="true" />
                    </motion.span>
                    <p className="font-display text-3xl">투어 완주 축하해요!</p>
                    <p className="max-w-xs text-sm text-ivory/80">
                      실제 운영 시 환전소에서 스탬프북을 보여주면 꿈돌이 한정판 굿즈를 받을 수 있어요.
                    </p>
                    <button
                      type="button"
                      onClick={() => setDone(MISSIONS.map(() => false))}
                      className="mt-2 rounded-full border-2 border-ivory bg-ivory px-5 py-2 font-bold text-navy hover:bg-cream"
                    >
                      다시 체험하기
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {MISSIONS.map((m, i) => (
                <li
                  key={m.title}
                  className={cn(
                    'flex items-center gap-4 rounded-2xl border-2 border-navy p-4 transition-colors',
                    done[i] ? 'bg-cream text-navy' : 'bg-navy/30 text-ivory',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-full border-2 font-display',
                      done[i] ? 'border-navy bg-orange text-ivory' : 'border-ivory/60',
                    )}
                  >
                    {done[i] ? <Check className="size-5" aria-hidden="true" /> : i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold">{m.title}</p>
                    <p className={cn('flex items-center gap-1 text-sm', done[i] ? 'text-brown' : 'text-ivory/70')}>
                      <Gift className="size-3.5" aria-hidden="true" />
                      {m.reward}
                    </p>
                  </div>
                </li>
              ))}
              <li className="rounded-2xl border-2 border-dashed border-ivory/50 p-4 text-sm text-ivory/80">
                * 미션과 보상은 예시 프로그램이며, 실제 운영 조건은 확정 후 공지됩니다.
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const CONFETTI_COLORS = ['#ff7a1a', '#ffe9a8', '#1f4fd8', '#fffaf0']

function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-1/2 left-1/2 size-2.5 rounded-sm"
          style={{ backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: Math.cos((i / 24) * Math.PI * 2) * (120 + (i % 4) * 40),
            y: Math.sin((i / 24) * Math.PI * 2) * (100 + (i % 3) * 40),
            opacity: 0,
            rotate: 360,
          }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
