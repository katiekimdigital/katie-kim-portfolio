import { useState } from "react";
import { MENU_ITEMS } from "../data/menu";
import MenuItem from "./MenuItem";
import CaseStudyModal from "./CaseStudyModal";
import styles from "./MenuShell.module.css";

export default function MenuShell() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={styles.shell}>
      <header className={styles.shellHeader}>
        <span className={styles.eyebrow}>Portfolio — Vol. 01</span>
        <h1 className={styles.title}>
          Today's <em>Selection</em>
        </h1>
        <p className={styles.subtitle}>
          Four case studies from an AI-directed design practice. 
          Each one illustrates a different angle of the work — strategy, 
          systems, execution, and real-world proof.
        </p>
      </header>

      <div className={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>

      <footer className={styles.shellFooter}>
        <span>Katie Kim</span>
        <span>AI-Directed Design Strategist · Sydney</span>
      </footer>

      <CaseStudyModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
