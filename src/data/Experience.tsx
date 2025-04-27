export interface IExperienceItem {
  company: string;
  companyURL: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  projects: { android?: string; ios?: string; title: string; web?: string }[];
  responsibilities: string[];
  startDate: string;
  technologies: string[];
  title: string;
}

export const experienceData: IExperienceItem[] = [
  {
    title: 'React Native Developer (Software Developer',
    company: 'DXFutureTech',
    companyURL: 'https://www.dxfuturetech.com/',
    location: 'Bengaluru, Karnataka',
    isCurrent: true,
    startDate: '10-Jan-2024',
    endDate: '',
    responsibilities: [
      'Led development of cross-platform mobile applications using React Native',
      'Architected scalable, high-performance applications with modular components and future-proof architecture.',
      'Developed B2C and B2B React Native apps for property management in the UK and UAE, optimizing buying, renting, selling, and real estate operations.',
      'Enhanced security by implementing API encryption, secure credential management, and role-based access control.',
      'Led development of advanced features, including animations, notifications, and in-app purchases.',
      'Streamlined CI/CD pipelines using GitHub Actions for automated testing, builds, and deployments.',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: [
      'React',
      'ReactNative',
      'Expo',
      'JavaScript',
      'TypeScript',
      'AppStore',
      'PlayStore',
      'Figma',
      'Git',
      'Github',
      'AwsAmplify',
      'FireBase',
    ],
    projects: [
      {
        title: 'Premier Sports Academy',
      },
      {
        title: 'Druce',
      },
      {
        title: 'Samana',
      },
    ],
  },
  {
    title: 'Software Developer (Front End Developer)',
    company: 'Transport Simple',
    companyURL: 'https://www.transportsimple.com/',
    location: 'Bengaluru, Karnataka',
    isCurrent: false,
    startDate: '28-Dec-2022',
    endDate: '14-Oct-2023',
    responsibilities: [
      'Designed and implemented app infrastructure from scratch, ensuring scalability, modularity, and maintainability.',
      'Developed and deployed cross-platform React Native applications for iOS and Android, enhancing production workflows for timely app releases.',
      'Designed B2C and B2B apps for vehicle maintenance and record management.',
      'Contributed to backend architecture with a focus on secure data structuring and robust data protection mechanisms.',
      'Deployed apps to production and maintained CI/CD pipelines using GitHub Actions, automating testing, builds,and deployments for seamless production pushes and efficient app updates.',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: [
      'React',
      'ReactNative',
      'Expo',
      'JavaScript',
      'TypeScript',
      'AppStore',
      'PlayStore',
      'Figma',
      'Git',
      'Github',
      'AwsAmplify',
      'FireBase',
    ],
    projects: [
      {
        title: 'Transport Simple Employee APP',
        android:
          'https://play.google.com/store/apps/details?id=com.transportsimple.employee_app',
      },
    ],
  },
  {
    title: 'Software Developer',
    company: 'Presto Apps',
    companyURL: 'https://www.presto-apps.com/',
    location: 'Bengaluru, Karnataka',
    isCurrent: false,
    startDate: '28-Sep-2021',
    endDate: '28-Dec-2022',
    responsibilities: [
      'Led development of cross-platform mobile applications using React Native',
      'Managed multiple live projects, ensuring smooth and timely production releases.',
      'Developed B2C and B2B React Native apps for property management in the Angalo and Africa, optimizing buying, renting, selling.',
      'Refactored and optimized code to improve performance, scalability, and app speed.',
      'Developed cross-platform applications using React Native and Next.js with a shared codebase for efficient maintenance.',
    ],
    technologies: [
      'React',
      'ReactNative',
      'Expo',
      'JavaScript',
      'TypeScript',
      'AppStore',
      'PlayStore',
      'Figma',
      'Git',
      'Github',
      'AwsAmplify',
      'FireBase',
    ],
    projects: [
      {
        title: 'Farm Theory',
        android:
          'https://play.google.com/store/apps/details?id=com.presto.retail.farmtheory&hl=en_IN',
        ios: 'https://apps.apple.com/us/app/farmtheory/id1592298739',
        web: 'https://www.farmtheory.in',
      },
      {
        title: 'Zip Health Care',
        android:
          'https://play.google.com/store/apps/details?id=com.presto.health.ziphealthcareangola',
        ios: 'https://apps.apple.com/us/app/zip-healthcare-angola/id1598298110',
        web: 'https://www.zipafrica.com/',
      },
      {
        title: 'Book My Chef',
        android:
          'https://play.google.com/store/apps/details?id=com.presto.booking.chefapp&hl=en_IN',
        ios: 'https://apps.apple.com/in/app/bookmychef-chefs-catering/id6443593803',
      },
      {
        title: 'BMC for Chef',
        android:
          'https://play.google.com/store/apps/details?id=com.presto.booking.chefapp&hl=en_IN',
        ios: 'https://apps.apple.com/in/app/bmc-for-chefs/id6443577650',
      },
      {
        title: 'BU Manager',
        android:
          'https://play.google.com/store/apps/details?id=com.presto.booking.bustoremanager&hl=en_IN',
        ios: 'https://apps.apple.com/az/app/bu-manager/id6446575325',
      },
      {
        title: 'Ummaira',
        android:
          'https://play.google.com/store/apps/details?id=com.prestoapps.production.ummaira&hl=en_IN',
        ios: 'https://apps.apple.com/za/app/ummaira/id6741903492',
        web: 'https://ummaira.com/',
      },
    ],
  },
];
