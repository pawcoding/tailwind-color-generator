import { heroMoonSolid, heroSunSolid } from '@ng-icons/heroicons/solid';
import { ThemeOption } from '../../shared/types/theme';

export const THEME_OPTIONS: Array<ThemeOption> = [
  { value: 'light', label: 'theme.light', icon: heroSunSolid },
  { value: 'dark', label: 'theme.dark', icon: heroMoonSolid }
];
