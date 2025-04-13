export interface IExperienceItem {
  company: string;
  duration: string;
  location: string;
  projects: string[];
  responsibilities: string[];
  technologies: string[];
  title: string;
}

export const experienceData: IExperienceItem[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    responsibilities: [
      'Led development of cross-platform mobile applications using React Native',
      'Architected and implemented scalable backend solutions with Node.js',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React Native', 'Node.js', 'TypeScript', 'AWS'],
    projects: ['E-commerce Platform', 'Healthcare App'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    location: 'New York, NY',
    duration: '2020 - 2022',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented responsive designs and improved user experience',
      'Collaborated with design team for UI/UX improvements',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Redux'],
    projects: ['CRM System', 'Analytics Dashboard'],
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Hub',
    location: 'Boston, MA',
    duration: '2019 - 2020',
    responsibilities: [
      'Built responsive web interfaces using modern JavaScript frameworks',
      'Optimized application performance and loading times',
      'Worked in an agile development environment',
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'HTML5'],
    projects: ['Marketing Website', 'Admin Dashboard'],
  },
];
