import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { LocalFood } from '@/components/landing/local-food'
import { StampTour } from '@/components/landing/stamp-tour'
import { DreamdolMoney } from '@/components/landing/dreamdol-money'
import { MarketMap } from '@/components/landing/market-map'
import { Community } from '@/components/landing/community'
import { SnsEvent } from '@/components/landing/sns-event'
import { FinalCta, SiteFooter } from '@/components/landing/final-cta'
import { MobileCta } from '@/components/landing/mobile-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <LocalFood />
        <StampTour />
        <DreamdolMoney />
        <MarketMap />
        <Community />
        <SnsEvent />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
