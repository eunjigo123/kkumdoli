'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { MiniCoin } from './mini-coin'
import { NAV_ITEMS } from './nav-items'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          aria-label="주요 메뉴"
          className={cn(
            'flex items-center justify-between rounded-full border-2 border-navy bg-ivory/90 px-3 py-2 backdrop-blur transition-shadow md:px-4',
            scrolled && 'shadow-pop',
          )}
        >
          <a href="#top" className="flex items-center gap-2" aria-label="꿈돌이 화폐 홈">
            <MiniCoin className="size-9" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg text-navy">꿈돌이 화폐</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue">DREAMDOL MONEY</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#stamp"
              className="hidden rounded-full border-2 border-navy bg-orange px-4 py-2 text-sm font-bold text-ivory transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              투어 시작하기
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border-2 border-navy bg-cream text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-3xl border-2 border-navy bg-ivory p-3 shadow-pop lg:hidden"
            >
              <ul className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl bg-cream/60 px-4 py-3 text-center font-semibold text-navy hover:bg-cream"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
