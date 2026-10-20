/**
 * Servicio de autenticación.
 *
 * Autenticación simulada: reemplazar al integrar el backend.
 *
 * Toda la lógica falsa de sesión vive EXCLUSIVAMENTE en este archivo. Para
 * conectar el backend real basta con reescribir `login`, `logout` y
 * `getSession` (p. ej. POST /auth/login y manejo de token) sin tocar ningún
 * componente: la aplicación solo consume estas tres funciones.
 *
 * Reglas que se mantienen al sustituir la implementación:
 * - No se almacena la contraseña en ningún momento ni en ningún medio.
 * - No se usa localStorage: la sesión vive solo en memoria, por lo que al
 *   recargar la página se vuelve a /login.
 */

export type Session = {
  username: string
  /** Nombre visible en la barra superior. */
  displayName: string
}

export type LoginResult =
  | { ok: true; session: Session }
  | { ok: false; error: string }

/** Sesión en memoria. Se pierde al recargar la página, a propósito. */
let currentSession: Session | null = null

export function getSession(): Session | null {
  return currentSession
}

/**
 * Autenticación simulada: reemplazar al integrar el backend.
 * Acepta cualquier usuario y contraseña no vacíos; la contraseña se recibe
 * para respetar la firma real del servicio, pero se descarta de inmediato.
 */
export async function login(
  username: string,
  password: string,
): Promise<LoginResult> {
  // Pequeña espera para reproducir la latencia de una llamada real.
  await new Promise((resolve) => setTimeout(resolve, 400))

  if (username.trim().length === 0 || password.length === 0) {
    return { ok: false, error: 'Usuario y contraseña son obligatorios.' }
  }

  currentSession = {
    username: username.trim(),
    displayName: username.trim(),
  }

  return { ok: true, session: currentSession }
}

export function logout(): void {
  currentSession = null
}
