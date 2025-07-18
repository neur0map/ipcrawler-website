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
  title: <>Join Our Discord Community</>,
  description: (
    <>
      Connect with other security researchers, get help with IPCrawler, share findings, 
      and be the first to know about SmartList updates and new features.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/neur0map",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/neur0map",
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
        SmartList is IPCrawler's smart feature that automatically picks the right wordlists for you. 
        Instead of guessing which lists to use, SmartList looks at what services are running 
        (like WordPress, Apache, etc.) and suggests the best wordlists that are most likely to find something useful. 
        Think of it as having an expert guide that knows exactly which tools to use for each situation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "The Wordlist Problem",
    experiences: [
      {
        company: "Without SmartList",
        timeframe: "The Old Way",
        role: "Manual guessing",
        achievements: [
          <>
            Hundreds of wordlists to choose from - but which ones work?
          </>,
          <>
            Using general lists that miss specific application paths
          </>,
          <>
            Wasting time scanning with irrelevant wordlists
          </>,
          <>
            Missing important findings because you used the wrong lists
          </>,
        ],
        images: [],
      },
      {
        company: "With SmartList",
        timeframe: "The Smart Way",
        role: "Intelligent recommendations",
        achievements: [
          <>
            Found WordPress? SmartList suggests WordPress-specific lists automatically
          </>,
          <>
            Discovered a database? Get database admin panel wordlists instantly
          </>,
          <>
            Running an API? SmartList knows which endpoint lists to use
          </>,
          <>
            Always get the most relevant wordlists for what you're scanning
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
    title: "How SmartList Works",
    skills: [
      {
        title: "Automatic Detection",
        description: <>SmartList scans your target and automatically identifies what software is running (WordPress, databases, web servers, etc.).</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Smart Matching",
        description: <>Based on what it finds, SmartList matches each service to the best wordlists that are most likely to discover useful paths.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Confidence Ratings",
        description: <>Each recommendation gets a confidence rating (HIGH/MEDIUM/LOW) so you know which wordlists are most promising to try first.</>,
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
  label: "Docs",
  title: `Documentation – ${person.name}`,
  description: `Complete guide to IPCrawler installation, usage, and SmartList algorithm`,
  // Create new documentation pages by adding a new .mdx file to app/work/documentation
  // All documentation pages will be listed on the /home and /work routes
};

// Gallery section removed as requested

export { person, social, newsletter, home, about, blog, work };
