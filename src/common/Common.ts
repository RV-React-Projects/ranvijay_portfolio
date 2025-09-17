import { AllIcon } from '@data/AllIcon';

export type IconEntryType = (typeof AllIcon)[number];
export type IconNameType = IconEntryType['name'];

export function findIcon(name: IconNameType): IconEntryType | undefined {
  return AllIcon.find(icon => icon.name === name);
}
