import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface DefaultButtonProps extends ComponentProps<'button'> {
  label: string | React.ReactNode
}

export function DefaultButton({
  label,
  className,
  ...buttonProps
}: DefaultButtonProps) {
  return (
    <button
      className={twMerge(
        'w-full flex justify-center text-center rounded-full p-4 text-sm',
        className,
      )}
      {...buttonProps}
    >
      {label}
    </button>
  )
}
