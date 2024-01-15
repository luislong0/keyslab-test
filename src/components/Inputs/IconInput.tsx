import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  name: string
  customError?: string
}

export function IconInput({
  icon,
  name,
  className,
  ...inputProps
}: IconInputProps) {
  return (
    <div className="border-[1.5px] border-zinc-800 gap-4 rounded-xl flex items-center p-4 focus-within:shadow-custom focus-within:border-blue-500">
      {icon}
      <input
        className={twMerge(
          'bg-transparent text-[16px] placeholder:text-zinc-400',
          className,
        )}
        {...inputProps}
      />
    </div>
  )
}
