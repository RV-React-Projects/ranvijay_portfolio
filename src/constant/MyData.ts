import moment from 'moment';
import { experienceData } from '@data/Experience';

export const DATE_FORMATE: string = 'DD-MMM-YYYY';

export const START_DATE = '28-Sep-2021';
export const START_DATE_FORMATE = moment(START_DATE, DATE_FORMATE);
export const TODAY_DATE_FORMATE = moment().format(DATE_FORMATE);

export const FIRST_NAME = 'Ranvijay';
export const MIDDLE_NAME = 'Kumar';
export const LAST_NAME = 'Singh';
export const FULL_NAME = `${FIRST_NAME} ${MIDDLE_NAME} ${LAST_NAME}`;
export const EMAIL = 'ranvijaychouhan12@gmail.com';

export const PHONE_NUMBER = '+91 9066561669';
export const LOCATION = 'Bengaluru, Karnataka, India';
export const TOTAL_PROJECTS = 30;
export const TOTAL_CLIENTS = 40;
export const TOTAL_COMPANIES = experienceData.length;

export const PORTFOLIO_URL = 'https://ranvijaychouhan12.github.io/portfolio/';
export const RESUME_URL =
  'https://drive.google.com/file/d/1b2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7/view?usp=sharing';
export const TWITTER_URL = 'https://twitter.com/RanvijayChouhan12';
export const INSTAGRAM_URL = 'https://www.instagram.com/ranvijaychouhan12/';
export const FACEBOOK_URL = 'https://www.facebook.com/ranvijay.chouhan.12';
export const STACKOVERFLOW_URL =
  'https://stackoverflow.com/users/20588514/ranvijay-kumar-singh';
export const DEVTO_URL = 'https://dev.to/ranvijaychouhan12';
export const MEDIUM_URL = 'https://medium.com/@ranvijaychouhan12';
export const LEETCODE_URL = 'https://leetcode.com/RanvijayChouhan12/';
export const CODEFORCES_URL =
  'https://codeforces.com/profile/RanvijayChouhan12';
export const HACKERRANK_URL = 'https://www.hackerrank.com/ranvijaychouhan12';
export const HACKEREARTH_URL = 'https://www.hackerearth.com/@ranvijaychouhan12';
export const CODESANDBOX_URL = 'https://codesandbox.io/u/RanvijayChouhan12';
export const CODEPEN_URL = 'https://codepen.io/RanvijayChouhan12';
export const DRIBBBLE_URL = 'https://dribbble.com/RanvijayChouhan12';
export const BEHANCE_URL = 'https://www.behance.net/ranvijaychouhan12';
export const YOUTUBE_URL = 'https://www.youtube.com/@RanvijayChouhan12';
export const TIKTOK_URL = 'https://www.tiktok.com/@ranvijaychouhan12';
export const WHATSAPP_URL = 'https://wa.me/919066561669';
export const TELEGRAM_URL = 'https://t.me/RanvijayChouhan12';
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/ranvijay-kumar-singh-h-3a29b4152/';
export const GITHUB_URL = 'https://github.com/RanvijayChouhan12/';

// Experience Section
const start = moment(START_DATE, DATE_FORMATE);
const end = moment().subtract(3, 'month');
const years = end.diff(start, 'years');
start.add(years, 'years');
const months = end.diff(start, 'months');

const parts = [];
if (years) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
if (months) parts.push(`${months} Mon'${months > 1 ? 's' : ''}`);

export const TOTAL_EXPERIENCE = `${years}.${months} + Years.`;
