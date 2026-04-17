import { useState, useCallback } from 'react'
import styles from './Cover.module.css'

export default function Cover({ onOpen }) {
  const [animating, setAnimating] = useState(false)

  const handleOpen = useCallback(() => {
    if (animating) return
    setAnimating(true)
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
          <p className={styles.est}>— Sydney, Australia —</p>
          <p className={styles.tap}>click anywhere to enter</p>
          <button className={styles.openBtn} onClick={handleOpen}>
            View Work →
          </button>
        </div>
      </div>
    </div>
  )
}
