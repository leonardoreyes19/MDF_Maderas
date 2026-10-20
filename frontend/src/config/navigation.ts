import {
  Boxes,
  ClipboardList,
  Factory,
  LineChart,
  Truck,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  /** Identificador estable; no cambia aunque se renombre el módulo. */
  id: string
  /** Nombre visible en la barra lateral y en el título de la barra superior. */
  label: string
  /** Ruta de la aplicación. */
  path: string
  icon: LucideIcon
  /** Línea de apoyo del estado vacío del módulo. */
  description: string
}

/**
 * ÚNICA fuente de verdad de la navegación.
 * Para renombrar un módulo o cambiar su ícono, edita solo este arreglo:
 * la barra lateral, el título de la barra superior y las rutas se generan
 * a partir de aquí.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    id: 'modulo-1',
    label: 'Módulo 1',
    path: '/modulo-1',
    icon: ClipboardList,
    description: 'Esta sección estará disponible en una próxima entrega.',
  },
  {
    id: 'modulo-2',
    label: 'Módulo 2',
    path: '/modulo-2',
    icon: Factory,
    description: 'Esta sección estará disponible en una próxima entrega.',
  },
  {
    id: 'modulo-3',
    label: 'Módulo 3',
    path: '/modulo-3',
    icon: Boxes,
    description: 'Esta sección estará disponible en una próxima entrega.',
  },
  {
    id: 'modulo-4',
    label: 'Módulo 4',
    path: '/modulo-4',
    icon: Truck,
    description: 'Esta sección estará disponible en una próxima entrega.',
  },
  {
    id: 'modulo-5',
    label: 'Módulo 5',
    path: '/modulo-5',
    icon: LineChart,
    description: 'Esta sección estará disponible en una próxima entrega.',
  },
]

/** Ruta a la que se entra después del inicio de sesión. */
export const DEFAULT_ROUTE = NAV_ITEMS[0].path
