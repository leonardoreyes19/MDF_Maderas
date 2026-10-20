import { PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../config/navigation'
import { Logo } from '../Logo/Logo'
import { cx } from '../../utils/cx'
import styles from './Sidebar.module.css'

type SidebarProps = {
  /** Modo solo íconos en escritorio. */
  collapsed: boolean
  onToggleCollapse: () => void
  /** Cajón abierto en pantallas pequeñas. */
  mobileOpen: boolean
  onCloseMobile: () => void
}

export function Sidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  return (
    <aside
      id="sidebar-principal"
      className={cx(
        styles.sidebar,
        collapsed && styles.collapsed,
        mobileOpen && styles.mobileOpen,
      )}
    >
      <div className={styles.header}>
        <Logo size="sm" className={styles.logo} />
        <button
          type="button"
          className={cx(styles.iconButton, styles.closeButton)}
          onClick={onCloseMobile}
          aria-label="Cerrar menú"
        >
          <X size={18} />
        </button>
      </div>

      {/* Eco del corte diagonal de la barra inferior del logo. */}
      <span className={styles.brandRule} aria-hidden />

      <nav className={styles.nav} aria-label="Módulos">
        <p className={styles.navHeading}>Módulos</p>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={onCloseMobile}
                  title={collapsed ? item.label : undefined}
                  className={({ isActive }) =>
                    cx(styles.link, isActive && styles.linkActive)
                  }
                >
                  <Icon className={styles.linkIcon} size={20} aria-hidden />
                  <span className={styles.linkLabel}>{item.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <span className={styles.footerText}>
          Trazabilidad de órdenes
          <span className={cx(styles.footerVersion, 'tabular')}>v0.1</span>
        </span>
        <button
          type="button"
          className={cx(styles.iconButton, styles.collapseButton)}
          onClick={onToggleCollapse}
          aria-label={
            collapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'
          }
          title={collapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>
    </aside>
  )
}
