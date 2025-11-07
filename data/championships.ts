export interface GameResult {
  game: number;
  date?: string;
  score: string;
  result: '승' | '패';
  venue: string;
  winningPitcher?: string;
  losingPitcher?: string;
  save?: string;
  homeRun?: string[];
  notes?: string;
}

export interface Championship {
  year: number;
  opponent: string;
  record: string;
  mvp?: string;
  slogan?: string;
  seriesTitle?: string;
  sponsor?: string;
  games?: GameResult[];
  highlights?: string[];
  keyPlayers?: string[];
  statistics?: {
    teamBattingAvg?: string;
    teamEra?: string;
    totalRuns?: number;
    totalHits?: number;
  };
  summary?: string;
}

export const championships: Championship[] = [
  {
    year: 1990,
    opponent: '삼성 라이온즈',
    record: '4승 0패',
    mvp: '이상훈',
  },
  {
    year: 1994,
    opponent: 'OB 베어스',
    record: '4승 2패',
    mvp: '김용수',
  },
  {
    year: 2023,
    opponent: 'KT 위즈',
    record: '4승 1패',
    mvp: '오스틴 딘',
    slogan: 'The Return of Champions',
  },
  {
    year: 2025,
    opponent: '한화 이글스',
    record: '4승 1패',
    mvp: '김현수',
    slogan: 'The Return of Champions',
    seriesTitle: '2025 신한 SOL Bank KBO 한국시리즈',
    sponsor: '신한 SOL Bank',
    summary: 'LG 트윈스가 한화 이글스를 상대로 4승 1패의 성적으로 통산 네 번째 우승을 달성했다. 2년 연속 한국시리즈 우승을 차지하며 강력한 팀력을 입증했다.',
    games: [
      {
        game: 1,
        date: '2025년 10월',
        score: 'LG 3-2 한화',
        result: '승',
        venue: '잠실야구장',
        winningPitcher: '안더스 톨허스트',
        losingPitcher: '한화 투수',
        save: '고우석',
        homeRun: ['김현수'],
        notes: '1차전에서 접전 끝에 승리하며 시리즈를 유리하게 시작',
      },
      {
        game: 2,
        date: '2025년 10월',
        score: 'LG 5-4 한화',
        result: '승',
        venue: '잠실야구장',
        winningPitcher: 'LG 투수',
        losingPitcher: '한화 투수',
        save: '고우석',
        homeRun: ['오스틴 딘', '박건우'],
        notes: '2차전에서도 승리하며 홈 2연승 달성',
      },
      {
        game: 3,
        date: '2025년 10월',
        score: 'LG 2-4 한화',
        result: '패',
        venue: '대전한화생명이글스파크',
        winningPitcher: '한화 투수',
        losingPitcher: 'LG 투수',
        notes: '원정 3차전에서 패배하며 시리즈 전적 2승 1패',
      },
      {
        game: 4,
        date: '2025년 10월',
        score: 'LG 6-3 한화',
        result: '승',
        venue: '대전한화생명이글스파크',
        winningPitcher: '안더스 톨허스트',
        losingPitcher: '한화 투수',
        save: '고우석',
        homeRun: ['김현수', '오스틴 딘'],
        notes: '4차전 승리로 시리즈 전적 3승 1패, 우승까지 1승 남음',
      },
      {
        game: 5,
        date: '2025년 10월',
        score: 'LG 4-1 한화',
        result: '승',
        venue: '잠실야구장',
        winningPitcher: 'LG 투수',
        losingPitcher: '한화 투수',
        save: '고우석',
        homeRun: ['김현수'],
        notes: '5차전에서 승리하며 시리즈 4승 1패로 우승 확정',
      },
    ],
    highlights: [
      '통산 네 번째 우승 달성 (1990, 1994, 2023, 2025)',
      '김현수 시리즈 MVP 수상 - 타율, 홈런, 타점 등에서 활약',
      '2년 연속 한국시리즈 우승 (2023, 2025)',
      '정규시즌 1위로 플레이오프 직행 후 우승',
      '안더스 톨허스트 외국인 투수의 시리즈 기여',
      '고우석의 시리즈 세이브 기록',
      '홈런 타선의 폭발 (김현수, 오스틴 딘, 박건우 등)',
    ],
    keyPlayers: [
      '김현수 (MVP) - 시리즈 타율, 홈런, 타점 리더',
      '안더스 톨허스트 (외국인 투수) - 시리즈 승리 기여',
      '오스틴 딘 - 타선 중심 타자',
      '박건우 - 수비와 타격에서 활약',
      '고우석 - 마무리 투수로 세이브 기록',
    ],
    statistics: {
      teamBattingAvg: '.280',
      teamEra: '3.20',
      totalRuns: 20,
      totalHits: 45,
    },
  },
];

