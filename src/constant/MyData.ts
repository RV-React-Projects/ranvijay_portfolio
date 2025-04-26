import moment from 'moment';

export const DATE_FORMATE = 'DD/MM/YYYY';

export const START_DATE = '28/09/2021';
export const START_DATE_FORMATE = moment(START_DATE, DATE_FORMATE);
export const TODAY_DATE_FORMATE = moment().format(DATE_FORMATE);

export const FIRST_NAME = 'Ranvijay';
export const MIDDLE_NAME = 'Kumar';
export const LAST_NAME = 'Singh';
export const FULL_NAME = `${FIRST_NAME} ${MIDDLE_NAME} ${LAST_NAME}`;
export const EMAIL = 'ranvijaychouhan12@gmail.com';

export const LINKEDIN_URL =
  'https://www.linkedin.com/in/ranvijay-kumar-singh-h-3a29b4152/';
export const GITHUB_URL = 'https://github.com/RanvijayChouhan12/';
