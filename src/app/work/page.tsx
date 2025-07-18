import { 
  Column, 
  Heading, 
  Text, 
  Meta, 
  Schema, 
  Flex, 
  Badge, 
  RevealFx, 
  CodeBlock,
  Button
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Documentation() {
  const structure = [
    {
      title: "Getting Started",
      display: true,
      items: ["Installation", "Quick Start", "System Requirements"],
    },
    {
      title: "SmartList Algorithm",
      display: true,
      items: ["How It Works", "Technology Detection", "Confidence Scoring"],
    },
    {
      title: "Usage Examples",
      display: true,
      items: ["Basic Scanning", "Advanced Options", "Output Formats"],
    },
    {
      title: "API Reference",
      display: true,
      items: ["Command Line Options", "JSON Output", "Exit Codes"],
    },
    {
      title: "Troubleshooting",
      display: true,
      items: ["Common Issues", "Performance Tips", "FAQ"],
    },
  ];

  const tableOfContent = {
    display: true,
    subItems: true,
  };

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Table of Contents */}
      <Column
        left="0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        position="fixed"
        paddingLeft="24"
        gap="32"
        hide="s"
      >
        <TableOfContents structure={structure} about={{ tableOfContent }} />
      </Column>

      {/* Header Section */}
      <RevealFx translateY={4}>
        <Column gap="16" paddingBottom="32">
          <RevealFx translateY={2} delay={0.05}>
            <Flex gap="12" wrap>
              <Badge
                background="brand-alpha-weak"
                paddingX="8"
                paddingY="2"
                onBackground="brand-strong"
                textVariant="label-default-xs"
                className="hover:scale-105 transition-transform duration-200">
                v0.1.0-alpha
              </Badge>
              <Badge
                background="neutral-alpha-weak"
                paddingX="8"
                paddingY="2"
                onBackground="neutral-strong"
                textVariant="label-default-xs"
                className="hover:scale-105 transition-transform duration-200">
                Documentation
              </Badge>
            </Flex>
          </RevealFx>
          
          <RevealFx translateY={6} delay={0.1}>
            <Heading variant="display-strong-s" wrap="balance">
              IPCrawler Documentation
            </Heading>
          </RevealFx>
          
          <RevealFx translateY={8} delay={0.15}>
            <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
              Complete guide to intelligent network reconnaissance with SmartList wordlist recommendations
            </Text>
          </RevealFx>
        </Column>
      </RevealFx>

      {/* Getting Started Section */}
      <RevealFx translateY={8} delay={0.1}>
        <Column id="Getting Started" gap="24" paddingBottom="48">
          <Heading as="h2" variant="heading-strong-l">
            Getting Started
          </Heading>
          
          <Text variant="body-default-l" onBackground="neutral-medium">
            IPCrawler is an intelligent network reconnaissance orchestrator that automates the tedious parts of enumeration while making smart decisions about wordlist selection.
          </Text>

          {/* Installation */}
          <RevealFx translateY={4} delay={0.05}>
            <Column id="Installation" gap="16">
              <Heading as="h3" variant="heading-strong-m">
                Installation
              </Heading>
              
              <Text variant="body-default-m" onBackground="neutral-medium">
                Install IPCrawler with these simple commands:
              </Text>
              
              <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
                <CodeBlock
                  codes={[
                    {
                      code: `# Clone the repository
git clone https://github.com/neur0map/ipcrawler.git
cd ipcrawler

# Install dependencies and setup
make install

# Verify installation
python3 ipcrawler.py --version`,
                      language: "shell",
                      label: "Installation"
                    }
                  ]}
                  copyButton={true}
                />
              </div>
            </Column>
          </RevealFx>

          {/* Quick Start */}
          <RevealFx translateY={4} delay={0.1}>
            <Column id="Quick Start" gap="16">
              <Heading as="h3" variant="heading-strong-m">
                Quick Start
              </Heading>
              
              <Text variant="body-default-m" onBackground="neutral-medium">
                Run your first scan in under 30 seconds:
              </Text>
              
              <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
                <CodeBlock
                  codes={[
                    {
                      code: `# Basic scan
python3 ipcrawler.py 10.10.10.123

# Enhanced scan with sudo (recommended)
sudo python3 ipcrawler.py target.com

# Scan with specific output directory
python3 ipcrawler.py target.com --output /path/to/results`,
                      language: "shell",
                      label: "Basic Usage"
                    }
                  ]}
                  copyButton={true}
                />
              </div>
            </Column>
          </RevealFx>

          {/* System Requirements */}
          <Column id="System Requirements" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              System Requirements
            </Heading>
            
            <Flex direction="column" gap="12">
              <Text variant="body-default-m" onBackground="neutral-medium">
                <strong>Required:</strong>
              </Text>
              <Text variant="body-default-m" onBackground="neutral-medium" paddingLeft="16">
                • Python 3.6 or higher<br />
                • nmap (for port scanning)<br />
                • gobuster (for directory enumeration)<br />
                • curl (for HTTP requests)
              </Text>
              
              <Text variant="body-default-m" onBackground="neutral-medium">
                <strong>Recommended:</strong>
              </Text>
              <Text variant="body-default-m" onBackground="neutral-medium" paddingLeft="16">
                • Linux/macOS (tested on Kali, Parrot, Ubuntu)<br />
                • 4GB+ RAM for large scans<br />
                • SecLists wordlist collection<br />
                • sudo privileges for enhanced scanning
              </Text>
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* SmartList Algorithm Section */}
      <RevealFx translateY={8} delay={0.2}>
        <Column id="SmartList Algorithm" gap="24" paddingBottom="48">
          <Heading as="h2" variant="heading-strong-l">
            SmartList Algorithm
          </Heading>
          
          <Text variant="body-default-l" onBackground="neutral-medium">
            The SmartList algorithm uses a three-tier architecture to intelligently select wordlists based on discovered services. 
            It combines a port database, rule-based scoring, and a SecLists catalog to provide context-aware recommendations.
          </Text>

          {/* How It Works */}
          <Column id="How It Works" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              How It Works
            </Heading>
            
            <Text variant="body-default-m" onBackground="neutral-medium">
              SmartList uses a hierarchical 5-level rule system to select the best wordlists:
            </Text>
            
            <Flex direction="column" gap="16" paddingLeft="16">
              <RevealFx translateY={3} delay={0.05}>
                <Flex gap="12" vertical="start">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    className="hover:scale-110 transition-all duration-200 hover:shadow-md">
                    1
                  </Badge>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    <strong>Exact Match Rules:</strong> Checks for specific technology + port combinations (Score: 1.0)
                  </Text>
                </Flex>
              </RevealFx>
              
              <RevealFx translateY={3} delay={0.1}>
                <Flex gap="12" vertical="start">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    className="hover:scale-110 transition-all duration-200 hover:shadow-md">
                    2
                  </Badge>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    <strong>Technology Category Rules:</strong> Groups similar technologies like CMS, databases (Score: 0.8)
                  </Text>
                </Flex>
              </RevealFx>
              
              <RevealFx translateY={3} delay={0.15}>
                <Flex gap="12" vertical="start">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    className="hover:scale-110 transition-all duration-200 hover:shadow-md">
                    3
                  </Badge>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    <strong>Port Category Rules:</strong> Port-based categorization (web, database, etc.) (Score: 0.6)
                  </Text>
                </Flex>
              </RevealFx>
              
              <RevealFx translateY={3} delay={0.2}>
                <Flex gap="12" vertical="start">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    className="hover:scale-110 transition-all duration-200 hover:shadow-md">
                    4
                  </Badge>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    <strong>Service Keywords:</strong> Matches keywords in service descriptions (Score: 0.5)
                  </Text>
                </Flex>
              </RevealFx>
              
              <RevealFx translateY={3} delay={0.25}>
                <Flex gap="12" vertical="start">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    className="hover:scale-110 transition-all duration-200 hover:shadow-md">
                    5
                  </Badge>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    <strong>Generic Fallback:</strong> Basic wordlists when no specific rules match (Score: 0.4)
                  </Text>
                </Flex>
              </RevealFx>
            </Flex>
          </Column>

          {/* Technology Detection */}
          <Column id="Technology Detection" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Technology Detection
            </Heading>
            
            <Text variant="body-default-m" onBackground="neutral-medium">
              SmartList uses three tiers: Port Database (context), Rule-based Scorer (logic), and SecLists Catalog (data):
            </Text>
            
            <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
              <CodeBlock
                codes={[
                  {
                    code: `# Example: WordPress Detection
SmartList Recommendations for target.com:443 (WordPress):

HIGH Confidence:
  📁 /usr/share/seclists/Discovery/Web-Content/CMS/wordpress.txt
  📁 /usr/share/seclists/Discovery/Web-Content/CMS/wp-plugins.txt
  
MEDIUM Confidence:  
  📁 /usr/share/seclists/Discovery/Web-Content/common.txt
  
Reasoning: WordPress 5.8 detected on HTTPS, CMS-specific wordlists
recommended over generic web content lists.`,
                    language: "plaintext",
                    label: "SmartList Output"
                  }
                ]}
                copyButton={true}
              />
            </div>
          </Column>

          {/* Confidence Scoring */}
          <Column id="Confidence Scoring" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Confidence Scoring
            </Heading>
            
            <Text variant="body-default-m" onBackground="neutral-medium">
              Confidence levels are determined by the highest scoring rule that matches:
            </Text>
            
            <Flex direction="column" gap="12" paddingLeft="16">
              <Text variant="body-default-m" onBackground="neutral-medium">
                • <strong>HIGH:</strong> Exact matches or score ≥ 0.8 (precise technology + port combinations)<br />
                • <strong>MEDIUM:</strong> Score ≥ 0.6 (technology categories or port-based rules)<br />
                • <strong>LOW:</strong> Score &lt; 0.6 or fallback used (generic wordlists when no specific rules match)
              </Text>
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* Usage Examples Section */}
      <RevealFx translateY={8} delay={0.3}>
        <Column id="Usage Examples" gap="24" paddingBottom="48">
          <Heading as="h2" variant="heading-strong-l">
            Usage Examples
          </Heading>

          {/* Basic Scanning */}
          <Column id="Basic Scanning" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Basic Scanning
            </Heading>
            
            <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
              <CodeBlock
                codes={[
                  {
                    code: `# Single target scan
python3 ipcrawler.py 192.168.1.100

# Domain scan
python3 ipcrawler.py example.com

# Subnet scan
python3 ipcrawler.py 192.168.1.0/24`,
                    language: "shell",
                    label: "Basic Commands"
                  }
                ]}
                copyButton={true}
              />
            </div>
          </Column>

          {/* Advanced Options */}
          <Column id="Advanced Options" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Advanced Options
            </Heading>
            
            <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
              <CodeBlock
                codes={[
                  {
                    code: `# Custom output directory
python3 ipcrawler.py target.com --output /custom/path

# Skip specific phases
python3 ipcrawler.py target.com --skip-http

# Custom wordlist directory
python3 ipcrawler.py target.com --wordlists /custom/wordlists

# Verbose output
python3 ipcrawler.py target.com --verbose

# JSON only output
python3 ipcrawler.py target.com --json-only`,
                    language: "shell",
                    label: "Advanced Usage"
                  }
                ]}
                copyButton={true}
              />
            </div>
          </Column>

          {/* Output Formats */}
          <Column id="Output Formats" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Output Formats
            </Heading>
            
            <Text variant="body-default-m" onBackground="neutral-medium">
              IPCrawler generates multiple output formats for different use cases:
            </Text>
            
            <Flex direction="column" gap="12" paddingLeft="16">
              <Text variant="body-default-m" onBackground="neutral-medium">
                • <strong>scan_results.json:</strong> Machine-readable data for tool integration<br />
                • <strong>scan_report.txt:</strong> Human-friendly summary<br />
                • <strong>scan_report.html:</strong> Interactive web view with dark theme<br />
                • <strong>commands.txt:</strong> Exact commands executed for audit trail
              </Text>
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* API Reference Section */}
      <RevealFx translateY={8} delay={0.4}>
        <Column id="API Reference" gap="24" paddingBottom="48">
          <Heading as="h2" variant="heading-strong-l">
            API Reference
          </Heading>

          {/* Command Line Options */}
          <Column id="Command Line Options" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Command Line Options
            </Heading>
            
            <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
              <CodeBlock
                codes={[
                  {
                    code: `python3 ipcrawler.py [target] [options]

Required:
  target                Target IP, domain, or CIDR range

Options:
  -h, --help           Show help message
  -v, --version        Show version number
  -o, --output DIR     Custom output directory
  -w, --wordlists DIR  Custom wordlist directory
  --skip-http          Skip HTTP intelligence phase
  --skip-smartlist     Skip SmartList recommendations
  --json-only          Output JSON only (no TXT/HTML)
  --verbose            Enable verbose output
  --threads N          Number of threads (default: 10)
  --timeout N          Request timeout in seconds (default: 10)`,
                    language: "plaintext",
                    label: "Command Line Reference"
                  }
                ]}
                copyButton={true}
              />
            </div>
          </Column>

          {/* JSON Output */}
          <Column id="JSON Output" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              JSON Output Format
            </Heading>
            
            <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
              <CodeBlock
                codes={[
                  {
                    code: `{
  "scan_metadata": {
    "version": "0.1.0-alpha",
    "target": "10.10.10.123",
    "start_time": "2024-11-20T10:30:00Z",
    "duration": "127.3s",
    "phases_completed": 4
  },
  "hosts": [
    {
      "ip": "10.10.10.123",
      "hostname": "target.htb",
      "state": "up",
      "ports": [
        {
          "port": 80,
          "protocol": "tcp",
          "state": "open",
          "service": "http",
          "version": "Apache httpd 2.4.41",
          "banner": "Apache/2.4.41 (Ubuntu)"
        }
      ]
    }
  ],
  "smartlist_recommendations": {
    "high_confidence": [
      {
        "wordlist": "/usr/share/seclists/Discovery/Web-Content/CMS/wordpress.txt",
        "reason": "WordPress 5.8 detected",
        "confidence": 95
      }
    ]
  }
}`,
                    language: "json",
                    label: "JSON Structure"
                  }
                ]}
                copyButton={true}
              />
            </div>
          </Column>

          {/* Exit Codes */}
          <Column id="Exit Codes" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Exit Codes
            </Heading>
            
            <Flex direction="column" gap="12" paddingLeft="16">
              <Text variant="body-default-m" onBackground="neutral-medium">
                • <strong>0:</strong> Success - scan completed normally<br />
                • <strong>1:</strong> General error - check error messages<br />
                • <strong>2:</strong> Invalid arguments - check command syntax<br />
                • <strong>3:</strong> Target unreachable - network connectivity issue<br />
                • <strong>4:</strong> Permission denied - try running with sudo<br />
                • <strong>5:</strong> Missing dependencies - install required tools
              </Text>
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* Troubleshooting Section */}
      <RevealFx translateY={8} delay={0.5}>
        <Column id="Troubleshooting" gap="24" paddingBottom="48">
          <Heading as="h2" variant="heading-strong-l">
            Troubleshooting
          </Heading>

          {/* Common Issues */}
          <Column id="Common Issues" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Common Issues
            </Heading>
            
            <Flex direction="column" gap="16">
              <Column gap="8">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  &quot;Permission denied&quot; errors
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Run with sudo for enhanced scanning capabilities:
                </Text>
                <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
                  <CodeBlock
                    codes={[
                      {
                        code: "sudo python3 ipcrawler.py target.com",
                        language: "shell",
                        label: "Solution"
                      }
                    ]}
                    copyButton={true}
                  />
                </div>
              </Column>
              
              <Column gap="8">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  &quot;Command not found&quot; errors
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Install missing dependencies:
                </Text>
                <div className="hover:scale-[1.01] transition-transform duration-300 hover:shadow-lg">
                  <CodeBlock
                    codes={[
                      {
                        code: `# Ubuntu/Debian
sudo apt update && sudo apt install nmap gobuster curl

# macOS
brew install nmap gobuster curl`,
                        language: "shell",
                        label: "Install Dependencies"
                      }
                    ]}
                    copyButton={true}
                  />
                </div>
              </Column>
            </Flex>
          </Column>

          {/* Performance Tips */}
          <Column id="Performance Tips" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              Performance Tips
            </Heading>
            
            <Flex direction="column" gap="12" paddingLeft="16">
              <Text variant="body-default-m" onBackground="neutral-medium">
                • Use <strong>sudo</strong> for faster SYN scanning<br />
                • Adjust <strong>--threads</strong> based on your system (default: 10)<br />
                • Use <strong>--skip-http</strong> for faster port-only scans<br />
                • Set custom <strong>--timeout</strong> for slow networks<br />
                • Run on SSD storage for better I/O performance
              </Text>
            </Flex>
          </Column>

          {/* FAQ */}
          <Column id="FAQ" gap="16">
            <Heading as="h3" variant="heading-strong-m">
              FAQ
            </Heading>
            
            <Flex direction="column" gap="16">
              <Column gap="8">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  How does SmartList compare to manual wordlist selection?
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  SmartList achieves 95% accuracy in wordlist recommendations compared to ~20% success rate with manual guessing, saving hours of enumeration time.
                </Text>
              </Column>
              
              <Column gap="8">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  Can I use custom wordlists?
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Yes! Use <code>--wordlists /path/to/custom</code> to specify a custom directory. SmartList will analyze and recommend from your wordlists.
                </Text>
              </Column>
              
              <Column gap="8">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  Is IPCrawler detected by IDS/IPS systems?
                </Text>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  IPCrawler uses optimized scanning techniques to minimize detection. Running with sudo enables SYN stealth scanning for better evasion.
                </Text>
              </Column>
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* Footer CTA */}
      <RevealFx translateY={12} delay={0.6}>
        <Column gap="24" paddingY="32" horizontal="center" style={{ textAlign: 'center' }}>
          <Heading variant="heading-strong-l">
            Ready to get started?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Download IPCrawler and experience intelligent reconnaissance
          </Text>
          <div className="hover:scale-105 transition-transform duration-200">
            <Button
              href="https://github.com/neur0map/ipcrawler"
              variant="primary"
              size="l"
              suffixIcon="arrowUpRightFromSquare">
              Download on GitHub
            </Button>
          </div>
        </Column>
      </RevealFx>
    </Column>
  );
}