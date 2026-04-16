import styles from '../Panel.module.css'

export default function AboutPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— The Café —</span>
      <h1 className={styles.title}>A Letter From the Self-Taught Barista</h1>
     <div className={styles.columns}>
  <p>
    <span className={styles.dropCap}>W</span>elcome to the Katie's Portfolio café. The menu changes with what I'm making — right now it's mostly case studies, four pieces showing how I think about design, systems, and the behaviour they shape.
  </p>
  <p>
    <em>Most people design how things look. I design how they think.</em> I'm Katie — a behaviour-science led creative technologist. I apply cognitive psychology to how people navigate, engage with, and respond to digital content — designing the systems, structures, and stories that shape what users do next. Not by chance, but by design.
  </p>
  <p>
    For 8+ years that's meant operating at enterprise scale: leading APAC web operations at Cochlear across 13+ countries, building content governance frameworks that hold under real-world complexity, and designing digital ecosystems that serve diverse audiences across cultures, languages, and contexts.
  </p>
  <p>
    The same rigour goes into everything I build now — AI-enhanced content workflows, premium web templates, Namisan Matcha. Precision, behavioural intent, and a deep commitment to keeping humans at the centre of every digital decision.
  </p>
  <p>
    Order the menu to see recent work. Or design your own drink — I take on a small number of client engagements each quarter.
  </p>
</div>
      <p className={styles.signature}>Katie</p>
    </div>
  )
}
