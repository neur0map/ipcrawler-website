# IPCrawler Website

The official website for IPCrawler - an intelligent network reconnaissance orchestrator with SmartList wordlist recommendations.

![IPCrawler](public/images/og/home.jpg)

## Overview

This website showcases IPCrawler's breakthrough SmartList algorithm that eliminates wordlist guesswork through intelligent pattern matching and technology detection.

## Features

- **Modern Design**: Built with Next.js and Once UI design system
- **Dark Theme**: Terminal-inspired aesthetic with green/cyan accents
- **Interactive Documentation**: Comprehensive guide with code examples
- **Changelog Timeline**: Beautiful version history display
- **Responsive**: Optimized for all screen sizes
- **Fast**: Built with performance in mind

## Getting Started

### Prerequisites

- Node.js v18.17+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/neur0map/ipcrawler-website.git
cd ipcrawler-website
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/           # Next.js app directory
│   ├── about/     # About page
│   ├── blog/      # Changelog page
│   ├── work/      # Documentation page
│   └── page.tsx   # Homepage
├── components/    # React components
├── resources/     # Content and configuration
│   ├── content.js # Site content
│   └── once-ui.config.js # Theme configuration
└── styles/        # CSS modules
```

## Configuration

### Content

Edit `src/resources/content.js` to update:
- Site metadata
- Navigation labels
- Page content
- Social links

### Theme

Edit `src/resources/once-ui.config.js` to customize:
- Color scheme
- Typography
- Effects
- Layout options

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Other Platforms

Build for production:
```bash
npm run build
```

The output will be in the `.next` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [IPCrawler Repository](https://github.com/neur0map/ipcrawler)
- [Live Website](https://ipcrawler.io)
- [Documentation](https://ipcrawler.io/work)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues related to:
- IPCrawler tool: [Create an issue](https://github.com/neur0map/ipcrawler/issues)
- Website: [Create an issue](https://github.com/neur0map/ipcrawler-website/issues)