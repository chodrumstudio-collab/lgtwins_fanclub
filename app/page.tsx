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
                
                {championship.games && championship.games.length > 0 && (
                  <div className={styles.games}>
                    <h3 className={styles.gamesTitle}>경기 결과</h3>
                    <div className={styles.gamesList}>
                      {championship.games.map((game, idx) => (
                        <div key={idx} className={styles.gameItem}>
                          <span className={styles.gameNumber}>경기 {game.game}</span>
                          <span className={styles.gameScore}>{game.score}</span>
                          <span className={`${styles.gameResult} ${game.result === '승' ? styles.win : styles.loss}`}>
                            {game.result}
                          </span>
                          <span className={styles.gameVenue}>{game.venue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {championship.highlights && championship.highlights.length > 0 && (
                  <div className={styles.highlights}>
                    <h3 className={styles.highlightsTitle}>하이라이트</h3>
                    <ul className={styles.highlightsList}>
                      {championship.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {championship.keyPlayers && championship.keyPlayers.length > 0 && (
                  <div className={styles.keyPlayers}>
                    <h3 className={styles.keyPlayersTitle}>주요 선수</h3>
                    <div className={styles.keyPlayersList}>
                      {championship.keyPlayers.map((player, idx) => (
                        <span key={idx} className={styles.playerTag}>{player}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

