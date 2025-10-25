import { useState, useEffect } from 'react';
import logo from '../assets/loggo.png';

/**
 * Header Component - Sticky Navigation with Mobile Menu
 * 
 * CUSTOMIZATION:
 * - Logo: Replace "LOGO" text with your brand name or image
 * - Navigation links: Update leftNavLinks and rightNavLinks arrays
 * - Colors: Modify CSS variables in the style block below
 * - Active page: Set current: true for the active link
 * 
 * FEATURES:
 * - Sticky header that stays at top on scroll
 * - Responsive hamburger menu for mobile
 * - Smooth hover animations on links
 * - Keyboard accessible
 * - Click outside to close mobile menu
 * 
 * TAILWIND CONFIG (optional - add to tailwind.config.js):
 * colors: {
 *   cream: '#fff5df',
 *   gold: '#8a733e',
 *   tan: '#b7a26e',
 *   oldLace: '#fff8e7',
 * }
 */

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Left navigation links
  const leftNavLinks = [
    { text: 'HOME', url: '/', current: true },
    { text: 'WORK', url: '/portfolio', current: false },
    { text: 'TESTIMONIALS', url: '/testimonials', current: false }
  ];

  // Right navigation links
  const rightNavLinks = [
    { text: 'ABOUT', url: '/about', current: false },
    { text: 'SERVICES', url: '/service', current: false },
    { text: 'CONTACT', url: '/contact', current: false }
  ];

  useEffect(() => {
    // Handle scroll to add shadow when scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on outside click
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* CSS Variables and Custom Styles */}
      <style jsx>{`
        @font-face {
          font-family: 'Morion';
          src: url('https://cdn.jsdelivr.net/gh/projectwallace/morion@main/morion.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        :root {
          --cream: #fff5df;
          --gold: #8a733e;
          --tan: #b7a26e;
          --old-lace: #fff8e7;
        }

        .nav-link {
          position: relative;
          display: inline-block;
          font-family: 'Morion', 'Times New Roman', serif;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link:hover {
          color: var(--tan);
        }

        .hamburger-line {
          transition: all 0.3s ease;
        }

        .hamburger-open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .divider {
          width: 1px;
          height: 16px;
          background-color: var(--gold);
          opacity: 0.3;
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
        style={{ 
          backgroundColor: 'var(--cream)',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '20px'
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 border-b-2 border-[#8a7332]">
          <div className="flex items-center justify-between">
            {/* Left Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {leftNavLinks.map((link, index) => (
                <div key={link.text} className="flex items-center">
                  <a
                    href={link.url}
                    aria-label={link.text}
                    aria-current={link.current ? 'page' : undefined}
                    className={`nav-link text-lg font-medium tracking-wide ${
                      link.current ? '' : ''
                    }`}
                    style={{ color: 'var(--gold)' }}
                  >
                    {link.text}
                  </a>
                  {index < leftNavLinks.length - 1 && (
                    <div className="divider ml-6" aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Logo - Center */}
            <a
              href="/"
              aria-label="Home"
              className="text-2xl font-bold "
              style={{ color: 'var(--gold)' }}
            >
              <img src={logo} alt="Logo" className="h-10 md:h-16 object-contain" />
            </a>

            {/* Right Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {rightNavLinks.map((link, index) => (
                <div key={link.text} className="flex items-center">
                  {index > 0 && (
                    <div className="divider mr-6" aria-hidden="true"></div>
                  )}
                  <a
                    href={link.url}
                    aria-label={link.text}
                    aria-current={link.current ? 'page' : undefined}
                    className={`nav-link text-lg font-medium tracking-wide ${
                      link.current ? '' : ''
                    }`}
                    style={{ color: 'var(--gold)' }}
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              className={`hamburger-button md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isMobileMenuOpen ? 'hamburger-open' : ''
              }`}
              style={{ focusRingColor: 'var(--gold)' }}
            >
              <span
                className="hamburger-line w-6 h-0.5 mb-1.5"
                style={{ backgroundColor: 'var(--gold)' }}
              ></span>
              <span
                className="hamburger-line w-6 h-0.5 mb-1.5"
                style={{ backgroundColor: 'var(--gold)' }}
              ></span>
              <span
                className="hamburger-line w-6 h-0.5"
                style={{ backgroundColor: 'var(--gold)' }}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed inset-0 z-40 md:hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {/* All Links Vertically */}
          {[...leftNavLinks, ...rightNavLinks].map((link) => (
            <a
              key={link.text}
              href={link.url}
              onClick={closeMobileMenu}
              aria-label={link.text}
              aria-current={link.current ? 'page' : undefined}
              className={`nav-link text-2xl font-medium tracking-wide ${
                link.current ? 'active' : ''
              }`}
              style={{ color: 'var(--gold)' }}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;