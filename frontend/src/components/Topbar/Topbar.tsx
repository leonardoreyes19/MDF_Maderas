import { LogOut, Menu } from 'lucide-react'
import { Button } from '../Button/Button'
import styles from './Topbar.module.css'

type TopbarProps = {
  title: string
  userName: string
  onOpenMenu: () => void
  onSignOut: () => void
  mobileOpen: boolean
}

export function Topbar({
  title,
  userName,
  onOpenMenu,
  onSignOut,
  mobileOpen,
}: TopbarProps) {
  const initials = userName.trim().slice(0, 2).toUpperCase()

  return (
    <header className={styles.topbar}>
      <button
        type="button"
        className={styles.menuButton}
        onClick={onOpenMenu}
        aria-label="Abrir menú de módulos"
        aria-expanded={mobileOpen}
        aria-controls="sidebar-principal"
      >
        <Menu size={20} />
      </button>

      <h1 className={styles.title}>{title}</h1>

      <div className={styles.user}>
        <span className={styles.avatar} aria-hidden>
          {initials}
        </span>
        <span className={styles.userName}>{userName}</span>
      </div>

      <Button variant="ghost" onClick={onSignOut} className={styles.signOut}>
        <LogOut size={16} aria-hidden />
        <span className={styles.signOutLabel}>Cerrar sesión</span>
      </Button>
    </header>
  )
}
