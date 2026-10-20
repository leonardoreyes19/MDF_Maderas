import { Menu } from 'lucide-react'
import styles from './Topbar.module.css'

type TopbarProps = {
  title: string
  /** Escritorio: colapsa o expande. Pantallas pequeñas: abre o cierra. */
  onToggleMenu: () => void
  /** Texto accesible del botón, según el estado actual de la barra lateral. */
  menuLabel: string
  /** `true` cuando la barra lateral se ve completa (expandida o abierta). */
  menuExpanded: boolean
}

export function Topbar({
  title,
  onToggleMenu,
  menuLabel,
  menuExpanded,
}: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <button
        type="button"
        className={styles.menuButton}
        onClick={onToggleMenu}
        aria-label={menuLabel}
        title={menuLabel}
        aria-expanded={menuExpanded}
        aria-controls="sidebar-principal"
      >
        <Menu size={20} />
      </button>

      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
