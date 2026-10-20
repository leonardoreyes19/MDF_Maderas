import { createContext } from 'react'
import type { Session } from '../services/auth'

export type AuthContextValue = {
  session: Session | null
  isAuthenticated: boolean
  signIn: (username: string, password: string) => Promise<string | null>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
