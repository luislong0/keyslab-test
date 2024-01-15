import { ReactNode } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { ErrorMessage } from '../ErrorMessage'

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
            'bg-transparent text-[16px] placeholder:text-zinc-400',
            className,
          )}
          ref={ref}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          {...inputProps}
        />
      </div>
      <ErrorMessage
        error={!!fieldState.error}
        helperText={fieldState?.error?.message}
      />
    </div>
  )
}
