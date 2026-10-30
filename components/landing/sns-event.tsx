import Image from 'next/image'
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'
import { Reveal, SectionHeading, StatusBadge } from './shared'
import { ShareButton } from './share-button'

const POSTS = [
  { image: '/images/market-scene.png', alt: '중앙시장 골목을 걷는 여행자들', title: '인스타그램 인증 이벤트', tag: '#빵지순례다음은중앙시장' },
  { image: '/images/money-kit.png', alt: '꿈돌이 화폐 키트 구성품', title: '꿈돌이 화폐 사용 인증', tag: '#꿈돌이화폐' },
  { image: '/images/food-kkwabaegi.png', alt: '종이봉투에 담긴 꽈배기', title: '스탬프 투어 완주 인증', tag: '#꿈돌이스탬프투어' },
  { image: '/images/coin-hero.png', alt: '꿈돌이 코인 콘셉트 시안', title: '꿈돌이 굿즈 이벤트', tag: '#꿈돌이굿즈' },
]

export function SnsEvent() {
  return (
    <section id="sns" className="bg-navy py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="SNS & EVENT"
          tone="light"
          title="나만의 대전 미식 탐험을 공유해 주세요!"
          description="해시태그와 함께 인증하면 이벤트에 참여할 수 있어요. 이벤트 일정과 경품은 오픈 시 공지됩니다."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="overflow-hidden rounded-3xl border-2 border-ivory/20 bg-ivory text-navy">
                <header className="flex items-center gap-2 px-3 py-2.5">
                  <span className="size-8 rounded-full border-2 border-navy bg-[conic-gradient(var(--brand-orange),var(--brand-blue),var(--brand-cream),var(--brand-orange))]" aria-hidden="true" />
                  <span className="text-sm font-bold">dreamdol.money</span>
                  <StatusBadge tone="example" className="ml-auto">예시</StatusBadge>
                </header>
                <div className="relative aspect-square">
                  <Image src={post.image} alt={post.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <div className="flex items-center gap-3 text-navy/80" aria-hidden="true">
                    <Heart className="size-5" />
                    <MessageCircle className="size-5" />
                    <Send className="size-5" />
                    <Bookmark className="ml-auto size-5" />
                  </div>
                  <p className="font-bold">{post.title}</p>
                  <p className="text-sm font-semibold text-blue">{post.tag}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-ivory/80">방문객 후기와 사진 갤러리는 투어 오픈 후 이곳에 채워집니다.</p>
          <ShareButton />
        </Reveal>
      </div>
    </section>
  )
}
