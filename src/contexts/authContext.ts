import { create } from 'zustand'

export interface AuthContextState {
  userEmail: string
  resetCode: string
  setResetCode: (code: string) => void
  setUserEmail: (email: string) => void
}

export const useAuthContext = create<AuthContextState>((set) => ({
  resetCode: '',
  userEmail: '',
  setResetCode: (code: string) => set({ resetCode: code }),
  setUserEmail: (email: string) => set({ userEmail: email }),
}))
