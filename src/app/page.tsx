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
      <Flex fillWidth paddingY="l" gap="xl" mobileDirection="column" vertical="center">
        {/* Left side - Text content */}
        <Column flex={1} gap="m" horizontal="start">
          {home.featured.display && (
            <RevealFx translateY={4} delay={0.05} fillWidth horizontal="start" paddingBottom="24">
              <Badge 
                background="brand-alpha-weak" 
                paddingX="m" 
                paddingY="xs" 
                onBackground="brand-strong" 
                textVariant="label-default-s" 
                arrow={false}
                href={home.featured.href}>
                <Row paddingY="xs">{home.featured.title}</Row>
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
              <Flex gap="xs" vertical="center" paddingRight="xs">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Learn About IPCrawler
              </Flex>
            </Button>
          </RevealFx>
        </Column>

        {/* Right side - Video */}
        <HeroVideo key="hero-video-demo" />
      </Flex>

      {/* Active Development Banner */}
      <RevealFx translateY={8} delay={0.25}>
        <Flex 
          fillWidth 
          paddingY="l" 
          paddingX="l" 
          gap="m" 
          vertical="center" 
          horizontal="center"
          style={{
            background: 'linear-gradient(135deg, var(--warning-alpha-weak) 0%, var(--warning-alpha-medium) 100%)',
            borderRadius: 'var(--radius-l)',
            border: '1px solid var(--warning-alpha-medium)',
            position: 'relative',
            overflow: 'hidden'
          }}>
          <Column gap="m" horizontal="center" style={{ position: 'relative', zIndex: 1 }}>
            <Row gap="xs" vertical="center">
              <Icon name="warning" size="m" onBackground="warning-strong" />
              <Text variant="heading-strong-m" onBackground="warning-strong">
                Active Development
              </Text>
            </Row>
            <Text variant="body-default-m" onBackground="warning-weak" align="center" style={{ maxWidth: '600px' }}>
              IPCrawler is under constant development. Aiming for <strong>1-2 new plugins per week</strong> (fully tested) 
              plus at least <strong>1 plugin every two weeks</strong> based on HTB retired machines.
            </Text>
            <Row gap="m" paddingTop="xs">
              <Badge 
                background="warning-alpha-weak" 
                onBackground="warning-strong" 
                textVariant="body-default-s"
                paddingX="m"
                paddingY="xs">
                <Row gap="xs" vertical="center">
                  <Icon name="code" size="s" />
                  Weekly Updates
                </Row>
              </Badge>
              <Badge 
                background="info-alpha-weak" 
                onBackground="info-strong" 
                textVariant="body-default-s"
                paddingX="m"
                paddingY="xs">
                <Row gap="xs" vertical="center">
                  <Icon name="cube" size="s" />
                  HTB-Tested
                </Row>
              </Badge>
            </Row>
          </Column>
        </Flex>
      </RevealFx>

      {/* Free Forever Banner */}
      <RevealFx translateY={8} delay={0.32}>
        <Flex 
          fillWidth 
          paddingY="xl" 
          paddingX="l" 
          gap="m" 
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
          <Column gap="m" horizontal="center" style={{ position: 'relative', zIndex: 1 }}>
            <Text variant="heading-strong-l" align="center">
              100% Free Forever
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px' }}>
              No premium plans. No paywalls. No hidden costs. 
              <br />
              IPCrawler is MIT licensed and will always be free for everyone.
            </Text>
            <Row gap="m" paddingTop="xs">
              <Badge 
                background="brand-alpha-weak" 
                onBackground="brand-strong" 
                textVariant="body-default-s"
                paddingX="m"
                paddingY="xs">
                <Row gap="xs" vertical="center">
                  <Icon name="github" size="s" />
                  Open Source
                </Row>
              </Badge>
              <Badge 
                background="success-alpha-weak" 
                onBackground="success-strong" 
                textVariant="body-default-s"
                paddingX="m"
                paddingY="xs">
                <Row gap="xs" vertical="center">
                  <Icon name="check" size="s" />
                  MIT License
                </Row>
              </Badge>
              <Badge 
                background="info-alpha-weak" 
                onBackground="info-strong" 
                textVariant="body-default-s"
                paddingX="m"
                paddingY="xs">
                <Row gap="xs" vertical="center">
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
        <Column fillWidth gap="m">
          <Heading variant="heading-strong-m">
            Get Started in 30 Seconds
          </Heading>
          <div style={{
            background: 'var(--neutral-alpha-weak)',
            border: '1px solid var(--neutral-alpha-medium)',
            borderRadius: '12px',
            padding: '20px',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.6',
            position: 'relative'
          }}>
            <div style={{ 
              color: 'var(--neutral-weak)', 
              marginBottom: '4px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Installation
            </div>
            <div style={{ color: 'var(--neutral-on-background-strong)' }}>
              # Clone and build IPCrawler<br/>
              git clone https://github.com/ipcrawler/ipcrawler.git<br/>
              cd ipcrawler<br/>
              make build
            </div>
          </div>
        </Column>
      </RevealFx>

      {/* OS Compatibility */}
      <RevealFx translateY={8} delay={0.35}>
        <Column fillWidth gap="m">
          <Heading variant="heading-strong-m">
            Platform Compatibility
          </Heading>
          <Row gap="l" wrap>
            {/* macOS - Compatible */}
            <Flex vertical="center" gap="xs">
              <Icon 
                name="apple" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="xs">
                <Text variant="body-strong-s">macOS</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Linux - Compatible */}
            <Flex vertical="center" gap="xs">
              <Icon 
                name="linux" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="xs">
                <Text variant="body-strong-s">Linux</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Hack The Box - Compatible */}
            <Flex vertical="center" gap="xs">
              <Icon 
                name="hackthebox" 
                size="l" 
                onBackground="brand-strong" 
              />
              <Column gap="xs">
                <Text variant="body-strong-s">Hack The Box</Text>
                <Badge background="success-weak" onBackground="success-strong">
                  Compatible
                </Badge>
              </Column>
            </Flex>

            {/* Windows - Not Compatible */}
            <Flex vertical="center" gap="xs">
              <Icon 
                name="windows" 
                size="l" 
                onBackground="neutral-weak" 
              />
              <Column gap="xs">
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