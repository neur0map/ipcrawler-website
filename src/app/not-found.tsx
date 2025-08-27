import { Column, Heading, Text, Button, Flex } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Under Construction
      </Heading>
      <Text onBackground="neutral-weak">
        This section is under construction. We're building amazing content for IPCrawler.
      </Text>
      <Flex gap="s" marginTop="l">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </Flex>
    </Column>
  );
}
