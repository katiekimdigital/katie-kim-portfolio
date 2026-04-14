import styles from './Sidebar.module.css'

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Menu' },
  { id: 'skills', label: 'Sides' },
  { id: 'beyond', label: 'Extras' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandName}>KK</span>
      </div>
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
      </ul>
    </nav>
  )
}
