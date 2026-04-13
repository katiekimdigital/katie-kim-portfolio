import { useState } from "react";
import styles from "./MenuItem.module.css";

export default function MenuItem({ item, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={styles.item}
      onClick={() => onSelect(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(item)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.name} case study`}
    >
      <div className={styles.header}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.leader} aria-hidden="true" />
          <span className={styles.tag}>{item.tag}</span>
        </div>
        <p className={styles.tagline}>{item.tagline}</p>
      </div>

      <p className={styles.description}>{item.description}</p>

      <div className={styles.footer}>
        <span className={styles.meta}>{item.meta}</span>
        <span className={styles.viewCta}>
          {hovered ? "View case study →" : "Order"}
        </span>
      </div>
    </article>
  );
}
