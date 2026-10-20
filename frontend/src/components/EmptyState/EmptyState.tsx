import type { LucideIcon } from 'lucide-react'
import styles from './EmptyState.module.css'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description?: string
}

export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} size={72} strokeWidth={1.25} aria-hidden />
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      <span className={styles.accent} aria-hidden />
    </div>
  )
}
