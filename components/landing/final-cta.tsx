import { ArrowRight } from 'lucide-react'
import { MiniCoin } from './mini-coin'
import { Reveal } from './shared'
import { NAV_ITEMS } from './nav-items'
import { ShareButton } from './share-button'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-orange py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-dots" aria-hidden="true" />
      <MiniCoin className="absolute top-10 left-[6%] size-16 -rotate-12 md:size-24" />
      <MiniCoin className="absolute right-[8%] bottom-10 size-14 rotate-12 md:size-20" />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <p className="rounded-full border-2 border-navy bg-ivory px-4 py-1 text-sm font-bold tracking-[0.2em] text-navy">
          빵지순례 다음은?
        </p>
        <h2 className="font-display text-4xl leading-tight text-ivory text-balance [text-shadow:3px_3px_0_var(--brand-navy)] md:text-6xl">
          대전 여행의 마지막 코스,
          <br />
          꿈돌이와 함께 중앙시장!
        </h2>
        <p className="max-w-lg text-lg leading-relaxed text-navy text-pretty">
          빵지순례를 넘어 로컬 미식 탐험으로. 꿈돌이 화폐와 함께 대전의 새로운 매력을 발견하세요.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#how"
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-navy px-7 py-4 text-lg font-bold text-ivory shadow-[4px_4px_0_0_var(--brand-ivory)] transition-transform hover:-translate-y-0.5"
          >
            꿈돌이 미식 투어 시작하기
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <ShareButton />
        </div>
      </Reveal>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy pt-14 pb-28 text-ivory/80 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MiniCoin className="size-10" />
            <span className="font-display text-2xl text-ivory">꿈돌이 화폐</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            DREAMDOL MONEY PROJECT는 성심당을 찾은 관광객이 대전 중앙시장까지 걸어가 로컬 미식을 경험하도록 돕는 청년 주도 관광 프로젝트입니다.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-ivory">바로가기</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="mb-1 font-bold text-ivory">운영 안내</h3>
          <p>운영 일정 · 환전소 위치: 준비 중</p>
          <p>공식 SNS · 문의 채널: 오픈 시 공개</p>
          <p className="text-cream">#꿈돌이화폐 #빵지순례다음은중앙시장</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-ivory/15 px-4 pt-6 text-xs text-ivory/50">
        본 페이지는 프로젝트 콘셉트 시안입니다. 캐릭터·코인 그래픽은 임시 디자인이며 공식 캐릭터, 성심당 및 관계 기관과의 제휴를 의미하지 않습니다.
      </p>
    </footer>
  )
}
