import Polaroid from '../shared/Polaroid'
import styles from './WorkPanel.module.css'

const PROJECTS = [
  {
    title: 'Nudge',
    type: 'Dashboard',
    subtitle: 'Behavioural UX Audit',
    rotation: -2,
  },
  {
    title: 'Flow',
    type: 'Case Study',
    subtitle: 'AI Content Workflow',
    rotation: 1.5,
    stat: '14h → 4h/week',
  },
  {
    title: 'Clarity',
    type: 'System',
    subtitle: 'Design System',
    rotation: -1,
  },
  {
    title: 'Namisan Matcha',
    type: 'Brand',
    rotation: 2.5,
    image: '/images/namisan-project.jpg',
    borderColor: 'var(--matcha-mid)',
  },
  {
    title: 'Cochlear',
    type: 'Enterprise',
    subtitle: 'Global & APAC Lead',
    rotation: -0.5,
  },
]

export default function WorkPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>No. 02 — Work</p>
        <h2 className={styles.headline}>Selected Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <Polaroid
              key={project.title}
              title={project.title}
              type={project.type}
              stat={project.stat}
              image={project.image}
              rotation={project.rotation}
              borderColor={project.borderColor}
            >
              {project.subtitle && (
                <span className={styles.subtitle}>{project.subtitle}</span>
              )}
            </Polaroid>
          ))}
        </div>
      </div>
    </div>
  )
}
