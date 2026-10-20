import logoSrc from '../../assets/mdf-logo.png'
import { cx } from '../../utils/cx'
import styles from './Logo.module.css'

type LogoProps = {
  /** Alto del logo. `sm` para la barra lateral, `lg` para el panel de marca. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * El archivo de marca es un PNG con fondo transparente, así que el logo toma
 * el color de la superficie donde se coloque (blanco en el login, gris carbón
 * en la barra lateral). El componente no impone ningún fondo.
 */
export function Logo({ size = 'md', className }: LogoProps) {
  return (
    <span className={cx(styles.frame, styles[size], className)}>
      <img src={logoSrc} alt="MDF Maderas" className={styles.image} />
    </span>
  )
}
