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
/** Por debajo de 900px la barra lateral es un cajón sobre el contenido. */
const MOBILE_QUERY = '(max-width: 899.98px)'

function matches(query: string) {
  return typeof window !== 'undefined' && window.matchMedia(query).matches
}

export function AppLayout() {
  const { session, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(() => matches(TABLET_QUERY))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => matches(MOBILE_QUERY))

  // Al cruzar el breakpoint intermedio se aplica el estado por defecto.
  useEffect(() => {
    const query = window.matchMedia(TABLET_QUERY)
    const onChange = (event: MediaQueryListEvent) => setCollapsed(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // El botón de menú colapsa en escritorio y abre el cajón en móvil.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
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

  const handleToggleMenu = () => {
    if (isMobile) {
      setMobileOpen((value) => !value)
    } else {
      setCollapsed((value) => !value)
    }
  }

  const menuExpanded = isMobile ? mobileOpen : !collapsed
  const menuLabel = isMobile
    ? mobileOpen
      ? 'Cerrar menú de módulos'
      : 'Abrir menú de módulos'
    : collapsed
      ? 'Expandir barra lateral'
      : 'Colapsar barra lateral'

  return (
    <div className={styles.shell}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        userName={session?.displayName ?? 'Usuario'}
        onSignOut={handleSignOut}
      />

      <div
        className={cx(styles.overlay, mobileOpen && styles.overlayVisible)}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <div className={cx(styles.main, collapsed && styles.mainCollapsed)}>
        <Topbar
          title={activeItem?.label ?? 'Plataforma'}
          onToggleMenu={handleToggleMenu}
          menuLabel={menuLabel}
          menuExpanded={menuExpanded}
        />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
