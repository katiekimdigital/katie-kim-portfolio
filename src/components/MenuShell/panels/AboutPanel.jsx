import styles from '../Panel.module.css'

export default function AboutPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— The Café —</span>
      <h1 className={styles.title}>A Letter From the Editor</h1>
      <div className={styles.columns}>
        <p>
          <span className={styles.dropCap}>W</span>elcome to the café. The menu changes with what I'm making. Right now, it's mostly case studies — four pieces showing how I direct AI as a production team while the strategic work stays human.
        </p>
        <p>
          I've spent the better part of a decade building digital systems that don't just work — they work the way people think. Enterprise platforms. Content architectures. Workflows that scale without losing their soul.
        </p>
        <p>
          The shift recently is how the work gets done. I don't build alone anymore. I direct AI agents as a production team, while keeping the strategic decisions — brand voice, system design, judgment — exactly where they belong: with me.
        </p>
        <p>
          Sydney-based, working remotely with founders and teams who want the speed of AI without the blandness of generic AI output. The craft still comes first. Everything else is leverage.
        </p>
        <p>
          Order the menu to see recent work. Or design your own drink — I take on a small number of client engagements each quarter.
        </p>
      </div>
      <p className={styles.signature}>Katie</p>
    </div>
  )
}
