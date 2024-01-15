interface ErrorMessageProps {
  error?: boolean
  helperText?: string
}

export function ErrorMessage({ error, helperText }: ErrorMessageProps) {
  return (
    <span className="text-sm text-red-400 font-medium">
      {error && helperText}
    </span>
  )
}
