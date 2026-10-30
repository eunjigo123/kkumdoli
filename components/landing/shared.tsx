'use client'

import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export function Reveal({
  className,
  delay = 0,
  ...props
}: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    />
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
}) {
  return (
    <Reveal
      className={cn(
        'mb-10 flex flex-col gap-3 md:mb-14',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-cream px-3 py-1 text-xs font-bold tracking-[0.18em] text-navy">
        <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'font-display text-3xl leading-tight text-balance md:text-5xl',
          tone === 'light' ? 'text-ivory' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-xl text-pretty leading-relaxed md:text-lg',
            tone === 'light' ? 'text-ivory/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

export function StatusBadge({
  children,
  tone = 'pending',
  className,
}: {
  children: React.ReactNode
  tone?: 'pending' | 'info' | 'example'
  className?: string
}) {
  const tones = {
    pending: 'bg-cream text-brown border-brown',
    info: 'bg-blue text-ivory border-navy',
    example: 'bg-orange text-ivory border-navy',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border-2 px-2.5 py-0.5 text-[11px] font-bold whitespace-nowrap',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
