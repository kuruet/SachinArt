import React, { useState, useEffect, useRef } from 'react';

/**
 * HeroSection Component - Complete clone of alexfisherdesign.ca hero
 * 
 * Features:
 * - Visible mouse cursor (overrides global cursor: none)
 * - Sequential text animations (fade-in + translate-up)
 * - Multiple layered illustrations with subtle parallax
 * - Natural scrolling behavior
 * - Fully responsive across all devices
 * - Staggered entrance animations
 * 
 * Usage:
 * <HeroSection />
 * <HeroSection 
 *   title="Custom Title" 
 *   subtitle="Custom Subtitle"
 *   buttonText="Custom Button" 
 *   onButtonClick={() => console.log('clicked')} 
 * />
 */

const HeroSection = ({ 
  title = "Capturing Life",
  subtitle = "Through Art",
  description = "Transforming moments into timeless visual stories",
  buttonText = "View Portfolio",
  onButtonClick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger sequential fade-in animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Parallax scroll effect
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // CSS custom properties for colors
  const cssVars = {
    '--cream': '#fff5df',
    '--gold': '#8a733e',
    '--tan': '#b7a26e',
    '--old-lace': '#fff8e7'
  };

  // Calculate parallax offsets for each layer (very subtle)
  const layer1Offset = scrollY * 0.05; // Slowest (background)
  const layer2Offset = scrollY * 0.12; // Medium-slow
  const layer3Offset = scrollY * 0.20; // Medium-fast
  const layer4Offset = scrollY * 0.30; // Fastest (foreground)

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ 
        ...cssVars, 
        cursor: 'default', // Override any global cursor: none
        backgroundColor: '#fff5df',
        boxSizing: 'border-box'
      }}
    >
      {/* Layer 1 - Dark green grass base */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
              <defs>
                <linearGradient id="grass1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#1a3a1a;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#0d2610;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M0,600 L48,580 L96,605 L144,575 L192,600 L240,570 L288,595 L336,565 L384,590 L432,560 L480,585 L528,555 L576,580 L624,550 L672,575 L720,545 L768,570 L816,540 L864,565 L912,535 L960,560 L1008,530 L1056,555 L1104,525 L1152,550 L1200,520 L1248,545 L1296,515 L1344,540 L1392,510 L1440,535 L1440,800 L0,800 Z" fill="url(#grass1)"/>
            </svg>
          `)}')`,
          backgroundPosition: '50% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: `translateY(${layer1Offset}px)`,
          zIndex: 1,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Layer 2 - Mixed flowers */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-1200 ease-out"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
              <g opacity="0.95">
                <ellipse cx="120" cy="680" rx="25" ry="35" fill="#a6667a" transform="rotate(-25 120 680)"/>
                <ellipse cx="135" cy="675" rx="25" ry="35" fill="#b47787" transform="rotate(15 135 675)"/>
                <ellipse cx="110" cy="665" rx="25" ry="35" fill="#c28894" transform="rotate(-45 110 665)"/>
                <circle cx="120" cy="675" r="12" fill="#8a5a3a"/>
                <path d="M120,675 L115,720" stroke="#2d5016" stroke-width="3" fill="none"/>
                <path d="M115,700 L105,705 L95,695" fill="#4a6b2e" stroke="none"/>
                <g transform="translate(280,690)">
                  <ellipse cx="0" cy="-15" rx="18" ry="12" fill="#d4b96a"/>
                  <ellipse cx="-12" cy="-8" rx="18" ry="12" fill="#d4b96a" transform="rotate(60)"/>
                  <ellipse cx="-12" cy="8" rx="18" ry="12" fill="#d4b96a" transform="rotate(120)"/>
                  <ellipse cx="0" cy="15" rx="18" ry="12" fill="#c5aa5b" transform="rotate(180)"/>
                  <ellipse cx="12" cy="8" rx="18" ry="12" fill="#d4b96a" transform="rotate(240)"/>
                  <ellipse cx="12" cy="-8" rx="18" ry="12" fill="#d4b96a" transform="rotate(300)"/>
                  <circle cx="0" cy="0" r="8" fill="#7a6534"/>
                  <path d="M0,0 L0,55" stroke="#2d5016" stroke-width="2.5" fill="none"/>
                  <path d="M0,25 L-8,28 L-15,22" fill="#4a6b2e"/>
                </g>
                <g transform="translate(600,695)">
                  <ellipse cx="0" cy="-18" rx="15" ry="8" fill="#f5f0dc" opacity="0.9"/>
                  <ellipse cx="-15" cy="-9" rx="15" ry="8" fill="#ede8d0" opacity="0.9" transform="rotate(60)"/>
                  <ellipse cx="-15" cy="9" rx="15" ry="8" fill="#f5f0dc" opacity="0.9" transform="rotate(120)"/>
                  <ellipse cx="0" cy="18" rx="15" ry="8" fill="#ebe6ce" opacity="0.9" transform="rotate(180)"/>
                  <ellipse cx="15" cy="9" rx="15" ry="8" fill="#f5f0dc" opacity="0.9" transform="rotate(240)"/>
                  <ellipse cx="15" cy="-9" rx="15" ry="8" fill="#ede8d0" opacity="0.9" transform="rotate(300)"/>
                  <circle cx="0" cy="0" r="7" fill="#9a8a5a"/>
                  <path d="M0,0 L0,50" stroke="#2d5016" stroke-width="2" fill="none"/>
                </g>
                <ellipse cx="950" cy="685" rx="28" ry="38" fill="#b47787" transform="rotate(10 950 685)"/>
                <ellipse cx="968" cy="680" rx="28" ry="38" fill="#a6667a" transform="rotate(-20 968 680)"/>
                <ellipse cx="935" cy="670" rx="28" ry="38" fill="#c28894" transform="rotate(40 935 670)"/>
                <circle cx="950" cy="680" r="13" fill="#8a5a3a"/>
                <path d="M950,680 L948,730" stroke="#2d5016" stroke-width="3" fill="none"/>
                <g transform="translate(1160,693)">
                  <ellipse cx="0" cy="-16" rx="19" ry="13" fill="#d4b96a"/>
                  <ellipse cx="-13" cy="-8" rx="19" ry="13" fill="#c5aa5b" transform="rotate(60)"/>
                  <ellipse cx="-13" cy="8" rx="19" ry="13" fill="#d4b96a" transform="rotate(120)"/>
                  <ellipse cx="0" cy="16" rx="19" ry="13" fill="#d4b96a" transform="rotate(180)"/>
                  <ellipse cx="13" cy="8" rx="19" ry="13" fill="#c5aa5b" transform="rotate(240)"/>
                  <ellipse cx="13" cy="-8" rx="19" ry="13" fill="#d4b96a" transform="rotate(300)"/>
                  <circle cx="0" cy="0" r="9" fill="#7a6534"/>
                  <path d="M0,0 L2,52" stroke="#2d5016" stroke-width="2.5" fill="none"/>
                </g>
                <ellipse cx="1320" cy="678" rx="30" ry="40" fill="#c28894" transform="rotate(-15 1320 678)"/>
                <ellipse cx="1340" cy="673" rx="30" ry="40" fill="#b47787" transform="rotate(25 1340 673)"/>
                <ellipse cx="1305" cy="663" rx="30" ry="40" fill="#a6667a" transform="rotate(-35 1305 663)"/>
                <circle cx="1320" cy="673" r="14" fill="#8a5a3a"/>
                <path d="M1320,673 L1318,725" stroke="#2d5016" stroke-width="3" fill="none"/>
              </g>
            </svg>
          `)}')`,
          backgroundPosition: '50% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: `translateY(${layer2Offset}px)`,
          zIndex: 2,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          opacity: isVisible ? 1 : 0,
          transitionDelay: '200ms'
        }}
      />

      {/* Layer 3 - Botanical foliage */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-1400 ease-out"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
              <g opacity="0.9">
                <path d="M60,720 Q55,680 50,640 T45,560" stroke="#5a7a3a" stroke-width="2" fill="none" opacity="0.8"/>
                <circle cx="48" cy="590" r="2.5" fill="#9a8a5a"/>
                <circle cx="47" cy="610" r="2.5" fill="#9a8a5a"/>
                <circle cx="49" cy="630" r="2.5" fill="#9a8a5a"/>
                <circle cx="51" cy="650" r="2.5" fill="#9a8a5a"/>
                <circle cx="52" cy="670" r="2.5" fill="#9a8a5a"/>
                <path d="M90,730 Q85,690 82,650 T80,570" stroke="#5a7a3a" stroke-width="2" fill="none" opacity="0.7"/>
                <circle cx="81" cy="600" r="2.5" fill="#9a8a5a"/>
                <circle cx="81" cy="625" r="2.5" fill="#9a8a5a"/>
                <circle cx="82" cy="650" r="2.5" fill="#9a8a5a"/>
                <ellipse cx="35" cy="680" rx="45" ry="18" fill="#687a3f" opacity="0.85" transform="rotate(-35 35 680)"/>
                <ellipse cx="25" cy="665" rx="38" ry="15" fill="#5a6e35" opacity="0.85" transform="rotate(-25 25 665)"/>
                <ellipse cx="55" cy="695" rx="42" ry="16" fill="#70823d" opacity="0.85" transform="rotate(-45 55 695)"/>
                <path d="M350,735 Q345,695 342,655 T340,580" stroke="#5a7a3a" stroke-width="2" fill="none"/>
                <ellipse cx="320" cy="690" rx="50" ry="20" fill="#687a3f" opacity="0.9" transform="rotate(-30 320 690)"/>
                <ellipse cx="305" cy="710" rx="55" ry="22" fill="#5a6e35" opacity="0.85" transform="rotate(-15 305 710)"/>
                <ellipse cx="335" cy="670" rx="48" ry="19" fill="#70823d" opacity="0.88" transform="rotate(-40 335 670)"/>
                <path d="M340,650 L330,660 L325,655 L320,665 L315,660" stroke="#4a5e2a" stroke-width="8" fill="none" stroke-linecap="round"/>
                <path d="M1350,730 Q1355,685 1358,640 T1362,560" stroke="#5a7a3a" stroke-width="2" fill="none" opacity="0.8"/>
                <circle cx="1357" cy="590" r="2.5" fill="#9a8a5a"/>
                <circle cx="1358" cy="615" r="2.5" fill="#9a8a5a"/>
                <circle cx="1359" cy="640" r="2.5" fill="#9a8a5a"/>
                <circle cx="1359" cy="665" r="2.5" fill="#9a8a5a"/>
                <path d="M1380,725 Q1383,690 1385,650 T1388,575" stroke="#5a7a3a" stroke-width="2" fill="none" opacity="0.75"/>
                <circle cx="1386" cy="605" r="2.5" fill="#9a8a5a"/>
                <circle cx="1386" cy="630" r="2.5" fill="#9a8a5a"/>
                <circle cx="1387" cy="655" r="2.5" fill="#9a8a5a"/>
                <ellipse cx="1395" cy="685" rx="48" ry="19" fill="#687a3f" opacity="0.85" transform="rotate(35 1395 685)"/>
                <ellipse cx="1410" cy="670" rx="40" ry="16" fill="#5a6e35" opacity="0.85" transform="rotate(25 1410 670)"/>
                <ellipse cx="1375" cy="700" rx="45" ry="17" fill="#70823d" opacity="0.85" transform="rotate(45 1375 700)"/>
                <ellipse cx="720" cy="705" rx="65" ry="25" fill="#5a6e35" opacity="0.8" transform="rotate(-8 720 705)"/>
                <ellipse cx="705" cy="690" rx="60" ry="24" fill="#687a3f" opacity="0.82" transform="rotate(15 705 690)"/>
                <ellipse cx="740" cy="695" rx="62" ry="23" fill="#70823d" opacity="0.8" transform="rotate(-20 740 695)"/>
                <path d="M720,690 L715,710 M720,690 L725,710 M720,690 L720,715" stroke="#4a5e2a" stroke-width="2" opacity="0.6"/>
              </g>
            </svg>
          `)}')`,
          backgroundPosition: '50% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: `translateY(${layer3Offset}px)`,
          zIndex: 3,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          opacity: isVisible ? 1 : 0,
          transitionDelay: '400ms'
        }}
      />

      {/* Layer 4 - Foreground grass */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-1600 ease-out"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
              <path d="M0,680 L40,665 L80,685 L120,660 L160,680 L200,655 L240,675 L280,650 L320,670 L360,645 L400,665 L440,640 L480,660 L520,635 L560,655 L600,630 L640,650 L680,625 L720,645 L760,620 L800,640 L840,615 L880,635 L920,610 L960,630 L1000,605 L1040,625 L1080,600 L1120,620 L1160,595 L1200,615 L1240,590 L1280,610 L1320,585 L1360,605 L1400,580 L1440,600 L1440,800 L0,800 Z" fill="#2d4a1f" opacity="0.7"/>
            </svg>
          `)}')`,
          backgroundPosition: '50% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: `translateY(${layer4Offset}px)`,
          zIndex: 4,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          opacity: isVisible ? 1 : 0,
          transitionDelay: '600ms'
        }}
      />

      {/* Content Overlay with Sequential Text Animations */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 sm:pb-12 sm:py-78 sm:mb-32 md:px-8 lg:pt-2 pt-12 md:pt-0 md:mb-8 md:py-48">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title - Line 1 */}
          <h1 
            className="morion-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-2 sm:mb-6 md:mb-4"
            style={{ 
              color: 'var(--gold)',
              textShadow: '3px 3px 8px rgba(0,0,0,0.15), 1px 1px 3px rgba(255,255,255,0.3)',
              letterSpacing: '-0.03em',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '300ms'
            }}
          >
            {title}
          </h1>

          {/* Main Title - Line 2 */}
          <h1 
            className="morion-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4 sm:mb-6 md:mb-8 lg:mb-10"
            style={{ 
              color: 'var(--gold)',
              textShadow: '3px 3px 8px rgba(0,0,0,0.15), 1px 1px 3px rgba(255,255,255,0.3)',
              letterSpacing: '-0.03em',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '500ms'
            }}
          >
            {subtitle}
          </h1>

          {/* Description Text */}
          <p 
            className="morion-text text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4"
            style={{ 
              color: 'var(--tan)',
              letterSpacing: '0.02em',
              textShadow: '1px 1px 3px rgba(255,255,255,0.5)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '700ms'
            }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <button
            onClick={onButtonClick}
            className="morion-text group relative px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 lg:px-16 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 shadow-2xl"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--cream)',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(138, 115, 62, 0.5)',
              border: '3px solid var(--gold)',
              letterSpacing: '0.08em',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 900ms, transform 1000ms cubic-bezier(0.4, 0, 0.2, 1) 900ms, background-color 300ms ease, color 300ms ease, box-shadow 300ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--cream)';
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(138, 115, 62, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold)';
              e.currentTarget.style.color = 'var(--cream)';
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(138, 115, 62, 0.5)';
            }}
          >
            <span className="relative z-10 tracking-wider">{buttonText}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-14 left-1/2 transform -translate-x-1/2"
          style={{ 
            cursor: 'pointer',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
            transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 1100ms, transform 1000ms cubic-bezier(0.4, 0, 0.2, 1) 1100ms'
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center animate-bounce">
            <div 
              className="w-5 h-9 sm:w-6 sm:h-10 border-2 rounded-full p-1 mb-2"
              style={{ borderColor: 'var(--gold)' }}
            >
              <div 
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mx-auto animate-pulse"
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </div>
            <span 
              className="morion-text text-[10px] sm:text-xs font-bold tracking-widest uppercase"
              style={{ 
                color: 'var(--gold)', 
                letterSpacing: '0.25em',
                textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
              }}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Scoped Styles with Morion Font */}
      <style>{`
        @font-face {
          font-family: 'Morion';
          src: url('https://cdn.jsdelivr.net/gh/projectwallace/morion@main/morion.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        .morion-text {
          font-family: 'Morion', 'Times New Roman', serif;
          font-weight: 700;
        }

        /* Override global cursor: none only in hero section */
        #root > div:first-child,
        #root > div:first-child * {
          cursor: default !important;
        }
        
        /* Buttons should show pointer cursor */
        button {
          cursor: pointer !important;
        }
        
        /* Optimize performance for transforms */
        [style*="transform"] {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        /* Smooth text rendering */
        h1, p {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          h1 {
            line-height: 1.1;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          h1 {
            line-height: 1.05;
          }
        }
        
        @media (min-width: 1025px) {
          h1 {
            line-height: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;