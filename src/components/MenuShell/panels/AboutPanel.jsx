import styles from '../Panel.module.css'

export default function AboutPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— About —</span>
      <h1 className={styles.title}>The Work Behind the Work</h1>
    <div className={styles.columns}>
  <p>
    <span className={styles.dropCap}>I</span>'ve spent the better half of a decade not designing how things look — but how they work on people. Behavioural psychology meets web architecture. I'm a behaviour-science obsessed creative technologist who applies cognitive psychology to how people navigate, engage with, and respond to digital content.
  </p>
  <p>
    Designing the systems, structures, and stories that shape what users do next. Not by chance, but by design.
  </p>
  <p>
    It's the micro details that shape your experience. The nudge you didn't notice. The flow that felt effortless. The structure that quietly did the thinking for you.
  </p>
  <p>
    Eight years of that, mostly at enterprise scale and fast-growing startups. Based in APAC, working across 13 countries — I led web operations at Cochlear, built content governance frameworks that hold under real-world complexity, and designed digital ecosystems that serve diverse audiences across cultures, languages, and regulatory environments.
  </p>
  <p>
    Now I bring the same obsession to smaller, sharper work. AI-directed content systems. Web experiences that convert because they're designed to. A ceremonial matcha brand I built from zero to prove the methodology works in the wild.
  </p>
  <p>
    Browse the case studies. Or go straight to Contact — I take on a small number of engagements each quarter so every project gets proper attention.
  </p>
</div>
      <p className={styles.signature}>Katie</p>
    </div>
  )
}
