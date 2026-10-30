import Image from 'next/image'
import { BookOpen, Coins, Package, Ticket } from 'lucide-react'
import { Reveal, SectionHeading } from './shared'
import kum from '../../kum.png'

const KIT = [
  { icon: Coins, title: '실물 꿈돌이 코인', desc: '앞면엔 별 마스코트, 뒷면엔 엽전 문양' },
  { icon: Package, title: '전용 파우치', desc: '코인과 교환권을 담는 꿈돌이 블루 파우치' },
  { icon: BookOpen, title: '리플렛 & 관광 지도', desc: '중앙시장 탐험 코스가 담긴 일러스트 지도' },
  { icon: Ticket, title: '먹거리 교환권', desc: '제휴 점포에서 쓰는 지류형 교환권' },
]

export function DreamdolMoney() {
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
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border-2 border-navy bg-ivory shadow-pop-lg">
              <Image
                src={kum}
                alt="꿈돌이 캐릭터를 활용한 꿈돌이 코인 콘셉트 이미지"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
            <p className="text-xs text-muted-foreground">* 코인 이미지는 콘셉트 시안입니다.</p>
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
