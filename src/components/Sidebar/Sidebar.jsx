import styles from './Sidebar.module.css'

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ activeTab, onTabChange, onGoHome }) {
  return (
    <nav className={styles.sidebar}>
      <button
        className={styles.brand}
        onClick={onGoHome}
        aria-label="Return to cover"
      >
        <span className={styles.brandName}>KK</span>
      </button>
      <ul className={styles.tabList}>
        {TABS.map((tab) => (
          <li key={tab.id}>
            <button
              className={`${styles.tab} ${styles[tab.id]} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => onTabChange(tab.id)}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          </li>
        ))}
        <li>
          <a
            href="https://kk-components-showcase.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.tab} ${styles.lab}`}
          >
            Lab ↗
          </a>
        </li>
      </ul>
    </nav>
  )
}
