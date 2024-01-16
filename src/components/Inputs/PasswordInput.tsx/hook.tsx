import { useState } from 'react'

export function usePasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  // Função para mostrar e esconder a senha
  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return {
    showPassword,
    toggleShowPassword,
  }
}
