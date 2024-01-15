import { create } from 'zustand'

export interface AuthContextState {
  resetCode: string
  setResetCode: (code: string) => void
}

export const useAuthContext = create<AuthContextState>((set) => ({
  resetCode: 'false',
  setResetCode: (code: string) => set({ resetCode: code }),
}))
