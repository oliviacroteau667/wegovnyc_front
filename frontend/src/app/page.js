import SectionRenderer from '@/components/sections/SectionRenderer';
import { FROZEN_PAGES } from '@/content/frozen-pages';

export const revalidate = 3600; // Revalidate every hour

// Home is now a frozen marketing page (hybrid CMS move): its section content lives
// in src/content/frozen-pages.js rather than Strapi. The `sections.articles` block
// inside it still pulls the latest posts live from Payload via the adapter.
export default function Home() {
  const page = FROZEN_PAGES.home;

  if (!page || !page.content) {
    return <div>Loading... (or no Home page found)</div>;
  }

  return (
    <div>
      <SectionRenderer sections={page.content} />
    </div>
  );
}
