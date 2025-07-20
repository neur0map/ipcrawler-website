import { Column, Heading, Text, Button, Flex } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Directory Not Found
      </Heading>
      <Text onBackground="neutral-weak">
        Looks like you hit a dead end. Unlike HTB enumeration, this path doesn&apos;t exist. 
        Let SmartList help you find the directories that actually matter.
      </Text>
      <Flex gap="s" marginTop="l">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
        <Button href="/work/smartlist-algorithm" variant="secondary">
          Learn SmartList
        </Button>
      </Flex>
    </Column>
  );
}
