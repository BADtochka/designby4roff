import { Translation } from '@/i18n/i18n-types';
import { JSX } from 'react';
import { StringDate } from './StringDate';

export type CasesCategory = 'product' | 'game';
export type Cases = {
  product: Record<ProductKeys, CaseData>;
  game: Record<GameKeys, CaseData>;
};
export type ProductKeys = keyof Translation['blocks']['casesList']['product'];
export type GameKeys = keyof Translation['blocks']['casesList']['game'];
export type CaseKeys = ProductKeys | GameKeys;
export type CaseData = {
  image: string;
  startDate: StringDate;
  endDate?: StringDate;
  page: JSX.Element;
  background?: string;
  borderColor?: string;
  scheme?: 'dark' | 'light';
};

export type SelectedCategoryKeys = keyof Cases[CasesCategory];

export type Experiences = Record<string, ExperienceData>;
export type ExpericenceKeys = keyof Translation['blocks']['experienceList'];

export interface ExperienceData extends Omit<CaseData, 'page'> {
  post: string;
}
