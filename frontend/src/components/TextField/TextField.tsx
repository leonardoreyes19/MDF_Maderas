import { useId, type InputHTMLAttributes } from 'react'
import { cx } from '../../utils/cx'
import styles from './TextField.module.css'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  /** Mensaje de error; si existe, el campo se marca como inválido. */
  error?: string
}

export function TextField({
  label,
  error,
  id,
  className,
  ...rest
}: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div className={cx(styles.field, className)}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={cx(styles.input, error && styles.inputInvalid)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
