import { FieldValues, UseFormProps, useForm } from 'react-hook-form'
import { ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Tipagem para a configuração do HookForm
interface HookFormConfigProps<T extends FieldValues = FieldValues> {
  schema?: ZodSchema<T>
  useFormProps?: UseFormProps<T>
}

// Configuração do HookForm
export function HookFormConfig<T extends FieldValues = FieldValues>({
  schema,
  useFormProps = {},
}: HookFormConfigProps<T> = {}) {
  const formMethods = useForm<T>({
    ...useFormProps,
    resolver: schema ? zodResolver(schema) : undefined,
  })

  return {
    formMethods,
  }
}
