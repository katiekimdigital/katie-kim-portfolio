import { useState } from 'react'
import { MENU_ITEMS } from '../../../data/menu'
import MenuItem from '../../MenuItem/MenuItem'
import CaseStudyModal from '../../CaseStudyModal/CaseStudyModal'
import styles from '../Panel.module.css'
import workStyles from './WorkPanel.module.css'

export default function WorkPanel() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— Selected Work —</span>
      <h1 className={styles.title}>Case Studies</h1>
      <p className={workStyles.intro}>
        Eight projects across enterprise, freelance, and self-initiated work — real engagements, real brands, and concept work that demonstrates methodology.
      </p>

      <div className={workStyles.list}>
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>

      <CaseStudyModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}
