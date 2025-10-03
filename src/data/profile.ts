import { Experience, Skill, Certification } from '../types';

export const profileData = {
  name: 'Ravindra Saragadam',
  title: 'Data Engineer',
  currentRole: 'Data Engineer at 6sense',
  location: 'Bengaluru, Karnataka, India',
  email: 'ravindrasaragadam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ravindrasaragadam',
  github: 'https://github.com/ravindrasaragadam',

  summary: `Hey, I'm Ravindra - been working as a data engineer for a while now. What gets me excited? Honestly, it's those messy data problems where nothing's working quite right and you gotta figure out why. The best part for me is when teams can actually put their data to use instead of it just... sitting there doing nothing.

Most days you'll find me dealing with the usual stuff - Spark, SQL, Elastic, Flink, various cloud platforms. But what really keeps it interesting is trying new things and seeing if they work better. I'm totally that person in the room who goes "okay but why are we doing it this way?" or "anyone ever tried this other approach?" Gets some good discussions going sometimes. That's usually how things improve imo.

Really into sharing what I learn - feels kinda wrong when it only helps one person, you know? And I'll take something practical that actually works over the perfect theoretical solution every time.`,

  highlights: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Major Companies', value: '3' },
    { label: 'Revenue Impact', value: '$10B+' },
    { label: 'Data Processed', value: '5TB/day' }
  ],

  specialties: [
    'Big Data Pipeline Architecture',
    'Cloud Platform Optimization',
    'Financial Data Systems',
    'Real-time Data Processing'
  ]
};

export const experiences: Experience[] = [
  {
    company: '6sense',
    role: 'Data Engineer',
    duration: 'January 2022 - Present',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Building and optimizing large-scale data pipelines for B2B intelligence platform',
      'Working with real-time data processing using Flink and Spark',
      'Developing data infrastructure to support predictive analytics for enterprise clients',
      'Collaborating with cross-functional teams to deliver data-driven insights'
    ],
    technologies: ['Apache Spark', 'Flink', 'AWS', 'Python', 'Elasticsearch', 'SQL']
  },
  {
    company: 'Flipkart',
    role: 'Data Engineer',
    duration: 'May 2021 - January 2022',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Designed and maintained Accounting and Financial Reporting system with $6-$10B yearly revenue impact',
      'Played significant role in Flipkart India IPO preparation by enhancing finance reporting systems',
      'Developed Inventory Validations Automation Flow ensuring data consistency and fitness',
      'Built and maintained Inventory valuation platform using Spark and Elasticsearch',
      'Enabled automated report generation for Balance Sheet, Cash Flow, and Income Statements'
    ],
    technologies: ['Apache Spark', 'Elasticsearch', 'SQL', 'Python', 'AWS']
  },
  {
    company: 'Fractal Analytics',
    role: 'Data Engineer',
    duration: 'November 2020 - May 2021',
    location: 'Bangalore, Karnataka, India',
    description: [
      'Architected data flow model for Fortune-500 client processing ~5TB/day using Azure',
      'Developed automated data transformation reducing processing time by 90%',
      'Created data ingestion framework tracking customer journeys powering 25+ dashboards',
      'Revamped financial reporting process for 43 projects optimizing profitability decisions',
      'Led weekly client sync-ups delivering insights and gathering requirements'
    ],
    technologies: ['PySpark', 'Azure', 'Airflow', 'Hadoop', 'Hive', 'Pandas', 'Python']
  },
  {
    company: 'Fractal Analytics',
    role: 'Associate Engineer',
    duration: 'August 2019 - November 2020',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Designed data consolidation tool for UK and Russia Markets saving 500 human hours/year',
      'Optimized revenue analysis for e-commerce client reducing analysis time by 3x',
      'Developed automated solution for Europe markets achieving 30% reduction in lag time',
      'Built scalable solutions across multiple markets (UK, Poland, France)'
    ],
    technologies: ['Python', 'SQL', 'Cloud Platforms', 'Data Warehousing']
  },
  {
    company: 'MAQ Software',
    role: 'Software Engineer Intern',
    duration: 'September 2018 - July 2019',
    location: 'Hyderabad, Telangana, India',
    description: [
      'Developed performance reporting template reducing preparation time by 80%',
      'Automated business insights generation for Microsoft Asimov Support',
      'Conducted sentiment analysis on social media data using Twitter and Facebook APIs',
      'Pioneered sales dashboard approach reducing launch time by 90%',
      'Led 30+ customer resolution sessions across 8+ countries'
    ],
    technologies: ['Python', 'Power BI', 'SQL', 'APIs', 'Data Analytics']
  }
];

export const skills: Skill[] = [
  { name: 'Amazon Web Services (AWS)', category: 'Cloud & Infrastructure' },
  { name: 'Microsoft Azure', category: 'Cloud & Infrastructure' },
  { name: 'Apache Spark', category: 'Big Data Technologies' },
  { name: 'Apache Flink', category: 'Big Data Technologies' },
  { name: 'Hadoop', category: 'Big Data Technologies' },
  { name: 'Elasticsearch', category: 'Data Platforms' },
  { name: 'Hive', category: 'Data Platforms' },
  { name: 'Python', category: 'Programming & Tools' },
  { name: 'PySpark', category: 'Programming & Tools' },
  { name: 'SQL', category: 'Programming & Tools' },
  { name: 'Pandas', category: 'Programming & Tools' },
  { name: 'Airflow', category: 'Data Platforms' },
  { name: 'Power BI', category: 'Data Platforms' }
];

export const certifications: Certification[] = [
  { name: 'Introduction to Data Science in Python', issuer: 'University of Michigan' },
  { name: 'Data Warehouse Concepts, Design, and Data Integration', issuer: 'Coursera' },
  { name: 'Hadoop Foundations', issuer: 'LinkedIn Learning' },
  { name: 'Database Management Essentials', issuer: 'University of Colorado' },
  { name: 'Big Data Foundations', issuer: 'IBM' }
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech.)',
  field: 'Computer Science',
  institution: "Vignan's Institute of Information Technology",
  location: 'Duvvada, India'
};
