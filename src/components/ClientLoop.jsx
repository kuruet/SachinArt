import { useState, useEffect, useRef } from 'react';

// Import your images
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.jpg';
import client7 from '../assets/client7.jpg';
import client8 from '../assets/client8.jpg';
import client9 from '../assets/client9.jpg';
import client10 from '../assets/client10.jpg';
import client11 from '../assets/client11.jpg';
import client12 from '../assets/client12.jpg';

/**
 * Work Component - Fixed Seamless Infinite Marquee
 * 
 * FIXES:
 * - Smooth infinite loop with no jumps or gaps
 * - Dynamic animation duration based on content width
 * - Responsive on all devices (mobile, tablet, desktop)
 * - Hardware-accelerated animations
 * 
 * FEATURES:
 * - Seamless infinite right-to-left scroll
 * - Respects prefers-reduced-motion
 * - Accessible with proper ARIA labels
 */

const Work = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [desktopWidth, setDesktopWidth] = useState(0);
  const [mobileWidth, setMobileWidth] = useState(0);
  const desktopSetRef = useRef(null);
  const mobileSetRef = useRef(null);

  // Work items data
  const workItems = [
    { id: 1, title: ' ', slug: ' ', image: client1, category: '' },
    { id: 2, title: ' ', slug: ' ', image: client2, category: '' },
    { id: 3, title: ' ', slug: ' ', image: client3, category: '' },
    { id: 4, title: '   ', slug: ' ', image: client4, category: '' },
    { id: 5, title: '   ', slug: '  ', image: client5, category: '' },
    { id: 6, title: '  ', slug: ' ', image: client6, category: ' ' },
    { id: 7, title: ' ', slug: ' ', image: client7, category: '' },
    { id: 8, title: ' ', slug: ' ', image: client8, category: '' },
    { id: 9, title: ' ', slug: ' ', image: client9, category: '' },
    { id: 10, title: ' ', slug: ' ', image: client10, category: '' },
    { id: 11, title: ' ', slug: ' ', image: client11, category: '' },
    { id: 12, title: ' ', slug: ' ', image: client12, category: '' },
  ];

  // Calculate animation speeds
  const desktopSpeed = 120; // px per second
  const mobileSpeed = 80; // px per second
  const desktopDuration = desktopWidth > 0 ? desktopWidth / desktopSpeed : 40;
  const mobileDuration = mobileWidth > 0 ? mobileWidth / mobileSpeed : 25;

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Measure content width dynamically
    const measureWidths = () => {
      // Desktop width
      if (desktopSetRef.current) {
        const width = desktopSetRef.current.scrollWidth;
        setDesktopWidth(width);
      }

      // Mobile width
      if (mobileSetRef.current) {
        const width = mobileSetRef.current.scrollWidth;
        setMobileWidth(width);
      }
    };

    // Measure on mount
    measureWidths();

    // Measure after images load
    const timer = setTimeout(measureWidths, 100);

    // Measure on window resize
    window.addEventListener('resize', measureWidths);

    return () => {
      window.removeEventListener('resize', measureWidths);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Dynamic CSS with measured widths */}
      <style>{`
        :root {
          --cream: #fff5df;
          --gold: #8a733e;
          --tan: #b7a26e;
          --old-lace: #fff8e7;
        }

        .my-work-section {
          color: #333;
          font-family: Morion, sans-serif;
          font-size: 40px;
          line-height: 44px;
          box-sizing: border-box;
          background-color: var(--cream);
        }

        /* Dynamic Marquee Animations */
        @keyframes marquee-desktop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-${desktopWidth}px, 0, 0);
          }
        }

        @keyframes marquee-mobile {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-${mobileWidth}px, 0, 0);
          }
        }

        /* Panning Work Container - Full Width with Overflow Hidden */
        .panning-work,
        .panning-work-mobile {
          overflow: hidden;
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }

        /* Marquee Content Wrapper */
        .marquee-content {
          display: flex;
          gap: 2rem;
          flex-wrap: nowrap;
          will-change: transform;
          animation: marquee-desktop ${desktopDuration}s linear infinite;
        }

        .marquee-content-mobile {
          display: flex;
          gap: 1.5rem;
          flex-wrap: nowrap;
          will-change: transform;
          animation: marquee-mobile ${mobileDuration}s linear infinite;
        }

        /* Marquee Set - Individual item container */
        .marquee-set,
        .marquee-set-mobile {
          display: flex;
          gap: inherit;
          flex-shrink: 0;
        }

        /* Reduced Motion - Show Scrollable Container */
        @media (prefers-reduced-motion: reduce) {
          .marquee-content,
          .marquee-content-mobile {
            animation: none !important;
          }

          .panning-work,
          .panning-work-mobile {
            overflow-x: auto;
            scroll-behavior: smooth;
          }

          .panning-work::-webkit-scrollbar,
          .panning-work-mobile::-webkit-scrollbar {
            height: 8px;
          }

          .panning-work::-webkit-scrollbar-track,
          .panning-work-mobile::-webkit-scrollbar-track {
            background: var(--old-lace);
            border-radius: 4px;
          }

          .panning-work::-webkit-scrollbar-thumb,
          .panning-work-mobile::-webkit-scrollbar-thumb {
            background: var(--tan);
            border-radius: 4px;
          }
        }

        /* Collection Items */
        .collection-item {
          flex-shrink: 0;
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }

        .collection-item:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .work-item-image {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          transition: transform 0.4s ease;
        }

        .collection-item:hover .work-item-image {
          transform: scale(1.1);
        }

        .work-item-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .collection-item:hover .work-item-overlay {
          opacity: 1;
        }

        .learn-more {
          position: relative;
          display: inline-block;
        }

        .learn-more::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .collection-item:hover .learn-more::after {
          transform: scaleX(1);
        }

        .header-line {
          width: 80px;
          height: 2px;
          background-color: var(--gold);
          margin: 16px auto 32px;
        }

        .carousel-line-mobile {
          width: 40px;
          height: 2px;
          background-color: var(--gold);
          margin: 8px auto;
          opacity: 0.5;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>

      {/* Main Section */}
      <section className="my-work-section w-full py-16 md:py-24" aria-label="Work showcase">
        <div className="container-5 w-container max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center mb-12">

<style>{`
        @font-face {
          font-family: 'Morion';
          src: url('https://cdn.jsdelivr.net/gh/projectwallace/morion@main/morion.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        :root {
          --gold: #8B7355;
        }

        .morion-heading {
          font-family: 'Morion', 'Times New Roman', serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <h1
        className="morion-heading flex justify-center items-center text-center whitespace-normal mx-auto"
        style={{
          color: 'var(--gold)',
          letterSpacing: '2px',
          width: '900px',
          maxWidth: '900px',
          height: '50px',
          marginTop: '40px',
          marginBottom: '40px',
          fontSize: '60px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '70px',
          textDecoration: 'none'
        }}
      >
        OUR HAPPY CLIENTS
      </h1>

            {/* <div className="header-line" aria-hidden="true"></div> */}
          </div>

          {/* Desktop/Tablet: Seamless Marquee - Full Width */}
          <div 
            className="hidden md:block panning-work mb-12"
            role="region"
            aria-labelledby="work-heading"
            aria-live={prefersReducedMotion ? "polite" : "off"}
          >
            <div className="marquee-content">
              {/* First Set of Items */}
              <div className="marquee-set" ref={desktopSetRef}>
                {workItems.map((item) => (
                  <a
                    key={`first-${item.id}`}
                    href={`/illustrations/${item.slug}`}
                    className="collection-item"
                    style={{ 
                      width: '400px',
                      minWidth: '400px',
                      height: '500px'
                    }}
                    aria-label={`View ${item.title} project`}
                    tabIndex="0"
                  >
                    <div
                      className="work-item-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <img src={item.image} alt="" className="sr-only" />
                    </div>

                    <div className="work-item-overlay">
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 text-center px-4">
                        {item.title}
                      </h3>
                      <span className="learn-more text-white text-sm uppercase tracking-widest font-medium">
                        {/* Learn More */}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Duplicated Set for Seamless Loop */}
              <div className="marquee-set" aria-hidden="true">
                {workItems.map((item) => (
                  <a
                    key={`duplicate-${item.id}`}
                    href={`/illustrations/${item.slug}`}
                    className="collection-item"
                    style={{ 
                      width: '400px',
                      minWidth: '400px',
                      height: '500px'
                    }}
                    tabIndex="-1"
                  >
                    <div
                      className="work-item-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <img src={item.image} alt="" className="sr-only" />
                    </div>

                    <div className="work-item-overlay">
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 text-center px-4">
                        {item.title}
                      </h3>
                      <span className="learn-more text-white text-sm uppercase tracking-widest font-medium">
                        Learn More
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Full Width Marquee */}
          <div 
            className="md:hidden panning-work-mobile mb-12"
            role="region"
            aria-labelledby="work-heading"
            aria-live={prefersReducedMotion ? "polite" : "off"}
          >
            <div className="marquee-content-mobile">
              {/* First Set */}
              <div className="marquee-set-mobile" ref={mobileSetRef}>
                {workItems.map((item) => (
                  <div 
                    key={`mobile-first-${item.id}`} 
                    className="flex-shrink-0" 
                    style={{ minWidth: '280px', width: '280px' }}
                  >
                    <a
                      href={`/illustrations/${item.slug}`}
                      className="block"
                      aria-label={`View ${item.title} project`}
                      tabIndex="0"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-lg mb-4" style={{ height: '400px' }}>
                        <div
                          className="work-item-image"
                          style={{ backgroundImage: `url(${item.image})` }}
                        >
                          <img src={item.image} alt="" className="sr-only" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      <div className="mobile-work-title-home text-center">
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--gold)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        <div className="carousel-line-mobile"></div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Duplicated Set */}
              <div className="marquee-set-mobile" aria-hidden="true">
                {workItems.map((item) => (
                  <div 
                    key={`mobile-duplicate-${item.id}`} 
                    className="flex-shrink-0" 
                    style={{ minWidth: '280px', width: '280px' }}
                  >
                    <a
                      href={`/illustrations/${item.slug}`}
                      className="block"
                      tabIndex="-1"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-lg mb-4" style={{ height: '400px' }}>
                        <div
                          className="work-item-image"
                          style={{ backgroundImage: `url(${item.image})` }}
                        >
                          <img src={item.image} alt="" className="sr-only" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      <div className="mobile-work-title-home text-center">
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--gold)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        <div className="carousel-line-mobile"></div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;