import styles from '../Panel.module.css'

export default function AboutPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— The Café —</span>
      <h1 className={styles.title}>A Letter From the Self-Taught Barista</h1>
    <div className={styles.columns}>
  <p>
    <span className={styles.dropCap}>W</span>elcome to Katie's Portfolio Café! As a self-proclaimed barista, the menu rotates each season. This season's specialty is a blend of case studies — each one a different lens on how I work: strategy, systems, craft, proof.
  </p>
  <p>
    I've spent the better half of a decade not designing how things look — but how they work on people. Behavioural psychology meets web architecture. I'm a behaviour-science obsessed creative technologist who applies cognitive psychology to how people navigate, engage with, and respond to digital content. Designing the systems, structures, and stories that shape what users do next. Not by chance, but by design.
  </p>
  <p>
    It's the micro details that shape your experience. The nudge you didn't notice. The flow that felt effortless. The structure that quietly did the thinking for you.
  </p>
  <p>
    Eight years of that, mostly at enterprise scale and fast-growing startups. Based in APAC, working across 13 countries — I pioneered content governance, scaled web design systems that convert, and supported multi-language ecosystems. The kind of complexity that breaks if you don't build it right.
  </p>
  <p>
    Now I bring the same obsession to smaller, sharper work. AI-directed content systems. Web experiences that convert because they're designed to. A ceremonial matcha brand I built from zero to prove the methodology works in the wild.
  </p>
  <p>
    Browse the menu. Or skip straight to Contact and let's collaborate to build your own kind of brew.
  </p>
</div>
      <p className={styles.signature}>Katie</p>
    </div>
  )
}
