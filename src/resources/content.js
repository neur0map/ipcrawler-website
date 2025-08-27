// Logo import removed - not needed for IPCrawler

const person = {
  firstName: "IPCrawler",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Reconnaissance Automation Tool for CTF & Penetration Testing",
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
      and be the first to know about new reconnaissance features and plugin updates.
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
  description: `IPCrawler is a reconnaissance automation tool built for Hack The Box, CTF and OSCP style challenges. Features two-phase port scanning with RustScan and Nmap, concurrent DNS enumeration, real-time terminal UI, and a plugin architecture for comprehensive network reconnaissance.`,
  headline: <>Automate Your Reconnaissance.</>,
  featured: {
    display: true,
    // note: Do not modify the title, it's used for the featured post in the home page
    title: <>New Release: <strong className="ml-4">v0.1.0-alpha - Real-time TUI & Concurrent Scanning</strong></>,
    href: "/under-construction",
  },
  subline: (
    <>
      IPCrawler automates reconnaissance with <strong>smart port scanning</strong> (fast discovery + detailed analysis), <strong>simultaneous DNS queries</strong>, and <strong>real-time terminal interface</strong>.
      <br />
      <br />
      Built for <strong>Hack The Box</strong>, <strong>CTF challenges</strong>, and <strong>OSCP style challenges</strong> with <strong>everything running at once</strong> for maximum speed.
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
    title: "What is IPCrawler?",
    description: (
      <>
        IPCrawler is a comprehensive reconnaissance automation tool built for CTF and penetration testing by cybersecurity professionals. 
        It combines fast port scanning (finds open ports in 1-3 seconds) with detailed service detection, 
        DNS enumeration using both nslookup and dig tools, host discovery, and a real-time terminal interface with live updates. 
        Built entirely with AI pair programming, it runs all reconnaissance tools at the same time instead of one after another, 
        making your enumeration much faster than traditional approaches.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Reconnaissance Challenges",
    experiences: [
      {
        company: "Without IPCrawler",
        timeframe: "The Manual Way",
        role: "Manual reconnaissance",
        achievements: [
          <>
            Running reconnaissance tools one at a time, waiting for each to finish
          </>,
          <>
            Waiting 10+ minutes for full Nmap scans when you just need to know what's open
          </>,
          <>
            No real-time feedback while tools are running in the background
          </>,
          <>
            Complex setup requirements with tools like AutoRecon that are hard to customize
          </>,
        ],
        images: [],
      },
      {
        company: "With IPCrawler",
        timeframe: "The Automated Way",
        role: "Concurrent reconnaissance automation",
        achievements: [
          <>
            Fast port discovery in 1-3 seconds, then detailed service detection on only the open ports
          </>,
          <>
            All reconnaissance tools run at the same time - no more waiting for each tool to finish
          </>,
          <>
            Real-time terminal UI shows live progress with colored results and system stats
          </>,
          <>
            Organized artifacts with scan results, reports in txt/md/json formats with timestamps
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
        description: <>Find open ports in seconds instead of minutes, get service details automatically, and run DNS queries simultaneously - everything works together for faster box enumeration.</>,
      },
      {
        name: "Professional Pentesters",
        description: <>Speed up client assessments with automated reconnaissance that finds open ports quickly, identifies services, performs DNS lookups, and organizes all findings into professional reports.</>,
      },
      {
        name: "CTF Players & Security Researchers",
        description: <>Built by a security engineer frustrated with complex tools, IPCrawler focuses on simplicity and customization for effective reconnaissance.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "How IPCrawler Works",
    skills: [
      {
        title: "Smart Port Scanning Strategy",
        description: <>First, quickly find all open ports in 1-3 seconds using a fast scanner. Then, only scan those discovered ports with Nmap for detailed service information. This saves massive amounts of time compared to traditional full Nmap scans.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Run Everything at Once",
        description: <>Instead of waiting for each tool to finish before starting the next one, IPCrawler runs port scanning, DNS queries, and host discovery all at the same time. The real-time interface shows live progress with colored results and system performance.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Comprehensive Output & Artifacts",
        description: <>All scan results saved in organized directories with raw tool outputs, formatted reports in txt/md/json. Includes DNS records, discovered ports, service detection, and host information with timestamps.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "IPCrawler Blog - Reconnaissance Updates & Security Research",
  description: `IPCrawler reconnaissance automation updates, plugin development insights, and security research for effective CTF and penetration testing`,
  // Add blog posts as .mdx files in app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Docs",
  title: `Documentation – ${person.name}`,
  description: `Complete guide to IPCrawler installation, usage, and reconnaissance automation features`,
  // Add documentation as .mdx files in app/work/documentation
};


export { person, social, newsletter, home, about, blog, work };
