import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface DefaultLinkProps extends ComponentProps<typeof Link> {
  label: string
}

export function DefaultLink({
  label,
  href,
  className,
  ...linkProps
}: DefaultLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'text-sm text-zinc-400 hover:text-zinc-50 transition-all underline',
        className,
      )}
      {...linkProps}
    >
      {label}
    </Link>
  )
}
