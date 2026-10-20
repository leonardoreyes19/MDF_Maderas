import { useEffect, useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Logo } from '../../components/Logo/Logo'
import { TextField } from '../../components/TextField/TextField'
import { DEFAULT_ROUTE } from '../../config/navigation'
import { useAuth } from '../../context/useAuth'
import styles from './LoginPage.module.css'

type FieldErrors = {
  username?: string
  password?: string
}

export function LoginPage() {
  const { isAuthenticated, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const from = (location.state as { from?: string } | null)?.from
  const target = from ?? DEFAULT_ROUTE

  useEffect(() => {
    if (isAuthenticated) {
      navigate(target, { replace: true })
    }
  }, [isAuthenticated, navigate, target])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validación visual: ningún campo puede quedar vacío.
    const nextErrors: FieldErrors = {}
    if (username.trim().length === 0) {
      nextErrors.username = 'Ingresa tu usuario.'
    }
    if (password.length === 0) {
      nextErrors.password = 'Ingresa tu contraseña.'
    }
    setErrors(nextErrors)
    setFormError(null)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setSubmitting(true)
    // Autenticación simulada: reemplazar al integrar el backend.
    const error = await signIn(username, password)
    setSubmitting(false)

    if (error) {
      setFormError(error)
      return
    }

    navigate(target, { replace: true })
  }

  return (
    <div className={styles.page}>
      <section className={styles.brandPanel}>
        <div className={styles.brandContent}>
          <Logo size="lg" className={styles.brandLogo} />
          <span className={styles.brandRule} aria-hidden />
          <h1 className={styles.brandTitle}>
            Trazabilidad de órdenes de trabajo
          </h1>
          <p className={styles.brandText}>
            Seguimiento de cada orden por estación, registro de checkpoints e
            indicadores de desempeño en un solo lugar.
          </p>
        </div>
        <span className={styles.brandStripe} aria-hidden />
      </section>

      <section className={styles.formPanel}>
        <div className={styles.formCard}>
          <Logo size="md" className={styles.formLogo} />

          <header className={styles.formHeader}>
            <h2 className={styles.formTitle}>Iniciar sesión</h2>
            <p className={styles.formSubtitle}>
              Accede con tu cuenta para continuar.
            </p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <TextField
              label="Usuario"
              name="username"
              autoComplete="username"
              placeholder="nombre.apellido"
              value={username}
              error={errors.username}
              onChange={(event) => {
                setUsername(event.target.value)
                if (errors.username) {
                  setErrors((prev) => ({ ...prev, username: undefined }))
                }
              }}
            />

            <TextField
              label="Contraseña"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              error={errors.password}
              onChange={(event) => {
                setPassword(event.target.value)
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: undefined }))
                }
              }}
            />

            {formError ? (
              <p className={styles.formError} role="alert">
                {formError}
              </p>
            ) : null}

            <Button type="submit" fullWidth disabled={submitting}>
              {submitting ? 'Verificando…' : 'Iniciar sesión'}
            </Button>
          </form>

          <p className={styles.note}>
            Acceso de demostración: cualquier usuario y contraseña no vacíos.
          </p>
        </div>
      </section>
    </div>
  )
}
