import { fetchAPI, getStrapiMedia } from '@/lib/api';
import "./base.css";
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export async function generateMetadata() {
  try {
    const response = await fetchAPI('/global?populate=*');
    const global = response.data;

    if (!global) return {};

    return {
      title: global.siteName,
      description: global.defaultSeo?.metaDescription,
      icons: {
        icon: getStrapiMedia(global.favicon?.url),
      },
    };
  } catch (error) {
    console.error("Error fetching global metadata:", error);
    // Fallback metadata if the CMS is unreachable.
    return {
      title: 'WeGovNYC',
      description: 'Civic technology projects that help New Yorkers.',
    };
  }
}

export default async function RootLayout({ children }) {
  let global = {};
  try {
    // Populate navbar, footer, seo, favicon
    const response = await fetchAPI('/global?populate[defaultSeo][populate]=*&populate[favicon]=true&populate[footer][populate]=socialLinks&populate[navbar][populate]=*');
    global = response.data;
  } catch (error) {
    console.error("Error fetching global data:", error);
  }

  const { footer, navbar } = global || {};

  // Inject UNNYC nav item with dropdown submenu
  const unnycNavItem = {
    id: 'unnyc',
    label: 'UNNYC',
    url: '/unnyc',
    isExternal: false,
    children: [
      { id: 'unnyc-start', label: 'New to Government Open Source', url: '/unnyc/start', isExternal: false },
      { id: 'unnyc-crosswalk', label: 'Why It Matters', url: '/unnyc/crosswalk', isExternal: false },
      { id: 'unnyc-success', label: 'What Success Looks Like', url: '/unnyc/success', isExternal: false },
      { id: 'unnyc-campaign', label: 'Sign the Letter', url: '/unnyc/campaign', isExternal: false },
      { id: 'unnyc-resources', label: 'Resources', url: '/unnyc/resources', isExternal: false },
    ],
  };

  const navbarWithUnnyc = navbar ? (() => {
    const links = [...(navbar.links || [])];
    // Insert UNNYC right after Databook
    const databookIdx = links.findIndex((l) => l.label === 'Databook');
    const insertIdx = databookIdx >= 0 ? databookIdx + 1 : 1;
    links.splice(insertIdx, 0, unnycNavItem);
    return { ...navbar, links };
  })() : navbar;

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="site-wrapper">
            <header className="site-header">
              <Navbar data={navbarWithUnnyc} siteName={global?.siteName}>
                <ThemeToggle />
              </Navbar>
            </header>
            <main>{children}</main>
            <Footer data={footer} siteName={global?.siteName} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
