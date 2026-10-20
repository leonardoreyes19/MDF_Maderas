import { useCallback, useMemo, useState, type ReactNode } from 'react'
import * as authService from '../services/auth'
import type { Session } from '../services/auth'
import { AuthContext, type AuthContextValue } from './auth-context'

/**
 * Mantiene el estado de sesión en React. No contiene lógica de
 * autenticación: toda esa responsabilidad vive en services/auth.ts.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() =>
    authService.getSession(),
  )

  /** Devuelve null si el inicio de sesión fue correcto, o el mensaje de error. */
  const signIn = useCallback(async (username: string, password: string) => {
    const result = await authService.login(username, password)
    if (!result.ok) {
      return result.error
    }
    setSession(result.session)
    return null
  }, [])

  const signOut = useCallback(() => {
    authService.logout()
    setSession(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isAuthenticated: session !== null,
      signIn,
      signOut,
    }),
    [session, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
