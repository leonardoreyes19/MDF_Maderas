import logoSrc from '../../assets/mdf-logo.png'
import { cx } from '../../utils/cx'
import styles from './Logo.module.css'

type LogoProps = {
  /** Alto del logo. `sm` para la barra lateral, `lg` para el panel de marca. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * El archivo de marca es un PNG con fondo blanco, por lo que el componente
 * fuerza una superficie #FFFFFF detrás de la imagen en todos sus usos.
 */
export function Logo({ size = 'md', className }: LogoProps) {
  return (
    <span className={cx(styles.frame, styles[size], className)}>
      <img src={logoSrc} alt="MDF Maderas" className={styles.image} />
    </span>
  )
}
