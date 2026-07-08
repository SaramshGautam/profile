// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SaramshGautam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'SaramshGautam/polyflux-platform',
            'SaramshGautam/Documentation-of-things',
            'SaramshGautam/profile',
            'SaramshGautam/fuzzy-linkograph',
            'SaramshGautam/friday-football',
            'SaramshGautam/nsa-membership',
            'SaramshGautam/nuptse',
            'SaramshGautam/collaBoard',
            'SaramshGautam/python-bazel-ci',
            'SaramshGautam/what2watch',
            'SaramshGautam/yield',
            'SaramshGautam/viz',
            'SaramshGautam/benchmark_tool',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Language Independent Collaboration for Meetings',
          description:
            "This project aims to develop a system that enables seamless collaboration during meetings, regardless of the participants' native languages. By leveraging advanced natural language processing and real-time translation technologies, the system will facilitate effective communication and understanding among diverse teams.",
          imageUrl: '/profile/LINC.png',
          link: 'https://example.com',
        },
        {
          title: 'Multimodal Collaborative Open Canvas',
          description:
            'PolyFlux is an innovative platform designed to facilitate collaborative creativity and idea sharing among users. It provides a dynamic and interactive canvas where individuals can contribute, modify, and enhance content in real-time, fostering a rich environment for brainstorming and project development.',
          imageUrl: '/profile/polyflux.png',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Saramsh Gautam | PhD Student & Software Developer',
    description:
      'PhD student in Computer Science at Louisiana State University, researching and building software with React, Node.js, and modern web technologies.',
    imageURL: 'https://github.com/SaramshGautam.png',
  },
  social: {
    linkedin: 'saramsh-gautam-a238ba186',
    x: 'GautamSaramsh',
    // mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '',
    email: 'saramshgautam@gmail.com',
  },
  resume: {
    fileUrl: 'resume.pdf',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Louisiana State University',
      position: 'Research Assistant',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://lsu.edu',
    },
    {
      company: 'Louisiana State University',
      position: 'Teaching Assistant',
      from: 'August 2023',
      to: 'May 2025',
      companyLink: 'https://lsu.edu',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Louisiana State University',
      degree: 'Masters in Computer Science',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'Tribhuvan University',
      degree: 'Bachelors in Computer Engineering',
      from: '2017',
      to: '2022',
    },
  ],
  publications: [
    {
      title:
        'LINC: Supporting Language Independent Communication and Comprehension to Enhance Contribution in Multilingual Collaborative Meetings',
      conferenceName: '',
      journalName: 'arXiv',
      authors: 'Saramsh gautam, Mahmood Jasim',
      link: 'https://doi.org/10.48550/arXiv.2504.18988',
      description:
        'LINC is a multimodal system that helps ESL researchers participate fully in multilingual meetings which combines real-time communication support with a post-meeting dashboard for review and follow-up. Built from a survey of 62 ESL researchers and evaluated with six multilingual teams, it improved participation, comprehension, and meeting preparation for non-native English speakers.',
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    // defaultTheme: 'lofi',
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    // respectPrefersColorScheme: false,
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dracula', 'procyon'],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
