import styles from './BeyondPanel.module.css'

const CARDS = [
  {
    title: 'Home Barista',
    emoji: '🍵',
    description: 'Matcha lattes, V60 pour-overs, and dreaming of opening a kissaten in Tokyo.',
    variant: 'matcha',
  },
  {
    title: 'Framer Components',
    emoji: '⚡',
    description: 'Building hover interactions for UI libraries on Contra.',
    variant: 'default',
  },
  {
    title: 'YouTube',
    emoji: '📹',
    description: 'Documenting the build at @katiekimushi.',
    variant: 'default',
  },
  {
    title: 'Travel & Cafés',
    emoji: '✈️',
    description: 'APAC explorer. Best work happens in good coffee shops.',
    variant: 'default',
  },
  {
    title: 'Reading',
    emoji: '📚',
    description: 'Systems thinking, cognitive science, design memoirs.',
    variant: 'default',
  },
  {
    title: 'Open Source',
    emoji: '🌿',
    description: 'Contributing to tools I actually use.',
    variant: 'default',
  },
]

export default function BeyondPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>No. 04 — Beyond</p>
        <h2 className={styles.headline}>When I'm Not at the Desk</h2>
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`${styles.card} ${card.variant === 'matcha' ? styles.matcha : styles.defaultCard}`}
            >
              <h3 className={styles.cardTitle}>
                {card.title} {card.emoji}
              </h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
