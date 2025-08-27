import { redirect } from 'next/navigation';

// Temporary redirect to under construction page
export async function generateMetadata() {
  return {
    title: 'Blog - IPCrawler',
    description: 'IPCrawler blog is under construction. Check back soon for updates and insights.',
  };
}

export default function Blog() {
  // Temporarily redirect to under construction page
  redirect('/under-construction');
}