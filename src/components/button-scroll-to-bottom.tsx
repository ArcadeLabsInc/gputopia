'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { useAtBottom } from '@/lib/hooks/use-at-bottom'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconArrowDown } from '@/components/ui/icons'

interface ButtonScrollToBottomProps extends ButtonProps {
  containerRef: React.RefObject<HTMLElement>
}

export function ButtonScrollToBottom({ className, containerRef, ...props }: ButtonScrollToBottomProps) {
  const isAtBottom = false //useAtBottom()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={() => {
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: 100000,
            behavior: 'smooth'
          })
        }
      }}
      {...props}
    >
      <IconArrowDown />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}
