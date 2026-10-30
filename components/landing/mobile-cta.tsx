'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Stamp } from 'lucide-react'

export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <div className="flex gap-2 rounded-full border-2 border-navy bg-ivory p-1.5 shadow-pop">
            <a href="#money" className="flex-1 rounded-full py-3 text-center text-sm font-bold text-navy">
              화폐 알아보기
            </a>
            <a
              href="#stamp"
              className="flex flex-[1.4] items-center justify-center gap-1.5 rounded-full border-2 border-navy bg-orange py-3 text-sm font-bold text-ivory"
            >
              <Stamp className="size-4" aria-hidden="true" />
              미식 투어 시작하기
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
