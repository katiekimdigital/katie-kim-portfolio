import styles from './ContactPanel.module.css'

const LINKS = [
  { label: 'Contra', href: '#', primary: true },
  { label: 'GitHub', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Say Hello', href: 'mailto:hello@katiekim.dev' },
]

export default function ContactPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>No. 05 — Contact</p>
        <h2 className={styles.headline}>
          <span className={styles.line1}>Let's Make Something</span>
          <span className={styles.together}>Together</span>
        </h2>
        <p className={styles.body}>
          Available for freelance projects, consulting, and collaborations. Based in Sydney — working globally.
        </p>
        <div className={styles.buttons}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.btn} ${link.primary ? styles.primary : ''}`}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className={styles.colophon}>hand-coded with matcha & too much code</p>
    </div>
  )
}
