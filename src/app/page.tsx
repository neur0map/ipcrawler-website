import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, CodeBlock } from "@once-ui-system/core";
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
            <RevealFx fillWidth horizontal="start" paddingBottom="24">
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
          
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          
          <RevealFx delay={0.4} horizontal="start">
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
        <RevealFx translateY="8" delay={0.3} flex={2} horizontal="center">
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            height: '350px',
            perspective: '1200px'
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
              <source src="/videos/hero_video.mov" type="video/mp4" />
              <source src="/videos/hero_video.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            {/* Additional shadow layer for more depth */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              right: '-30px',
              bottom: '-30px',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1))',
              borderRadius: '20px',
              zIndex: -1,
              transform: 'rotateY(-15deg) rotateX(5deg)',
              filter: 'blur(20px)'
            }} />
          </div>
        </RevealFx>
      </Flex>

      {/* Installation */}
      <RevealFx translateY="12" delay={0.5}>
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


      {/* Recent Updates */}
      {routes["/blog"] && (
        <RevealFx translateY="20" delay={0.8}>
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
        <RevealFx translateY="24" delay={1.0}>
          <Discord newsletter={newsletter} />
        </RevealFx>
      )}
    </Column>
  );
}