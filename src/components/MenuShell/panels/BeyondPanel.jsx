import styles from '../Panel.module.css'

const INTERESTS = [
  { title: 'Ceremonial matcha', desc: 'Running Namisan, a Shopify-based ceremonial matcha brand I started to test AI-directed brand building in the wild.' },
  { title: 'Japanese pottery', desc: 'Air-dry clay at home, wheel-thrown at the studio. There\'s something about the iteration of throwing that mirrors how I prototype digital work.' },
  { title: 'Cinematography', desc: 'Creating videos and crafting cinematic short films to observe my visual creative growth — on YouTube @katiekimushi. Mostly travels, my love for Japan, and day-to-day life.' },
  { title: 'Language studies', desc: 'Studying conversational Japanese vocabulary and grammar through immersive learning, while picking up some Cantonese and Vietnamese through family.' },
  { title: 'Behavioural reading', desc: 'Kahneman, Ariely, Thaler — anything where the science of thinking meets everyday design decisions.' },
  { title: 'V60 & espresso', desc: 'Manual brewing as a ritual. The precision, the variables, the feedback loop — it\'s not so different from design iteration.' },
]

export default function BeyondPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.eyebrow}>— Off Hours —</span>
      <h1 className={styles.title}>Beyond</h1>
      <p className={styles.body}>
        The rest of the story. These are the things I do when I'm not at a screen — and often the reason the work on screen ends up the way it does.
      </p>

      <div className={styles.gridTwo}>
        {INTERESTS.map((item) => (
          <div key={item.title}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
