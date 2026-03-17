import styles from './SkillsPanel.module.css'

const SKILLS = [
  // matcha variant
  { label: 'AI Fluency', variant: 'matcha' },
  { label: 'Human-in-the-Loop Design', variant: 'matcha' },
  { label: 'Behavioural UX', variant: 'matcha' },
  { label: 'AI-Augmented Workflows', variant: 'matcha' },
  // accent variant
  { label: 'Content Architecture', variant: 'accent' },
  { label: 'Design Systems', variant: 'accent' },
  { label: 'Enterprise Web Ops', variant: 'accent' },
  { label: 'Information Architecture', variant: 'accent' },
  // default variant
  { label: 'React', variant: 'default' },
  { label: 'CSS Modules', variant: 'default' },
  { label: 'Vite', variant: 'default' },
  { label: 'Figma', variant: 'default' },
  { label: 'Sanity CMS', variant: 'default' },
  { label: 'Vercel', variant: 'default' },
  { label: 'GROQ', variant: 'default' },
  { label: 'Accessibility', variant: 'default' },
  { label: 'Semantic HTML', variant: 'default' },
  { label: 'Cross-functional Collaboration', variant: 'default' },
  { label: 'Stakeholder Communication', variant: 'default' },
  { label: 'Workshop Facilitation', variant: 'default' },
]

export default function SkillsPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>No. 03 — Skills</p>
        <h2 className={styles.headline}>Things I'm Good At</h2>
        <div className={styles.tagCloud}>
          {SKILLS.map((skill) => (
            <span
              key={skill.label}
              className={`${styles.tag} ${styles[skill.variant]}`}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
