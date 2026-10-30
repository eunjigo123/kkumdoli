import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MiniCoin({ className, label }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex aspect-square items-center justify-center rounded-full border-[3px] border-navy bg-[radial-gradient(circle_at_30%_30%,#ffe9a8,#f4b82c_60%,#c98a12)] shadow-pop',
        className,
      )}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      <span className="absolute inset-[14%] rounded-full border-2 border-dashed border-brown/50" />
      <Star className="size-1/2 fill-blue text-navy" strokeWidth={1.5} />
    </span>
  )
}
