// Logo import removed - not needed for IPCrawler

const person = {
  firstName: "IPCrawler",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SmartList Engine - Intelligent Wordlist Recommendation",
  avatar: "/images/logo.png",
  email: "neur0map@ipcrawler.io",
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
  image: "/images/og/og.png",
  label: "Home",
  title: `IPCrawler - ${person.role}`,
  description: `IPCrawler is a SmartList Engine - an intelligent wordlist recommendation system for security testing. It analyzes targets and recommends optimal wordlists for fuzzing and reconnaissance based on discovered services and technologies.`,
  headline: <>Never Guess Wordlists Again.</>,
  featured: {
    display: true,
    // note: Do not modify the title, it's used for the featured post in the home page
    title: <>Introducing: <strong className="ml-4">SmartList 2.0 - Now with 3x more technology detection</strong></>,
    href: "/work/smartlist-algorithm",
  },
  subline: (
    <>
      IPCrawler&apos;s SmartList Engine analyzes discovered services and recommends the <strong>exact wordlists</strong> you need with confidence scores.
      <br /> Features <strong>entropy-based diversification</strong>, <strong>privacy-first caching</strong>, and <strong>comprehensive audit capabilities</strong>.
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
        The SmartList Engine is IPCrawler&apos;s core intelligent wordlist recommendation system. 
        It analyzes discovered services and technologies (like WordPress, Apache, databases, etc.) 
        and recommends optimal wordlists with confidence scores based on exact technology matches, 
              service categories, and port-based heuristics. New in v0.1.0-alpha-3: enhanced error handling, 
      modular HTTP scanner architecture, and intelligent Mini Spider workflow with security analysis.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "The Wordlist Problem",
    experiences: [
      {
        company: "Without SmartList Engine",
        timeframe: "The Old Way",
        role: "Manual wordlist guessing",
        achievements: [
          <>
            Hours wasted running dirbuster with generic wordlists on HTB boxes
          </>,
          <>
            Missing obvious admin panels because you chose the wrong wordlist
          </>,
          <>
            Watching others get first blood while you&apos;re still enumerating
          </>,
          <>
            Frustration when the right directory was in a wordlist you didn&apos;t try
          </>,
        ],
        images: [],
      },
      {
        company: "With SmartList Engine",
        timeframe: "The HTB Smart Way",
        role: "Intelligent HTB enumeration",
        achievements: [
          <>
            Found WordPress? SmartList Engine suggests wp-admin wordlists automatically with HIGH confidence
          </>,
          <>
            Discovered MySQL? Get database-specific wordlists with entropy-based diversification
          </>,
          <>
            API endpoints detected? SmartList Engine recommends REST/GraphQL lists with confidence scoring
          </>,
          <>
            Always use the wordlists that HTB box creators actually hide directories in
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
        name: "Hack The Box Players",
        description: <>Get first blood by finding hidden directories in minutes while others waste hours with wrong wordlists.</>,
      },
      {
        name: "Professional Pentesters",
        description: <>Stop wasting client time on manual wordlist selection. Use HTB-proven techniques in real engagements.</>,
      },
      {
        name: "CTF Players & Security Researchers",
        description: <>Apply HTB-optimized enumeration techniques to find attack surfaces in real-world scenarios faster.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "How SmartList Engine Works",
    skills: [
      {
        title: "Technology-Aware Detection",
        description: <>SmartList Engine analyzes targets and automatically identifies technologies (WordPress, MySQL, Apache, custom apps, etc.) using advanced service fingerprinting and version detection.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Intelligent Wordlist Matching",
        description: <>Based on detected services, SmartList Engine recommends wordlists using discriminator-based scoring, entropy analysis for diversity, and privacy-first caching for efficiency.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Confidence-Based Prioritization",
        description: <>Each wordlist gets a confidence rating (HIGH/MEDIUM/LOW) based on exact technology matches, service categories, and port heuristics, so you know which ones to run first.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "IPCrawler Blog - SmartList Engine Updates & Security Research",
  description: `IPCrawler SmartList Engine updates, intelligent wordlist recommendation techniques, and security research insights for effective reconnaissance`,
  // Add blog posts as .mdx files in app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Docs",
  title: `Documentation – ${person.name}`,
  description: `Complete guide to IPCrawler installation, usage, and SmartList algorithm`,
  // Add documentation as .mdx files in app/work/documentation
};


export { person, social, newsletter, home, about, blog, work };
