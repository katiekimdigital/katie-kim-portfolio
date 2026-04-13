import styles from '../Panel.module.css'

const SKILL_GROUPS = [
  {
    label: 'Strategy',
    items: [
      { title: 'AI Direction', desc: 'Architecting human-in-the-loop workflows where AI handles execution and I direct strategy.' },
      { title: 'Brand Systems', desc: 'Voice guidelines, design tokens, and component libraries that scale without losing identity.' },
    ],
  },
  {
    label: 'Craft',
    items: [
      { title: 'Web Design & Dev', desc: 'React, Vite, CSS Modules. Landing pages, marketing sites, and interactive experiences.' },
      { title: 'Content Architecture', desc: 'Eight years of enterprise CMS work across 13+ markets. Sitecore, headless, hybrid.' },
    ],
  },
  {
    label: 'Thinking',
    items: [
      { title: 'Behavioural UX', desc: 'Designing with psychology in mind — anchoring, cognitive load, choice architecture.' },
      { title: 'Systems Design', desc: 'Breaking complex operations into modular, automatable, measurable parts.' },
    ],
  },
]

export default function SkillsPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— The Ingredients —</span>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.body}>
        What I bring to the table — grouped by how I use it. Strategy directs the work, craft executes it, thinking shapes the decisions in between.
      </p>

      {SKILL_GROUPS.map((group) => (
        <div key={group.label} style={{ marginTop: 48 }}>
          <p className={styles.sectionLabel}>{group.label}</p>
          <div className={styles.gridTwo} style={{ marginTop: 16 }}>
            {group.items.map((item) => (
              <div key={item.title}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
