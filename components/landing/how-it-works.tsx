import { Coins, Gift, Map, Stamp } from 'lucide-react'
import { Reveal, SectionHeading } from './shared'

const STEPS = [
  {
    icon: Coins,
    title: '환전하기',
    color: 'bg-blue text-ivory',
    points: ['중앙시장 입구 꿈돌이 화폐 환전소 방문', '꿈돌이 화폐 또는 먹거리 교환권 수령'],
  },
  {
    icon: Map,
    title: '시장 탐험하기',
    color: 'bg-cream text-navy',
    points: ['꿈돌이 지도를 보고 제휴 가맹점 탐방', '꽈배기, 메밀전, 노포 맛집 등 로컬 먹거리 발견'],
  },
  {
    icon: Stamp,
    title: '화폐 쓰고 스탬프 모으기',
    color: 'bg-orange text-ivory',
    points: ['제휴 점포에서 꿈돌이 화폐 사용', '방문 및 구매 미션에 따라 스탬프 적립'],
  },
  {
    icon: Gift,
    title: '리워드 받기',
    color: 'bg-navy text-ivory',
    points: ['스탬프 완성 시 꿈돌이 굿즈 및 할인 혜택', '캐시백 또는 추가 교환권 혜택 안내'],
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="꿈돌이 화폐, 이렇게 사용해요!"
          description="환전부터 리워드까지, 4단계면 중앙시장 미식 탐험 완료."
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <li className="group relative flex h-full flex-col gap-4 rounded-3xl border-2 border-navy bg-card p-6 shadow-pop transition-transform hover:-translate-y-1.5 hover:rotate-[-0.6deg]">
                <div className="flex items-center justify-between">
                  <span className={`flex size-14 items-center justify-center rounded-2xl border-2 border-navy ${step.color}`}>
                    <step.icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl text-navy/15 transition-colors group-hover:text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-blue">STEP {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 font-display text-2xl text-navy">{step.title}</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  {step.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
