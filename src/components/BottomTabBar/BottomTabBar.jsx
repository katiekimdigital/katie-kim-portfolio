import styles from './BottomTabBar.module.css'

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
]

export default function BottomTabBar({ activeTab, onTabChange }) {
  return (
    <nav className={styles.bar}>
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${styles[tab.id]} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
          aria-current={activeTab === tab.id ? 'page' : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
