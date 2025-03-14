import { Translation } from '@/i18n/i18n-types';
import { StringDate } from './StringDate';

export type Cases = Record<string, CaseData>;
export type CaseKeys = keyof Translation['blocks']['casesList'];

export type CaseData = {
  image: string;
  startDate: StringDate;
  endDate?: StringDate;
};

export type Experiences = Record<string, ExperienceData>;
export type ExpericenceKeys = keyof Translation['blocks']['experienceList'];

export interface ExperienceData extends CaseData {
  post: string;
}
