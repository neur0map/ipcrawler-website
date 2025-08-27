# IPCrawler Website and tool is currently under construction.

<div align="center">

<img src="./public/images/logo.png" alt="IPCrawler Logo" width="200"/>

**The official website for IPCrawler - Never Guess Wordlists Again**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[🌐 Live Website](https://ipcrawler.io) • [📖 Documentation](https://ipcrawler.io/work) • [🔬 SmartList Algorithm](https://ipcrawler.io/about) • [📝 Changelog](https://ipcrawler.io/blog)

</div>

## 🎬 Demo Video

<div align="center">

https://github.com/user-attachments/assets/5112ecd8-d721-4dce-8f86-f3f2effc451c

*Watch IPCrawler's SmartList algorithm in action - intelligent wordlist selection based on discovered services*
*Still in very early stages, It does not uses AI or ML*

</div>

## 🎯 What is IPCrawler?

IPCrawler is a **SmartList Engine - an intelligent wordlist recommendation system** for security testing. It analyzes targets and recommends optimal wordlists for fuzzing and reconnaissance based on discovered services and technologies, using its breakthrough **SmartList Engine**.

### 🔥 The Problem We Solve

Traditional pentest workflow is painfully manual:
- ⏰ Run nmap for port discovery (slow on all 65,535 ports)
- 🔄 Run nmap again for service detection on discovered ports  
- 🤔 Run directory enumeration tools (but which wordlist to use?)
- 👨‍💻 Manual service enumeration based on findings

### ⚡ IPCrawler's Solution

- **🎯 2-Phase Smart Scanning**: Fast discovery → Targeted analysis (80-90% time reduction)
- **🧠 SmartList Engine**: Intelligent wordlist recommendation with confidence scoring
- **🔍 Entropy Analysis**: Ensures diverse wordlist selection (v0.1.0-alpha-2)
- **🛡️ Privacy-First Caching**: Secure local caching for efficiency
- **📊 Audit Framework**: Comprehensive quality analysis with --audit flag

## 🏗️ Website Architecture

This website is built with cutting-edge web technologies to showcase IPCrawler's capabilities:

```
📁 Project Structure
├── 🎨 src/app/                 # Next.js App Router
│   ├── 🏠 page.tsx            # Homepage with hero video
│   ├── 🧠 about/              # SmartList algorithm explanation
│   ├── 📝 blog/               # Changelog & updates
│   └── 📖 work/               # Complete documentation
├── 🧩 src/components/         # Reusable React components
├── 📚 src/resources/          # Content & configuration
│   ├── content.js            # Site metadata & content
│   └── once-ui.config.js     # Theme customization
├── 🌍 public/
│   ├── 🖼️ images/logo.png     # IPCrawler branding
│   └── 🎬 videos/hero_video.mp4 # Product demonstration
└── 📄 local_files/           # Technical documentation
    ├── IPCrawler_Summary.md  # Detailed tool overview
    └── SMARTLIST_ALGORITHM.md # Algorithm deep-dive
```

## 🎨 Design System

- **Framework**: Next.js 15.3.1 with React 19
- **UI Library**: Once UI design system
- **Theme**: Terminal-inspired dark aesthetic with green/cyan accents
- **Typography**: Code-friendly fonts for developer audience
- **Responsive**: Mobile-first design approach

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/neur0map/ipcrawler-website.git
cd ipcrawler-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the website in action!

## 🧠 SmartList Algorithm

The website's centerpiece is explaining IPCrawler's breakthrough **SmartList Engine**:

### How It Works
1. **🔍 Service Discovery**: Identifies running services (WordPress, Tomcat, MySQL, etc.)
2. **🎯 Technology Mapping**: Maps services using discriminator-based scoring
3. **📊 Confidence Scoring**: Rates wordlists (HIGH/MEDIUM/LOW) with entropy analysis
4. **📚 Intelligent Selection**: Recommends optimal wordlists from SecLists catalog
5. **🔐 Privacy Caching**: Stores results locally with secure metadata

### Example Intelligence
```
🔍 Discovered: WordPress on port 443
📋 Recommends: wordpress-https.txt, wp-plugins.txt, cms-common.txt

🔍 Discovered: Tomcat on port 8080  
📋 Recommends: tomcat-manager.txt, java-servlets.txt

🔍 Discovered: MySQL on port 3306
📋 Recommends: mysql-admin.txt, phpmyadmin.txt
```

## 🎯 Target Audience

### 🏆 CTF Players & HTB Users
Get first blood by completing recon in 2 minutes instead of 20

### 🔒 Professional Pentesters  
Bill more hours on exploitation instead of enumeration

### 🔬 Security Researchers
Find attack surfaces faster with intelligent tool chaining

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 15.3.1, React 19, TypeScript |
| **Styling** | Once UI, SCSS Modules, CSS Variables |
| **Content** | MDX for documentation |
| **Performance** | Turbopack, Image Optimization |
| **Deployment** | Vercel (Production), GitHub Actions |

## 📱 Key Features

### 🏠 Homepage
- Hero section with value proposition
- 3D video display showcasing IPCrawler in action
- Quick installation guide (30-second setup)
- Recent updates feed

### 🧠 Algorithm Page (`/about`)
- SmartList Engine explanation
- "Without SmartList Engine" vs "With SmartList Engine" comparison
- Technical deep-dive with entropy analysis and scoring details

### 📖 Documentation Hub (`/work`)
- Complete implementation guide
- Algorithm documentation
- Service analysis details
- HTTP intelligence features

### 📝 Changelog (`/blog`)
- Version history timeline
- Feature announcements
- Release notes

## 🎬 Video Integration

The hero video (`public/videos/hero_video.mp4`) demonstrates:
- Real-time IPCrawler execution
- SmartList Engine recommendations with confidence scores
- Terminal-style output with syntax highlighting
- Speed comparison vs traditional methods

## 🤝 Contributing

We welcome contributions! Please see our [contribution guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **🌐 Live Website**: [ipcrawler.io](https://ipcrawler.io)
- **🐙 Main Tool**: [IPCrawler Repository](https://github.com/neur0map/ipcrawler)
- **📖 Documentation**: [ipcrawler.io/work](https://ipcrawler.io/work)
- **🧠 SmartList Info**: [ipcrawler.io/about](https://ipcrawler.io/about)

---

<div align="center">

**Made with ❤️ by the IPCrawler team**

*SmartList Engine - Never Guess Wordlists Again*

</div>


