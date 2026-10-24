// ------------------------------------------------------------------
// Edit this file to make the portfolio yours. Everything on the site
// is read from here. Replace every placeholder before you deploy.
// ------------------------------------------------------------------

export const profile = {
  name: 'Dhwani Gajiwala',
  role: 'MCA student and Android developer',
  intro:
    'I build Android apps with Kotlin and Firebase, and admin panels with PHP. This portfolio is a React site I designed, coded and deployed myself.',
  email: 'dhwanigajiwala405@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dhwani-gajiwala',
  github: 'https://github.com/dhwanigajiwala',
  resumeUrl: '', // optional: e.g. '/resume.pdf' (put the file in a /public folder)
  about: [
    'Write two or three short paragraphs here. Say what you study or do, what kind of work you enjoy, and what you are learning right now.',
    'Mention one thing that makes your approach yours, such as how you plan a project, how you test it, or what you care about when you design an interface.',
  ],
  facts: [
    { label: 'Based in', value: '[Your city, country]' },
    { label: 'Studying', value: 'Master of Computer Applications (MCA)' },
    { label: 'Learning now', value: '[A tool or concept]' },
    { label: 'Open to', value: '[Internships, freelance, collaboration]' },
  ],
};

export const skills = ['Kotlin', 'Android Studio', 'PHP', 'Firebase', 'Firebase Authentication'];

// Each project can use any skills from the list above. Visitors can filter
// the project list by clicking a skill.
export const projects = [
  {
    id: 'zenstar',
    year: '2025–2026',
    title: 'Zenstar',
    summary:
      'A numerology app that helps users learn about themselves through detailed numerological analysis.',
    details:
      'Zenstar gives insights into personality traits, planetary influences and Chaldean theory calculations based on a person\u2019s name and date of birth. The user side is an Android app built in Android Studio with Kotlin, and the admin side is built with PHP. I built it in my third year of BCA.',
    skills: ['Kotlin', 'Android Studio', 'PHP'],
    liveUrl: '',
    repoUrl: 'https://github.com/dhwanigajiwala/Zenstar',
  },
  {
    id: 'recipe-adda',
    year: '2025–2026',
    title: 'Recipe Adda',
    summary: 'A recipe app where users can add their own recipes.',
    details:
      'Recipe Adda lets users add recipes. Both the user side and the admin side are built in Android Studio, and Firebase Authentication handles sign-in. I built it in my third year of BCA.',
    skills: ['Android Studio', 'Firebase', 'Firebase Authentication'],
    liveUrl: '',
    repoUrl: 'https://github.com/dhwanigajiwala/RecipeAddaApp',
  },
];

export const journey = [
  {
    when: '2026',
    title: 'Portfolio website',
    place: 'Course evaluation project',
    note: 'Designed, built and deployed this site with React, styled-components and Vercel.',
  },
  {
    when: '2026 – present',
    title: 'Master of Computer Applications (MCA)',
    place: 'Shrimad Rajchandra Institute of Management and Computer Application, Uka Tarsadia University',
    note: 'Studying the core subjects of the MCA programme.',
  },
  {
    title: 'Internship',
    place: 'Kakshi Infotech',
  },
  {
    when: '2023 – 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    place: 'SDJ International College, Vesu, VNSGU',
    note: 'Built Zenstar and Recipe Adda, two Android apps, in my third year.',
  },
];

export const buildInfo = {
  stack: [
    'React 18 with Vite',
    'styled-components 6 (theming and styling)',
    'JavaScript (ES2020+)',
    'Google Fonts: Bricolage Grotesque and Newsreader',
    'Git and GitHub for version control',
    'Vercel for hosting',
  ],
  aiTools: [
    {
      name: 'Claude (Anthropic)',
      use: 'Planned the site structure and helped write the first version of the code and copy. I reviewed, tested and edited the result.',
    },
    {
      name: 'ChatGPT (OpenAI)',
      use: 'Helped me to upload and deploy the site to Vercel, and to write the first version of this README file. I reviewed, tested and edited the result.',
    },
  ],
};
