/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends ComponentProps<'div'> {
  children: React.ReactNode
}

export function Container({
  children,
  className,
  ...componentProps
}: ContainerProps) {
  return (
    <div className={twMerge('max-w-[1440px]', className)} {...componentProps}>
      {children}
    </div>
  )
}
