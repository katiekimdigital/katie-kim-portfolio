import styles from '../Panel.module.css'
import contactStyles from './ContactPanel.module.css'

const OFFERINGS = [
  { title: 'Landing pages & marketing sites', desc: 'From brief to deployed in 2–3 weeks. React/Vite or Webflow depending on what you need to maintain.' },
  { title: 'Design systems & component libraries', desc: 'Token-based, documented, and built to scale. Ideal for SaaS teams formalising their UI.' },
  { title: 'AI-directed content operations', desc: 'Setting up the agent workflows, brief templates, and approval systems you need to ship content at scale.' },
  { title: 'Strategic consulting', desc: 'For teams deciding how AI fits into their design or content operation. Half-day workshops or ongoing advisory.' },
]

export default function ContactPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— Made to Order —</span>
      <h1 className={styles.title}>Design a custom drink</h1>
      <p className={styles.body}>
        The menu shows finished work, but most of what I do is made to order. Tell me what you need brewed — I take on a small number of engagements each quarter so I can give each one proper attention.
      </p>

      <p className={styles.sectionLabel} style={{ marginTop: 48 }}>What's on offer</p>
      <div className={styles.gridTwo} style={{ marginTop: 16 }}>
        {OFFERINGS.map((item) => (
          <div key={item.title}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className={contactStyles.ctaBox}>
        <p className={contactStyles.ctaLabel}>Start the conversation</p>
        <p className={contactStyles.ctaBody}>
          Email works best for a proper intro. Tell me about the project, the timeline, and what success looks like to you.
        </p>
        <div className={contactStyles.links}>
          <a href="mailto:katiekimdigital@gmail.com" className={contactStyles.primaryLink}>
            katiekimdigital@gmail.com →
          </a>
          <a href="https://contra.com" target="_blank" rel="noreferrer" className={contactStyles.secondaryLink}>
            Contra profile →
          </a>
          <a href="https://youtube.com/@katiekimushi" target="_blank" rel="noreferrer" className={contactStyles.secondaryLink}>
            YouTube →
          </a>
        </div>
      </div>
    </div>
  )
}
