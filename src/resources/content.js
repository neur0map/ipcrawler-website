// Logo import removed - not needed for IPCrawler

const person = {
  firstName: "IPCrawler",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Intelligent Wordlist Selection",
  avatar: "/images/logo.png",
  email: "ipcrawler@example.com",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to SmartList Updates</>,
  description: (
    <>
      Get notified when SmartList adds new technology patterns, wordlist updates, and 
      intelligence improvements that make recommendations even more accurate.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ipcrawler/ipcrawler",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `IPCrawler - ${person.role}`,
  description: `Stop guessing which wordlists to use. IPCrawler's SmartList algorithm analyzes your target and recommends the perfect wordlists with confidence scores.`,
  headline: <>Never Guess Wordlists Again.</>,
  featured: {
    display: true,
    title: <>Introducing: <strong className="ml-4">SmartList - Know exactly which wordlists to use</strong></>,
    href: "/work/smartlist-algorithm",
  },
  subline: (
    <>
      IPCrawler's SmartList algorithm analyzes discovered services and recommends the <strong>exact wordlists</strong> you need.
      <br /> No more blind enumeration. <strong>Technology-aware</strong>. <strong>Pattern-based</strong>. <strong>Find what matters</strong>.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "What is SmartList?",
    description: (
      <>
        SmartList is IPCrawler's intelligent algorithm that solves the biggest problem in enumeration: 
        knowing which wordlists to use. By analyzing discovered services, technologies, and patterns, 
        SmartList recommends the perfect wordlists with confidence scores, turning guesswork into science.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "The Wordlist Problem",
    experiences: [
      {
        company: "Traditional Enumeration",
        timeframe: "Without SmartList",
        role: "Blind guessing",
        achievements: [
          <>
            Thousands of wordlists available - which one to choose?
          </>,
          <>
            Generic wordlists miss technology-specific paths
          </>,
          <>
            Hours wasted on irrelevant requests that find nothing
          </>,
          <>
            Critical vulnerabilities missed due to wrong wordlist selection
          </>,
        ],
        images: [],
      },
      {
        company: "SmartList Intelligence",
        timeframe: "With SmartList Algorithm",
        role: "Precision targeting",
        achievements: [
          <>
            Detects WordPress? Get wp-plugins.txt, wp-themes.txt instantly
          </>,
          <>
            Finds Tomcat? Recommends tomcat-manager.txt with high confidence
          </>,
          <>
            Discovers API? Suggests api-endpoints.txt, graphql.txt
          </>,
          <>
            Context-aware recommendations based on port, SSL, headers
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Who Benefits",
    institutions: [
      {
        name: "CTF Players & HTB Users",
        description: <>Get first blood by completing recon in 2 minutes while others are still running nmap.</>,
      },
      {
        name: "Professional Pentesters",
        description: <>Bill more hours on exploitation instead of enumeration. Generate client-ready reports instantly.</>,
      },
      {
        name: "Security Researchers",
        description: <>Find attack surfaces faster with intelligent tool chaining and technology-specific enumeration.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "SmartList Features",
    skills: [
      {
        title: "Pattern Recognition",
        description: <>SmartList uses intelligent pattern matching to identify technologies and recommend optimal wordlists.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Technology Detection",
        description: <>Recognizes 200+ technologies: WordPress, Joomla, Laravel, Spring Boot, Tomcat, and more.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Confidence Scoring",
        description: <>HIGH/MEDIUM/LOW confidence levels with clear reasoning for each recommendation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Changelog",
  title: "IPCrawler Changelog",
  description: `Release notes, updates, and version history for IPCrawler`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "SmartList",
  title: `SmartList Algorithm – ${person.name}`,
  description: `Explore how SmartList revolutionizes wordlist selection with intelligent technology detection`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// Gallery section removed as requested

export { person, social, newsletter, home, about, blog, work };
