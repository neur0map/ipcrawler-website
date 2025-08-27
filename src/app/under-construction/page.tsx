import React from "react";
import { Heading, Flex, Text, Button, Column, RevealFx, Row, Icon, Badge } from "@once-ui-system/core";
import { home, person, baseURL } from "@/resources";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <Column maxWidth="s" gap="xl" horizontal="center">
      {/* Hero Section */}
      <Flex fillWidth paddingY="xl" vertical="center" horizontal="center">
        <Column gap="xl" horizontal="center" maxWidth="s">
          
          {/* Construction Icon & Animation */}
          <RevealFx translateY={8} delay={0.1}>
            <div style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              margin: '0 auto',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.2) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(255, 193, 7, 0.3)'
              }}>
                <div style={{
                  fontSize: '50px'
                }}>
                  🚧
                </div>
              </div>
              
              {/* Floating tools */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '10px',
                fontSize: '24px'
              }}>
                ⚡
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: '15px',
                fontSize: '20px'
              }}>
                🔧
              </div>
            </div>
          </RevealFx>

          {/* Main Heading */}
          <RevealFx translateY={12} delay={0.2}>
            <Heading variant="display-strong-xl" align="center">
              Under Construction
            </Heading>
          </RevealFx>

          {/* Subtitle */}
          <RevealFx translateY={8} delay={0.25}>
            <Text variant="heading-default-l" onBackground="neutral-weak" align="center">
              We&apos;re building something amazing for you
            </Text>
          </RevealFx>

          {/* Code Block */}
          <RevealFx translateY={8} delay={0.3}>
            <div style={{
              background: 'var(--neutral-alpha-weak)',
              border: '1px solid var(--neutral-alpha-medium)',
              borderRadius: '16px',
              padding: '24px',
              fontFamily: 'monospace',
              fontSize: '14px',
              lineHeight: '1.8',
              maxWidth: '500px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Terminal header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--neutral-alpha-medium)'
              }}>
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ff5f56' 
                }}></div>
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ffbd2e' 
                }}></div>
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: '#27ca3f' 
                }}></div>
                <Text variant="body-default-s" style={{ marginLeft: '12px', color: 'var(--neutral-weak)' }}>
                  terminal
                </Text>
              </div>

              {/* Code content */}
              <div style={{ color: 'var(--neutral-on-background-strong)' }}>
                <div style={{ color: 'var(--neutral-weak)' }}>$ cd ipcrawler-website</div>
                <div style={{ color: 'var(--neutral-weak)' }}>$ git status</div>
                <div style={{ color: 'var(--brand-strong)', marginTop: '8px' }}>
                  On branch main<br/>
                  Your branch is ahead of &apos;origin/main&apos; by 47 commits.
                </div>
                <div style={{ color: 'var(--warning-strong)', marginTop: '8px' }}>
                  Changes to be committed:<br/>
                  &nbsp;&nbsp;new file:   docs/<br/>
                  &nbsp;&nbsp;new file:   blog/<br/>
                  &nbsp;&nbsp;modified:   features/
                </div>
                <div style={{ color: 'var(--neutral-weak)', marginTop: '12px' }}>
                  $ npm run build
                </div>
                <div style={{ 
                  color: 'var(--success-strong)', 
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--success-strong)'
                  }}></div>
                  Building amazing docs & blog...
                </div>
              </div>
            </div>
          </RevealFx>

          {/* Status Badges */}
          <RevealFx translateY={8} delay={0.4}>
            <Row gap="m" wrap horizontal="center">
              <Badge 
                background="warning-alpha-weak" 
                onBackground="warning-strong">
                <Row gap="xs" vertical="center">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--warning-strong)'
                  }}></div>
                  In Progress
                </Row>
              </Badge>
              
              <Badge 
                background="brand-alpha-weak" 
                onBackground="brand-strong">
                <Row gap="xs" vertical="center">
                  <Icon name="code" size="xs" />
                  Coming Soon
                </Row>
              </Badge>
              
              <Badge 
                background="info-alpha-weak" 
                onBackground="info-strong">
                <Row gap="xs" vertical="center">
                  <Icon name="time" size="xs" />
                  ETA: Soon™
                </Row>
              </Badge>
            </Row>
          </RevealFx>

          {/* Description */}
          <RevealFx translateY={8} delay={0.45}>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '480px' }}>
              We&apos;re crafting comprehensive documentation and insightful blog posts about IPCrawler. 
              Check back soon for guides, tutorials, and the latest updates on reconnaissance automation.
            </Text>
          </RevealFx>

          {/* Back to Home Button */}
          <RevealFx translateY={8} delay={0.5}>
            <Link href="/">
              <Button
                variant="primary"
                size="l"
                weight="default"
                arrowIcon>
                <Flex gap="xs" vertical="center">
                  <Icon name="home" size="s" />
                  Back to Home
                </Flex>
              </Button>
            </Link>
          </RevealFx>

          {/* Progress Indicator */}
          <RevealFx translateY={8} delay={0.55}>
            <div style={{
              width: '300px',
              height: '8px',
              backgroundColor: 'var(--neutral-alpha-weak)',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                width: '60%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--brand-strong) 0%, var(--brand-medium) 100%)',
                borderRadius: '4px'
              }}></div>
            </div>
            <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={{ marginTop: '8px' }}>
              Progress: 60% complete
            </Text>
          </RevealFx>

        </Column>
      </Flex>

    </Column>
  );
}

export const metadata = {
  title: 'Under Construction - IPCrawler',
  description: 'This section is under construction. We&apos;re building amazing documentation and blog content for IPCrawler.',
  robots: {
    index: false,
    follow: true,
  },
};