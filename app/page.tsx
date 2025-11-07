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
                
                {championship.seriesTitle && (
                  <div className={styles.seriesInfo}>
                    <p className={styles.seriesTitle}>{championship.seriesTitle}</p>
                    {championship.sponsor && (
                      <p className={styles.sponsor}>스폰서: {championship.sponsor}</p>
                    )}
                  </div>
                )}

                {championship.summary && (
                  <div className={styles.summary}>
                    <p>{championship.summary}</p>
                  </div>
                )}

                {championship.games && championship.games.length > 0 && (
                  <div className={styles.games}>
                    <h3 className={styles.gamesTitle}>경기 결과</h3>
                    <div className={styles.gamesList}>
                      {championship.games.map((game, idx) => (
                        <div key={idx} className={styles.gameItem}>
                          <div className={styles.gameHeader}>
                            <span className={styles.gameNumber}>경기 {game.game}</span>
                            {game.date && <span className={styles.gameDate}>{game.date}</span>}
                            <span className={`${styles.gameResult} ${game.result === '승' ? styles.win : styles.loss}`}>
                              {game.result}
                            </span>
                          </div>
                          <div className={styles.gameScore}>{game.score}</div>
                          <div className={styles.gameDetails}>
                            <div className={styles.gameVenue}>📍 {game.venue}</div>
                            {game.winningPitcher && (
                              <div className={styles.gamePitcher}>승리투수: {game.winningPitcher}</div>
                            )}
                            {game.save && (
                              <div className={styles.gameSave}>세이브: {game.save}</div>
                            )}
                            {game.homeRun && game.homeRun.length > 0 && (
                              <div className={styles.gameHomeRun}>
                                홈런: {game.homeRun.join(', ')}
                              </div>
                            )}
                            {game.notes && (
                              <div className={styles.gameNotes}>{game.notes}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {championship.statistics && (
                  <div className={styles.statistics}>
                    <h3 className={styles.statisticsTitle}>시리즈 통계</h3>
                    <div className={styles.statisticsGrid}>
                      {championship.statistics.teamBattingAvg && (
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>팀 타율</span>
                          <span className={styles.statValue}>{championship.statistics.teamBattingAvg}</span>
                        </div>
                      )}
                      {championship.statistics.teamEra && (
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>팀 평균자책점</span>
                          <span className={styles.statValue}>{championship.statistics.teamEra}</span>
                        </div>
                      )}
                      {championship.statistics.totalRuns && (
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>총 득점</span>
                          <span className={styles.statValue}>{championship.statistics.totalRuns}점</span>
                        </div>
                      )}
                      {championship.statistics.totalHits && (
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>총 안타</span>
                          <span className={styles.statValue}>{championship.statistics.totalHits}개</span>
                        </div>
                      )}
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

