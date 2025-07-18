import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, CodeBlock } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
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
      <Column fillWidth paddingY="24" gap="m" horizontal="center">
        {home.featured.display && (
          <RevealFx fillWidth horizontal="center" paddingBottom="24">
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
                language: "bash",
                label: "Installation"
              }
            ]}
            copyButton={true}
          />
        </Column>
      </RevealFx>

      {/* Featured SmartList */}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
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
          <Mailchimp newsletter={newsletter} />
        </RevealFx>
      )}
    </Column>
  );
}