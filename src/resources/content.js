// Logo import removed - not needed for IPCrawler

const person = {
  firstName: "IPCrawler",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Intelligent Wordlist Selection",
  avatar: "/images/logo.png",
  email: "hello@ipcrawler.io",
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
  description: `Stop guessing which wordlists to use in Hack The Box. IPCrawler's SmartList algorithm analyzes your target and recommends the perfect wordlists with confidence scores for faster enumeration.`,
  headline: <>Never Guess Wordlists Again in HTB.</>,
  featured: {
    display: true,
    title: <>Introducing: <strong className="ml-4">SmartList-Know exactly which wordlist to use</strong></>,
    href: "/work/smartlist-algorithm",
  },
  subline: (
    <>
      IPCrawler&apos;s SmartList algorithm analyzes discovered services and recommends the <strong>exact wordlists</strong> you need for Hack The Box challenges.
      <br /> No more blind enumeration. <strong>Technology-aware</strong>. <strong>HTB-optimized</strong>. <strong>Find hidden directories faster</strong>.
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
        SmartList is IPCrawler&apos;s smart feature that automatically picks the right wordlists for Hack The Box challenges. 
        Instead of wasting time with generic wordlists, SmartList analyzes discovered services 
        (like WordPress, Apache, databases, etc.) and suggests HTB-optimized wordlists that are most likely to find hidden directories. 
        Think of it as having an expert HTB player guide that knows exactly which wordlists lead to first blood.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "The Wordlist Problem",
    experiences: [
      {
        company: "Without SmartList",
        timeframe: "The Old HTB Way",
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
        company: "With SmartList",
        timeframe: "The HTB Smart Way",
        role: "Intelligent HTB enumeration",
        achievements: [
          <>
            Found WordPress on HTB box? SmartList suggests wp-admin wordlists automatically
          </>,
          <>
            Discovered MySQL? Get database-specific admin panel wordlists instantly
          </>,
          <>
            API endpoints detected? SmartList knows which REST/GraphQL lists work
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
    title: "How SmartList Works",
    skills: [
      {
        title: "HTB-Optimized Detection",
        description: <>SmartList analyzes HTB targets and automatically identifies technologies (WordPress, MySQL, Apache, custom apps, etc.) commonly found in boxes.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "HTB-Proven Wordlist Matching",
        description: <>Based on detected services, SmartList recommends wordlists that HTB creators actually use to hide directories and files in their boxes.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "First Blood Priority",
        description: <>Each wordlist gets a confidence rating (HIGH/MEDIUM/LOW) based on HTB success rates, so you know which ones to run first for fastest results.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "IPCrawler Blog - HTB Tips & SmartList Updates",
  description: `Hack The Box enumeration techniques, wordlist selection tips, and IPCrawler release notes for faster directory discovery`,
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
