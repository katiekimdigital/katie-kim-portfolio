import { useState, useCallback } from 'react'
import styles from './Cover.module.css'

export default function Cover({ onOpen }) {
  const [animating, setAnimating] = useState(false)

  const handleOpen = useCallback(() => {
    if (animating) return
    setAnimating(true)
    // Fallback: call onOpen after 600ms regardless of animation event
    setTimeout(() => {
      onOpen()
    }, 600)
  }, [animating, onOpen])

  return (
    <div className={styles.cover} onClick={handleOpen} role="button" tabIndex={0}>
      <div className={`${styles.left} ${animating ? styles.curtainOut : ''}`}>
        <div className={styles.leftContent}>
          <h1 className={styles.name}>
            <span className={styles.firstName}>Katie</span>
            <span className={styles.lastName}>Kim</span>
          </h1>
          <p className={styles.tagline}>CREATIVE TECHNOLOGIST</p>
        </div>
      </div>

      <div className={styles.spine} />

      <div className={`${styles.right} ${animating ? styles.fadeIn : ''}`}>
        <div className={styles.rightContent}>
          <p className={styles.est}>— est. Sydney, 2026 —</p>
          <p className={styles.tap}>tap anywhere to open</p>
          <button className={styles.openBtn} onClick={handleOpen}>
            Open Menu →
          </button>
        </div>
        <p className={styles.cafeTag}>a café for the mind</p>
      </div>
    </div>
  )
}
