import Sidebar from '../Sidebar/Sidebar'
import AboutPanel from './panels/AboutPanel'
import WorkPanel from './panels/WorkPanel'
import SkillsPanel from './panels/SkillsPanel'
import BeyondPanel from './panels/BeyondPanel'
import ContactPanel from './panels/ContactPanel'
import styles from './MenuShell.module.css'

const PANELS = {
  about: AboutPanel,
  work: WorkPanel,
  skills: SkillsPanel,
  beyond: BeyondPanel,
  contact: ContactPanel,
}

export default function MenuShell({ activeTab, onTabChange }) {
  const ActivePanel = PANELS[activeTab] || AboutPanel

  return (
    <div className={styles.shell}>
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <main className={styles.content}>
        <ActivePanel />
      </main>
    </div>
  )
}
