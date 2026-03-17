import { useState, useRef } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import BottomTabBar from '../BottomTabBar/BottomTabBar'
import AboutPanel from '../panels/AboutPanel'
import WorkPanel from '../panels/WorkPanel'
import SkillsPanel from '../panels/SkillsPanel'
import BeyondPanel from '../panels/BeyondPanel'
import ContactPanel from '../panels/ContactPanel'
import styles from './MenuShell.module.css'

const PANELS = {
  about: AboutPanel,
  work: WorkPanel,
  skills: SkillsPanel,
  beyond: BeyondPanel,
  contact: ContactPanel,
}

export default function MenuShell({ activeTab, onTabChange }) {
  const [displayedTab, setDisplayedTab] = useState(activeTab)
  const [transitioning, setTransitioning] = useState(false)
  const prevTabRef = useRef(activeTab)

  const handleTabChange = (newTab) => {
    if (newTab === prevTabRef.current) return
    setTransitioning(true)

    setTimeout(() => {
      setDisplayedTab(newTab)
      prevTabRef.current = newTab
      onTabChange(newTab)
      setTransitioning(false)
    }, 150)
  }

  const ActivePanel = PANELS[displayedTab]

  return (
    <div className={styles.shell}>
      <Sidebar activeTab={displayedTab} onTabChange={handleTabChange} />
      <main
        className={`${styles.content} ${transitioning ? styles.fadeOut : styles.fadeIn}`}
        key={displayedTab}
      >
        <ActivePanel />
      </main>
      <BottomTabBar activeTab={displayedTab} onTabChange={handleTabChange} />
    </div>
  )
}
