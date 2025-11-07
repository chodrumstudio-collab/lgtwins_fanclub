import { championships } from '@/data/championships'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>LG Twins 우승 기록</h1>
        <div className={styles.championships}>
          {championships.map((championship) => (
            <div key={championship.year} className={styles.championshipCard}>
              <div className={styles.year}>{championship.year}</div>
              <div className={styles.details}>
                <h2 className={styles.opponent}>
                  {championship.opponent} 상대 {championship.record}
                </h2>
                {championship.mvp && (
                  <p className={styles.mvp}>MVP: {championship.mvp}</p>
                )}
                {championship.slogan && (
                  <p className={styles.slogan}>"{championship.slogan}"</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

