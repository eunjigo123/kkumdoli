'use client'

import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ShareButton({ className, label = '친구에게 공유하기' }: { className?: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const onShare = async () => {
    const data = {
      title: '꿈돌이 화폐 DREAMDOL MONEY',
      text: '빵지순례 다음은? 꿈돌이와 중앙시장! 대전 로컬 미식 탐험',
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(data)
        return
      } catch {
        return
      }
    }
    await navigator.clipboard.writeText(data.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-ivory px-5 py-3 font-bold text-navy shadow-pop transition-all hover:-translate-y-0.5 hover:bg-cream active:translate-y-0.5 active:shadow-none',
        className,
      )}
    >
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Share2 className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? '링크가 복사됐어요!' : label}</span>
    </button>
  )
}
