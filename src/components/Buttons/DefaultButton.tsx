import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface DefaultButtonProps extends ComponentProps<'button'> {
  label: string
}

export function DefaultButton({
  label,
  className,
  ...buttonProps
}: DefaultButtonProps) {
  return (
    <button
      className={twMerge('w-full rounded-full p-4 text-sm', className)}
      {...buttonProps}
    >
      {label}
    </button>
  )
}
