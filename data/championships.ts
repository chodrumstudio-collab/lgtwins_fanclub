export interface Championship {
  year: number;
  opponent: string;
  record: string;
  mvp?: string;
  slogan?: string;
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
  },
];

