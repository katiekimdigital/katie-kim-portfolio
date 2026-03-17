import styles from './Polaroid.module.css'

export default function Polaroid({ title, type, stat, image, rotation = 0, borderColor, children }) {
  const cardStyle = {
    transform: `rotate(${rotation}deg)`,
  }

  const borderStyle = borderColor ? { border: `1px solid ${borderColor}` } : {}

  return (
    <div className={styles.polaroid} style={{ ...cardStyle, ...borderStyle }}>
      <div className={styles.washiTape} />
      {image ? (
        <div className={styles.imageWrap}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderIcon}>✦</span>
        </div>
      )}
      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.type}>{type}</span>
        {stat && <span className={styles.stat}>{stat}</span>}
        {children}
      </div>
    </div>
  )
}
