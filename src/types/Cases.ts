import { StringDate } from './StringDate';

export type CasesCategory = 'product' | 'game';
export type CaseData = {
  image: string;
  startDate: StringDate;
  endDate?: StringDate;
  background?: string;
  borderColor?: string;
  scheme?: 'dark' | 'light';
};

export type Experiences = Record<string, ExperienceData>;

export interface ExperienceData extends Pick<CaseData, 'image' | 'startDate' | 'endDate'> {
  post: string;
}
