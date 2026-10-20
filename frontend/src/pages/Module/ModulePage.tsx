import { useLocation } from 'react-router-dom'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { NAV_ITEMS } from '../../config/navigation'
import { PackageOpen } from 'lucide-react'
import styles from './ModulePage.module.css'

/**
 * Página genérica para los cinco módulos: toma su contenido del arreglo de
 * navegación según la ruta activa, así renombrar un módulo sigue siendo un
 * cambio en un solo lugar.
 */
export function ModulePage() {
  const location = useLocation()
  const item = NAV_ITEMS.find((navItem) => navItem.path === location.pathname)
  const Icon = item?.icon ?? PackageOpen

  return (
    <div className={styles.panel}>
      <EmptyState
        icon={Icon}
        title="Módulo en construcción"
        description={
          item?.description ??
          'Esta sección estará disponible en una próxima entrega.'
        }
      />
    </div>
  )
}
