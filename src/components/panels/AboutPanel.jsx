import styles from './AboutPanel.module.css'

export default function AboutPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>No. 01 — About</p>
        <h2 className={styles.headline}>A Letter From the Editor</h2>
        <div className={styles.body}>
          <p className={styles.dropCapPara}>
            I've spent the better part of a decade building digital systems that don't just work — they work the way people think. Enterprise platforms. Content architectures. Workflows that scale without losing their soul.
          </p>
          <p>
            The web is my medium, but systems thinking is my craft. I believe in semantic structures, intentional design, and the kind of technical empathy that comes from actually listening to how people work.
          </p>
          <p>
            My background spans enterprise operations, content strategy, and increasingly, AI integration. Not the buzzword kind — the kind that quietly improves workflows while respecting human expertise.
          </p>
          <p>
            Based in Sydney, I've worked with teams across APAC and beyond. When I'm not optimising pipelines I'm in a Tokyo kissaten thinking about how spaces shape the quality of our attention.
          </p>
        </div>
        <p className={styles.signature}>Katie Kim</p>
      </div>
    </div>
  )
}
