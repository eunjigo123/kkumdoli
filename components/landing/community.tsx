import { Building2, GraduationCap, Lightbulb, Store } from 'lucide-react'
import { Reveal, SectionHeading } from './shared'

const MEMBERS = [
  { icon: Store, title: '상인회', desc: '전통시장 가맹점 운영과 로컬 먹거리 제공', color: 'bg-orange' },
  { icon: Lightbulb, title: '청년 창업가', desc: '꿈돌이 굿즈와 지역 콘텐츠 기획·개발', color: 'bg-blue' },
  { icon: GraduationCap, title: '대학생 서포터즈', desc: '관광 안내, 현장 이벤트, SNS 홍보', color: 'bg-cream text-navy' },
  { icon: Building2, title: '대전시 · 공공기관', desc: '행정 지원과 지역 관광 활성화', color: 'bg-navy' },
]

export function Community() {
  return (
    <section id="community" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="COMMUNITY"
          title="대전의 로컬 가치를 함께 키워요!"
          description="청년들이 지역 관광을 직접 만들어 가는 참여형 로컬 프로젝트입니다. 아래는 함께하고 싶은 참여 주체 구성안이에요."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-3xl border-2 border-navy bg-card p-6 text-center shadow-pop transition-transform hover:-translate-y-1.5">
                <span
                  className={`flex size-20 items-center justify-center rounded-full border-2 border-navy text-ivory transition-transform group-hover:rotate-12 ${m.color}`}
                >
                  <m.icon className="size-9" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl text-navy">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
