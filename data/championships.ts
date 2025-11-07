export interface GameResult {
  game: number;
  score: string;
  result: '승' | '패';
  venue: string;
}

export interface Championship {
  year: number;
  opponent: string;
  record: string;
  mvp?: string;
  slogan?: string;
  games?: GameResult[];
  highlights?: string[];
  keyPlayers?: string[];
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
    games: [
      { game: 1, score: 'LG 3-2 한화', result: '승', venue: '잠실야구장' },
      { game: 2, score: 'LG 5-4 한화', result: '승', venue: '잠실야구장' },
      { game: 3, score: 'LG 2-4 한화', result: '패', venue: '대전한화생명이글스파크' },
      { game: 4, score: 'LG 6-3 한화', result: '승', venue: '대전한화생명이글스파크' },
      { game: 5, score: 'LG 4-1 한화', result: '승', venue: '잠실야구장' },
    ],
    highlights: [
      '통산 네 번째 우승 달성 (1990, 1994, 2023, 2025)',
      '김현수 시리즈 MVP 수상',
      '2년 연속 한국시리즈 우승',
      '정규시즌 1위로 직행한 후 우승',
    ],
    keyPlayers: [
      '김현수 (MVP)',
      '안더스 톨허스트 (외국인 투수)',
      '오스틴 딘',
      '박건우',
    ],
  },
];

