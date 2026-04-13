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
      <span className={styles.eyebrow}>— Today's Selection —</span>
      <h1 className={styles.title}>The Menu</h1>
      <p className={workStyles.intro}>
        Four case studies from an AI-directed design practice. Each one illustrates a different angle of the work — strategy, systems, execution, and real-world proof.
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
