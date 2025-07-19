"use client";

import { communityEffects } from "@/resources";
import { Button, Flex, Heading, Text, Background, Column, opacity, SpacingToken } from "@once-ui-system/core";

type CommunityProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Discord = ({ newsletter }: { newsletter: CommunityProps }) => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: communityEffects.effects.mask.x,
          y: communityEffects.effects.mask.y,
          radius: communityEffects.effects.mask.radius,
          cursor: communityEffects.effects.mask.cursor
        }}
        gradient={{
          display: communityEffects.effects.gradient.display,
          opacity: communityEffects.effects.gradient.opacity as opacity,
          x: communityEffects.effects.gradient.x,
          y: communityEffects.effects.gradient.y,
          width: communityEffects.effects.gradient.width,
          height: communityEffects.effects.gradient.height,
          tilt: communityEffects.effects.gradient.tilt,
          colorStart: communityEffects.effects.gradient.colorStart,
          colorEnd: communityEffects.effects.gradient.colorEnd,
        }}
        dots={{
          display: communityEffects.effects.dots.display,
          opacity: communityEffects.effects.dots.opacity as opacity,
          size: communityEffects.effects.dots.size as SpacingToken,
          color: communityEffects.effects.dots.color,
        }}
        grid={{
          display: communityEffects.effects.grid.display,
          opacity: communityEffects.effects.grid.opacity as opacity,
          color: communityEffects.effects.grid.color,
          width: communityEffects.effects.grid.width,
          height: communityEffects.effects.grid.height,
        }}
        lines={{
          display: communityEffects.effects.lines.display,
          opacity: communityEffects.effects.lines.opacity as opacity,
          size: communityEffects.effects.lines.size as SpacingToken,
          thickness: communityEffects.effects.lines.thickness,
          angle: communityEffects.effects.lines.angle,
          color: communityEffects.effects.lines.color,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <Flex fillWidth maxWidth={24} horizontal="center">
        <Button
          href="https://discord.gg/ua2hRhWkSq"
          variant="primary"
          size="l"
          fillWidth
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord Community
        </Button>
      </Flex>
    </Column>
  );
};