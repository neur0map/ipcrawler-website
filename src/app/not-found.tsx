import { Column, Heading, Text, Button, Flex } from "@once-ui-system/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Directory Not Found
      </Heading>
      <Column maxWidth="32" alignSelf="center">
        <Text onBackground="neutral-weak" align="center">
          Looks like you hit a dead end. Unlike HTB enumeration, this path doesn&apos;t exist. 
          Let SmartList help you find the directories that actually matter.
        </Text>
      </Column>
      <Flex gap="s" marginTop="l">
        <Button asChild variant="primary">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/work/smartlist-algorithm">
            Learn SmartList
          </Link>
        </Button>
      </Flex>
    </Column>
  );
}
