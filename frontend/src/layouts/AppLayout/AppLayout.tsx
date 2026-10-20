import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Topbar } from '../../components/Topbar/Topbar'
import { NAV_ITEMS } from '../../config/navigation'
import { useAuth } from '../../context/useAuth'
import { cx } from '../../utils/cx'
import styles from './AppLayout.module.css'

/** Entre 900px y 1023px la barra lateral se muestra colapsada por defecto. */
const TABLET_QUERY = '(min-width: 900px) and (max-width: 1023.98px)'

function matchesTablet() {
  return (
    typeof window !== 'undefined' && window.matchMedia(TABLET_QUERY).matches
  )
}

export function AppLayout() {
  const { session, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(matchesTablet)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Al cruzar el breakpoint intermedio se aplica el estado por defecto.
  useEffect(() => {
    const query = window.matchMedia(TABLET_QUERY)
    const onChange = (event: MediaQueryListEvent) => setCollapsed(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // Esc cierra el cajón en pantallas pequeñas.
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const activeItem = NAV_ITEMS.find((item) => item.path === location.pathname)

  const handleSignOut = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className={styles.shell}>
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((value) => !value)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={cx(styles.overlay, mobileOpen && styles.overlayVisible)}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <div className={cx(styles.main, collapsed && styles.mainCollapsed)}>
        <Topbar
          title={activeItem?.label ?? 'Plataforma'}
          userName={session?.displayName ?? 'Usuario'}
          onOpenMenu={() => setMobileOpen(true)}
          onSignOut={handleSignOut}
          mobileOpen={mobileOpen}
        />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
