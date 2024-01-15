import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { usePasswordInput } from './hook'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  name: string
  customError?: string
}

export function PasswordInput({
  icon,
  name,
  className,
  type,
  ...inputProps
}: PasswordInputProps) {
  const { showPassword, toggleShowPassword } = usePasswordInput()

  return (
    <div className="border-[1.5px] border-zinc-800 gap-4 rounded-xl flex items-center p-4 focus-within:shadow-custom focus-within:border-blue-500">
      {icon}
      <input
        className={twMerge(
          'bg-transparent text-[16px] placeholder:text-zinc-400',
          className,
        )}
        type={showPassword ? 'text' : 'password'}
        {...inputProps}
      />

      <button
        type="button"
        onClick={toggleShowPassword}
        className="text-zinc-800 hover:text-blue-500 transition-all"
      >
        {showPassword === false ? <Eye /> : <EyeOff />}
      </button>
    </div>
  )
}
