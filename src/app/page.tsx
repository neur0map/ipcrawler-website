import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, CodeBlock, Icon } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Discord } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { HeroVideo } from "@/components/HeroVideo";

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
        <HeroVideo />
      </Flex>

      {/* Free Forever Banner */}
      <RevealFx translateY={8} delay={0.28}>
        <Flex 
          fillWidth 
          paddingY="32" 
          paddingX="24" 
          gap="16" 
          vertical="center" 
          horizontal="center"
          style={{
            background: 'linear-gradient(135deg, var(--brand-alpha-weak) 0%, var(--neutral-alpha-weak) 100%)',
            borderRadius: 'var(--radius-l)',
            border: '1px solid var(--neutral-alpha-weak)',
            position: 'relative',
            overflow: 'hidden'
          }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.5
          }} />
          <Column gap="12" horizontal="center" style={{ position: 'relative', zIndex: 1 }}>
            <Text variant="heading-strong-l" align="center">
              100% Free Forever
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px' }}>
              No premium plans. No paywalls. No hidden costs. 
              <br />
              IPCrawler is MIT licensed and will always be free for everyone.
            </Text>
            <Row gap="16" paddingTop="8">
              <Badge 
                background="brand-alpha-weak" 
                onBackground="brand-strong" 
                textVariant="body-default-s"
                paddingX="16"
                paddingY="8">
                <Row gap="8" vertical="center">
                  <Icon name="github" size="s" />
                  Open Source
                </Row>
              </Badge>
              <Badge 
                background="success-alpha-weak" 
                onBackground="success-strong" 
                textVariant="body-default-s"
                paddingX="16"
                paddingY="8">
                <Row gap="8" vertical="center">
                  <Icon name="check" size="s" />
                  MIT License
                </Row>
              </Badge>
              <Badge 
                background="info-alpha-weak" 
                onBackground="info-strong" 
                textVariant="body-default-s"
                paddingX="16"
                paddingY="8">
                <Row gap="8" vertical="center">
                  <Icon name="shield" size="s" />
                  Privacy First
                </Row>
              </Badge>
            </Row>
          </Column>
        </Flex>
      </RevealFx>

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