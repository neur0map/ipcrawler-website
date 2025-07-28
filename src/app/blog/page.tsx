import { Column, Heading, Meta, Schema, Flex, Text, Badge, RevealFx, Icon, SmartLink, Tag } from "@once-ui-system/core";
import { Discord } from "@/components";
import { baseURL, blog, person, newsletter } from "@/resources";
import { getPosts } from '@/utils/utils';
import { formatDate } from '@/utils/formatDate';

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

interface ChangelogEntryProps {
  readonly post: any;
  readonly index: number;
}

function ChangelogEntry({ post, index }: ChangelogEntryProps) {
  const isLatest = index === 0;
  
  return (
    <RevealFx translateY="8" delay={index * 0.1}>
      <SmartLink
        fillWidth
        unstyled
        href={`/blog/${post.slug}`}
        style={{ textDecoration: 'none' }}>
        <Flex
          fillWidth
          direction="column"
          gap="16"
          padding="24"
          radius="l"
          border="neutral-alpha-weak"
          background="page"
          className="hover:border-brand-alpha-medium transition-all duration-300">
          
          {/* Header */}
          <Flex fillWidth horizontal="space-between" vertical="start" wrap>
            <Column gap="4" flex={1}>
              <Flex gap="12" vertical="center" wrap>
                <Heading
                  as="h2"
                  variant="heading-strong-l"
                  wrap="balance">
                  {post.metadata.title}
                </Heading>
                {isLatest && (
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="8"
                    paddingY="2"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    arrow={false}>
                    Latest
                  </Badge>
                )}
              </Flex>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak">
                {formatDate(post.metadata.publishedAt, false)}
              </Text>
            </Column>
            
            {post.metadata.tag && (
              <Tag
                label={post.metadata.tag}
                variant={post.metadata.tag === 'Release' ? 'brand' : 'neutral'}
              />
            )}
          </Flex>
          
          {/* Summary */}
          <Text
            variant="body-default-m"
            onBackground="neutral-weak">
            {post.metadata.summary}
          </Text>
          
          {/* Read more indicator */}
          <Flex gap="8" vertical="center">
            <Text
              variant="label-default-s"
              onBackground="brand-weak">
              Read full changelog
            </Text>
            <Icon
              name="arrowRight"
              size="xs"
              onBackground="brand-weak"
            />
          </Flex>
        </Flex>
      </SmartLink>
    </RevealFx>
  );
}

export default function Blog() {
  const allPosts = getPosts(['src', 'app', 'blog', 'posts']);
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header */}
      <RevealFx translateY="4">
        <Column gap="12" horizontal="center" style={{ textAlign: 'center' }}>
          <Heading variant="display-strong-s" wrap="balance">
            {blog.title}
          </Heading>
          <Text 
            variant="heading-default-m"
            onBackground="neutral-weak"
            wrap="balance">
            {blog.description}
          </Text>
        </Column>
      </RevealFx>

      {/* Stats */}
      <RevealFx translateY="8" delay={0.1}>
        <Flex 
          fillWidth 
          horizontal="center" 
          gap="24" 
          padding="20"
          radius="l"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          wrap>
          <Column gap="4" horizontal="center">
            <Text variant="display-strong-xs">
              {sortedPosts.length}
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Releases
            </Text>
          </Column>
          <Column gap="4" horizontal="center">
            <Text variant="display-strong-xs">
              v0.1.1-alpha-4
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Latest
            </Text>
          </Column>
          <Column gap="4" horizontal="center">
            <Text variant="display-strong-xs">
              SmartList
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Key Feature
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      {/* Changelog entries */}
      <RevealFx translateY="12" delay={0.2}>
        <Column fillWidth gap="xl">
          {sortedPosts.map((post, index) => (
            <ChangelogEntry
              key={post.slug}
              post={post}
              index={index}
            />
          ))}
        </Column>
      </RevealFx>

      {/* Subscribe */}
      {newsletter.display && (
        <RevealFx translateY="16" delay={0.4}>
          <Discord newsletter={newsletter} />
        </RevealFx>
      )}
    </Column>
  );
}