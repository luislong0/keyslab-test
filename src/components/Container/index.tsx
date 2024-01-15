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
  // const newClass =
  //   'h-screen mx-auto flex flex-col justify-start items-start px-5'

  return (
    <div
      className={twMerge(
        'max-w-[1440px] flex flex-col justify-start items-start',
        className,
      )}
      {...componentProps}
    >
      {children}
    </div>
  )
}
