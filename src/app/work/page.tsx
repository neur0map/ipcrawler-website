import { redirect } from 'next/navigation';

// Temporary redirect to under construction page
export async function generateMetadata() {
  return {
    title: 'Documentation - IPCrawler',
    description: 'IPCrawler documentation is under construction. Check back soon for comprehensive guides and tutorials.',
  };
}

export default function Documentation() {
  // Temporarily redirect to under construction page
  redirect('/under-construction');
}