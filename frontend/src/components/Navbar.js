"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Main site navigation with an optional in-flow submenu bar.
 * A nav link with a `children` array renders a secondary nav that is shown
 * exactly when that link's section is active (route-driven, not click-toggled):
 * it appears on the section's pages and is hidden everywhere else.
 */
export default function Navbar({ data, siteName, children }) {
    const pathname = usePathname();

    // Mobile menu drawer open/closed. Hidden by CSS above the breakpoint, so
    // this only has a visible effect on narrow viewports.
    const [menuOpen, setMenuOpen] = useState(false);

    // Close the drawer on route change (covers path-based links; hash links on
    // the same page are closed by the per-link onClick below).
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Let Escape close the drawer while it's open.
    useEffect(() => {
        if (!menuOpen) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    // On mobile the subnav is a single scrollable line; keep the active chip
    // centered on route change. Only runs when the subnav actually overflows
    // (i.e. mobile) and scrolls the container's own scrollLeft, so it can
    // never move the page vertically.
    useEffect(() => {
        const container = document.querySelector('.navbar-submenu-links');
        const activeEl = container?.querySelector('.navbar-submenu-link--active');
        if (!container || !activeEl) return;
        if (container.scrollWidth <= container.clientWidth) return; // no overflow (desktop)
        const centered = activeEl.offsetLeft - (container.clientWidth - activeEl.offsetWidth) / 2;
        const left = Math.max(0, Math.min(centered, container.scrollWidth - container.clientWidth));
        container.scrollLeft = left; // instant: smooth programmatic scroll is unreliable here
    }, [pathname]);

    // A link is active when the current path equals its URL or is nested
    // beneath it (so any /unnyc/* sub-route keeps the UNNYC item active).
    // Home ('/') only matches exactly, avoiding false positives.
    const isActive = (url) => {
        if (!url || url === '/') return pathname === url;
        return pathname === url || pathname.startsWith(url + '/');
    };

    if (!data) return null;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link href="/" className="navbar-logo">
                    {siteName || 'WeGovNYC'}
                </Link>

                {/* Center Content (Theme Toggle) */}
                <div className="navbar-center">
                    {children}
                </div>

                {/* Hamburger — visible only below the mobile breakpoint (CSS). */}
                <button
                    type="button"
                    className={`navbar-toggle${menuOpen ? ' navbar-toggle--open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-primary-menu"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span className="navbar-toggle__bar" />
                    <span className="navbar-toggle__bar" />
                    <span className="navbar-toggle__bar" />
                </button>

                <div
                    id="navbar-primary-menu"
                    className={`navbar-menu${menuOpen ? ' navbar-menu--open' : ''}`}
                >
                    <ul className="navbar-links">
                        {data.links && data.links.map((link) => (
                            <li
                                key={link.id}
                                className={link.children ? 'navbar-has-submenu' : ''}
                            >
                                <Link
                                    href={link.url}
                                    target={link.isExternal ? '_blank' : '_self'}
                                    className={`navbar-link${isActive(link.url) ? ' navbar-link--active' : ''}`}
                                    aria-current={isActive(link.url) ? 'page' : undefined}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {data.button && (
                        <div className="navbar-cta">
                            <a
                                href={data.button.url}
                                target={data.button.isExternal ? '_blank' : '_self'}
                                className={`btn btn-${data.button.style || 'primary'} btn-sm`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {data.button.label}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Submenu bar — shown only while its section is active (route-driven),
                rendered in document flow so it pushes page content down. */}
            {data.links && data.links.map((link) => (
                link.children && isActive(link.url) && (
                    <div
                        key={`sub-${link.id}`}
                        className="navbar-submenu-bar"
                    >
                        <div className="container">
                            <ul className="navbar-submenu-links">
                                {link.children.map((child) => (
                                    <li key={child.id}>
                                        <Link
                                            href={child.url}
                                            target={child.isExternal ? '_blank' : '_self'}
                                            className={`navbar-submenu-link${isActive(child.url) ? ' navbar-submenu-link--active' : ''}`}
                                            aria-current={isActive(child.url) ? 'page' : undefined}
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            ))}
        </nav>
    );
}
