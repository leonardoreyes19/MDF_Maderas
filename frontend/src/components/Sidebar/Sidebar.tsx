import { LogOut, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../config/navigation'
import { Logo } from '../Logo/Logo'
import { cx } from '../../utils/cx'
import styles from './Sidebar.module.css'

type SidebarProps = {
  /** Modo solo íconos en escritorio. */
  collapsed: boolean
  /** Cajón abierto en pantallas pequeñas. */
  mobileOpen: boolean
  onCloseMobile: () => void
  /** Nombre visible de la sesión simulada. */
  userName: string
  onSignOut: () => void
}

export function Sidebar({
  collapsed,
  mobileOpen,
  onCloseMobile,
  userName,
  onSignOut,
}: SidebarProps) {
  const initials = userName.trim().slice(0, 2).toUpperCase()

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
                  aria-label={item.label}
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
        <div
          className={styles.profile}
          title={collapsed ? `${userName} · Usuario` : undefined}
        >
          <span className={styles.avatar} aria-hidden>
            {initials}
          </span>
          {/* Colapsada se oculta a la vista, pero sigue disponible para
              lectores de pantalla (ver .profileText en el CSS). */}
          <span className={styles.profileText}>
            <span className={styles.profileName}>{userName}</span>
            <span className={styles.profileRole}>Usuario</span>
          </span>
        </div>

        <button
          type="button"
          className={styles.signOut}
          onClick={onSignOut}
          aria-label="Cerrar sesión"
          title={collapsed ? 'Cerrar sesión' : undefined}
        >
          <LogOut className={styles.signOutIcon} size={18} aria-hidden />
          <span className={styles.signOutLabel}>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  )
}
