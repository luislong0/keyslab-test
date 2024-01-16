import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { usePasswordInput } from './hook'
import { Eye, EyeOff } from 'lucide-react'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@/components/ErrorMessage'

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
  ...inputProps
}: PasswordInputProps) {
  const { showPassword, toggleShowPassword } = usePasswordInput()

  const { control } = useFormContext()

  const {
    field: { onChange, value, onBlur, ref },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue: inputProps?.defaultValue ? inputProps?.defaultValue : '',
  })

  return (
    <div>
      <div className="border-[1.5px] border-zinc-800 gap-4 rounded-xl flex items-center p-4 focus-within:shadow-custom focus-within:border-blue-500">
        {icon}
        <input
          className={twMerge(
            'bg-transparent text-[16px] placeholder:text-zinc-400 focus:outline-none',
            className,
          )}
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
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

      <ErrorMessage
        error={!!fieldState.error}
        helperText={fieldState?.error?.message}
      />
    </div>
  )
}
