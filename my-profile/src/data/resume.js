// Single source of truth: every template reads from this file.
export const resume = {
  name: 'Athira Suresh',
  title: 'Software Engineer',
  roles: [
    'React Developer',
    'Vue.js Developer',
    'Astro Builder',
    'Mentor to new developers',
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Years building for the web' },
    { value: 4, suffix: '', label: 'React projects shipped' },
    { value: 3, suffix: '', label: 'Certifications earned' },
    { value: 8.13, suffix: '', label: 'B.Tech CGPA', decimals: 2 },
  ],
  email: 'athiramelekappil@gmail.com',
  // Hidden in production builds (hosted site); still shown in local dev.
  phone: import.meta.env.PROD ? "" : "+91-6380898942",
  github: 'github.com/Athiras231996',
  linkedin: 'linkedin.com/in/athira-s',
  location: 'Sulthan Bathery, Kerala',
  summary:
    'Results-driven Software Engineer with professional experience building and maintaining web applications using modern JavaScript frameworks. Proven ability to deliver production-grade features, refactor legacy codebases, and collaborate with global clients. Adept at both frontend development and mentoring early-career developers.',
  experience: [
    {
      company: 'Vonnue Innovations Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Sep 2023 – Present',
      location: 'Sulthan Bathery, Kerala',
      points: [
        'Develop and maintain production web applications as part of a cross-functional engineering team.',
        'Collaborated with international clients on a command-line interface tool for managing network camera systems.',
        'Led development of a footage browser feature enabling users to efficiently browse and review recorded surveillance footage with intuitive timeline controls.',
        'Built web pages and UI components using the Astro framework, improving page performance and load times.',
        'Built interactive React components and contributed to React-based modules within the broader frontend ecosystem.',
        'Built reusable, custom Vue.js components following component-driven design principles.',
        'Refactored legacy frontend code, improving maintainability, readability, and overall developer experience.',
        'Participated in code reviews and collaborated closely with senior engineers and clients.',
      ],
    },
    {
      company: 'ZekeLabs Technologies Pvt. Ltd. (EdYoda)',
      role: 'MERN Full Stack Teaching Assistant',
      period: 'Dec 2022 – Sep 2023',
      location: 'Remote',
      points: [
        'Served as teaching assistant and moderator for the MERN Full Stack Developer program.',
        'Resolved student technical queries, reviewed project submissions, and facilitated live doubt-clarification sessions.',
        'Helped students successfully complete capstone projects across HTML/CSS, JavaScript, React, Node.js, and MongoDB.',
      ],
    },
  ],
  skills: [
    {
      group: 'Core',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'ReactJS',
        'Vue.js',
        'Node.js',
        'MongoDB',
        'MySQL',
        'jQuery',
      ],
    },
    {
      group: 'Frameworks & Tools',
      items: [
        'Astro',
        'Vuetify',
        'Material UI',
        'Tailwind CSS',
        'Bootstrap',
        'Formik',
      ],
    },
    { group: 'Developer Tools', items: ['Git', 'GitHub', 'Glitch'] },
    { group: 'Familiar With', items: ['C', 'C++', 'DSA'] },
  ],
  education: [
    {
      school: 'MPNMJ Engineering College, Anna University',
      degree: 'B.Tech in Information Technology',
      detail: 'CGPA: 8.13 / 10',
      note: 'Final Year Project: Novel Approach of Finger Vein Recognition for Personal Authentication',
      period: 'May 2017',
    },
    {
      school: 'EdYoda Digital University',
      degree: 'MERN Full Stack Developer Program',
      period: 'Aug 2022',
    },
    {
      school: 'GHSS Bitherkad, Tamil Nadu',
      degree: 'Higher Secondary Certificate (HSC)',
      period: 'May 2013',
    },
  ],
  certifications: [
    {
      name: 'Web Development Fundamentals',
      issuer: 'EdYoda Digital University',
      detail:
        'MCQ & Coding: 190/200 | Project: 200/200 | Award: Excellent Performer',
      period: 'Dec 2022',
    },
    {
      name: 'ReactJS Certification',
      issuer: 'EdYoda Digital University',
      detail: 'MCQ & Coding: 170/200 | Project: 200/200',
      period: 'Jan 2023',
    },
    {
      name: 'Placement Readiness Module (PRM)',
      issuer: 'EdYoda Digital University',
      detail: 'Aggregate: 8.1 / 10',
      period: '2023',
    },
  ],
  projects: [
    {
      name: 'Camera Management Platform',
      points: [
        'Contributed to a CLI tool for programmatic management of network camera devices.',
        'Developed a footage browser module allowing users to search and playback historical recordings with timeline-based navigation.',
        'Built responsive, accessible UI pages using the VueJS framework for improved site performance.',
      ],
    },
    {
      name: 'AI-Powered Ride Platform — Astro Project',
      points: [
        'Built and maintained web pages for an AI-powered ride platform using the Astro framework.',
        'Developed performant, SEO-friendly static pages with component-based architecture and optimised asset delivery.',
        'Collaborated with the design teams to integrate dynamic content and ensure a seamless user experience.',
      ],
    },
    {
      name: 'Hands-on React Projects',
      points: [
        'Movies Website with real-time API integration, search, filtering, and component-driven UI.',
        'Shopping Site (Shop Lane) with product listing, cart management, and checkout flow using React state management.',
        'Quiz App with timed questions, score tracking, and result summary using React hooks.',
        'Dashboard with data visualisation components and responsive layout for analytics overview.',
      ],
    },
  ],
};
