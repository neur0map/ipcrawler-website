import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, CodeBlock, Icon } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Discord } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="s" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Flex fillWidth paddingY="24" gap="xl" mobileDirection="column">
        {/* Left side - Text content */}
        <Column flex={3} gap="m" horizontal="start">
          {home.featured.display && (
            <RevealFx translateY={4} delay={0.05} fillWidth horizontal="start" paddingBottom="24">
              <Badge 
                background="brand-alpha-weak" 
                paddingX="12" 
                paddingY="4" 
                onBackground="brand-strong" 
                textVariant="label-default-s" 
                arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          
          <RevealFx translateY={6} delay={0.1} fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          
          <RevealFx translateY={8} delay={0.15} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          
          <RevealFx translateY={4} delay={0.2} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="l"
              weight="default"
              arrowIcon>
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Learn About SmartList
              </Flex>
            </Button>
          </RevealFx>
        </Column>

        {/* Right side - Video */}
        <RevealFx translateY={8} delay={0.25} flex={2} horizontal="center">
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            height: '450px',
            perspective: '1000px',
            padding: '-50px',
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '9% center',
                borderRadius: '20px',
                transform: 'rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
                boxShadow: `
                  0 25px 80px rgba(0, 0, 0, 0.4),
                  0 15px 40px rgba(0, 0, 0, 0.3),
                  0 5px 20px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                border: '1px solid var(--neutral-alpha-weak)',
                opacity: '0.9',
                filter: 'brightness(0.95) contrast(1.1)'
              }}
            >
              <source src="/videos/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Additional shadow layer for more depth */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              right: '-30px',
              bottom: '-30px',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.08))',
              borderRadius: '20px',
              zIndex: -1,
              transform: 'rotateY(-15deg) rotateX(5deg)',
              filter: 'blur(20px)',
              opacity: '0.7',
              transition: 'opacity 1.2s ease-out 0.4s'
            }} />
          </div>
        </RevealFx>
      </Flex>

      {/* Installation */}
      <RevealFx translateY={8} delay={0.3}>
        <Column fillWidth gap="16">
          <Heading variant="heading-strong-m">
            Get Started in 30 Seconds
          </Heading>
          <CodeBlock
            codes={[
              {
                code: `# Clone and install IPCrawler
git clone https://github.com/neur0map/ipcrawler.git
cd ipcrawler
make install`,
                language: "shell",
                label: "Installation"
              }
            ]}
            copyButton={true}
          />
        </Column>
      </RevealFx>

      {/* OS Compatibility */}
      <RevealFx translateY={8} delay={0.35}>
        <Column fillWidth gap="16">
          <Heading variant="heading-strong-m">
            Platform Compatibility
          </Heading>
          <Row gap="24" wrap>
            {/* macOS - Compatible */}
            <Flex vertical="center" gap="8">
              <Icon 
                name="apple" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="4">
                <Text variant="body-strong-s">macOS</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Linux - Compatible */}
            <Flex vertical="center" gap="8">
              <Icon 
                name="linux" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="4">
                <Text variant="body-strong-s">Linux</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Hack The Box - Compatible */}
            <Flex vertical="center" gap="8">
              <Icon 
                name="hackthebox" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="4">
                <Text variant="body-strong-s">Hack The Box</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Windows - Not Compatible */}
            <Flex vertical="center" gap="8">
              <Icon 
                name="windows" 
                size="l" 
                onBackground="neutral-weak" 
              />
              <Column gap="4">
                <Text variant="body-strong-s">Windows</Text>
                <Badge background="danger-weak" onBackground="danger-strong">
                  Not Compatible
                </Badge>
              </Column>
            </Flex>
          </Row>
        </Column>
      </RevealFx>


      {/* Recent Updates */}
      {routes["/blog"] && (
        <RevealFx translateY={8} delay={0.4}>
          <Column fillWidth gap="16" horizontal="center">
            <Heading as="h2" variant="heading-strong-l" style={{ textAlign: 'center' }}>
              Recent Updates
            </Heading>
            <Posts range={[1, 2]} columns="2" />
          </Column>
        </RevealFx>
      )}

      {/* Newsletter */}
      {newsletter.display && (
        <RevealFx translateY={8} delay={0.5}>
          <Discord newsletter={newsletter} />
        </RevealFx>
      )}
    </Column>
  );
}