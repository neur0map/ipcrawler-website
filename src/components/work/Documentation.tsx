import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { DocumentationCard } from "@/components";

interface DocumentationProps {
  range?: [number, number?];
}

export function Documentation({ range }: DocumentationProps) {
  let allDocumentation = getPosts(["src", "app", "work", "documentation"]);

  const sortedDocumentation = allDocumentation.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedDocumentation = range
    ? sortedDocumentation.slice(range[0] - 1, range[1] ?? sortedDocumentation.length)
    : sortedDocumentation;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedDocumentation.map((post, index) => (
        <DocumentationCard
          priority={index < 2}
          key={post.slug}
          href="/under-construction"
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
