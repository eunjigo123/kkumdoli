import Image from 'next/image'
import { Ticket } from 'lucide-react'
import { Reveal, SectionHeading, StatusBadge } from './shared'
import a1 from '../../a1.jpg'
import a2 from '../../a2.jpg'
import a3 from '../../a3.jpg'
import a4 from '../../a4.jpg'

const FOODS = [
  {
    category: '오래된 노포 맛집',
    name: '시장 노포 국밥',
    desc: '수십 년 손맛이 우러난 뜨끈한 한 그릇. 시장 사람들의 단골 아침 메뉴.',
    image: a1,
    alt: '시장 노포 국밥 이미지',
    tilt: '-rotate-1',
  },
  {
    category: '바삭하고 달콤한',
    name: '설탕 꽈배기',
    desc: '갓 튀겨 설탕을 듬뿍 묻힌 꽈배기. 성심당 빵 다음 디저트로 딱!',
    image: a2,
    alt: '설탕 꽈배기 이미지',
    tilt: 'rotate-1',
  },
  {
    category: '고소한 전통의 맛',
    name: '메밀전',
    desc: '얇게 부친 메밀 반죽에 배추와 쪽파. 철판 위에서 바로 부쳐 고소함 가득.',
    image: a3,
    alt: '메밀전 이미지',
    tilt: '-rotate-1',
  },
  {
    category: '시장에서만 만나는',
    name: '시장 분식 한 접시',
    desc: '떡볶이, 순대, 튀김꼬치까지. 걸으며 즐기는 시장 길거리 간식.',
    image: a4,
    alt: '시장 분식 한 접시 이미지',
    tilt: 'rotate-1',
  },
]

export function LocalFood() {
  return (
    <section id="food" className="relative bg-cream/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="LOCAL FOOD"
          title={
            <>
              성심당만 알고 가기엔
              <br className="sm:hidden" /> 아쉬운 대전의 맛!
            </>
          }
          description="중앙시장 골목마다 숨어 있는 로컬 먹거리. 가맹점은 상인회와 협의 후 순차 공개됩니다."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOODS.map((food, i) => (
            <Reveal key={food.name} delay={i * 0.08}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-navy bg-card shadow-pop transition-transform hover:rotate-0 hover:-translate-y-1.5 ${food.tilt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-navy">
                  <Image
                    src={food.image}
                    alt={food.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full border-2 border-navy bg-ivory px-2.5 py-0.5 text-xs font-bold text-navy">
                    {food.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-2xl text-navy">{food.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{food.desc}</p>
                  <div className="flex flex-col gap-2 border-t-2 border-dashed border-navy/20 pt-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-navy">꿈돌이 화폐</span>
                      <StatusBadge>제휴 예정</StatusBadge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 font-semibold text-navy">
                        <Ticket className="size-3.5" aria-hidden="true" />
                        교환권
                      </span>
                      <StatusBadge>제휴 예정</StatusBadge>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          * 이미지는 메뉴 예시이며, 실제 가맹점 상호와 사용 가능 여부는 제휴 확정 후 안내합니다.
        </p>
      </div>
    </section>
  )
}
