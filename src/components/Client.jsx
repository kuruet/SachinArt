// import { useState, useEffect, useRef } from 'react';
// import client1 from '../assets/client1.jpg';
// import client2 from '../assets/client2.jpg';
// import client3 from '../assets/client3.jpg';
// import client4 from '../assets/client4.jpg';
// import client5 from '../assets/client5.jpg';
// import client6 from '../assets/client6.jpg';

// /**
//  * Work Component - My Work / Illustrations Section with Seamless Marquee
//  * 
//  * CUSTOMIZATION:
//  * - Work items: Update the workItems array with your projects
//  * - Animation speed: Modify animation duration in CSS (default 12s)
//  * - Visible items: Adjust grid columns in responsive classes
//  * 
//  * FEATURES:
//  * - Seamless infinite right-to-left scroll
//  * - Pause on hover/focus
//  * - Respects prefers-reduced-motion
//  * - Hardware-accelerated animations
//  * - Responsive: 3 items (desktop), 2 (tablet), 1 (mobile)
//  * - Accessible with proper ARIA labels
//  */

// const Work = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
//   const marqueeRef = useRef(null);

//   // Work items data
//   const workItems = [
//     {
//       id: 1,
//       title: ' ',
//       slug: ' ',
//       image: client1,
//       category: ''
//     },
//     {
//       id: 2,
//       title: ' ',
//       slug: ' ',
//       image: client2,
//       category: ''
//     },
//     {
//       id: 3,
//       title: ' ',
//       slug: ' ',
//       image: client3,
//       category: ''
//     },
//     {
//       id: 4,
//       title: '   ',
//       slug: ' ',
//       image: client4,
//       category: ''
//     },
//     {
//       id: 5,
//       title: '   ',
//       slug: '  ',
//       image: client5,
//       category: ''
//     },
//     {
//       id: 6,
//       title: '  ',
//       slug: ' ',
//       image: client6,
//       category: ' '
//     }
//   ];

//   useEffect(() => {
//     // Check for reduced motion preference
//     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//     setPrefersReducedMotion(mediaQuery.matches);

//     const handleChange = (e) => setPrefersReducedMotion(e.matches);
//     mediaQuery.addEventListener('change', handleChange);

//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   // Removed pause handlers - marquee now runs continuously

//   return (
//     <>
//       {/* CSS Variables and Marquee Animation */}
//       <style jsx>{`
//         :root {
//           --cream: #fff5df;
//           --gold: #8a733e;
//           --tan: #b7a26e;
//           --old-lace: #fff8e7;
//         }

//         .my-work-section {
//           color: #333;
//           font-family: Arial, sans-serif;
//           font-size: 14px;
//           line-height: 20px;
//           box-sizing: border-box;
//           background-color: var(--cream);
//         }

//         /* Marquee Animation - Right to Left */
//         @keyframes marquee {
//           0% {
//             transform: translate3d(0, 0, 0);
//           }
//           100% {
//             transform: translate3d(-50%, 0, 0);
//           }
//         }

//         @keyframes marquee-mobile {
//           0% {
//             transform: translate3d(0, 0, 0);
//           }
//           100% {
//             transform: translate3d(-50%, 0, 0);
//           }
//         }

//         /* Panning Work Container - Full Width */
//         .panning-work {
//           overflow: hidden;
//           position: relative;
//           width: 100vw;
//           margin-left: calc(-50vw + 50%);
//         }

//         .home-work-collection-list {
//           display: flex;
//           gap: 2rem;
//           animation: marquee 12s linear infinite;
//           will-change: transform;
//         }

//         /* Remove hover pause - continuous motion */
        
//         /* Mobile Panning - Full Width */
//         .panning-work-mobile {
//           overflow: hidden;
//           position: relative;
//           width: 100vw;
//           margin-left: calc(-50vw + 50%);
//         }

//         .home-work-collection-page-mobile {
//           display: flex;
//           gap: 1.5rem;
//           animation: marquee-mobile 15s linear infinite;
//           will-change: transform;
//         }

//         /* Reduced Motion - Show Scrollable Container */
//         @media (prefers-reduced-motion: reduce) {
//           .home-work-collection-list,
//           .home-work-collection-page-mobile {
//             animation: none !important;
//           }

//           .panning-work,
//           .panning-work-mobile {
//             overflow-x: auto;
//             scroll-behavior: smooth;
//           }

//           .panning-work::-webkit-scrollbar,
//           .panning-work-mobile::-webkit-scrollbar {
//             height: 8px;
//           }

//           .panning-work::-webkit-scrollbar-track,
//           .panning-work-mobile::-webkit-scrollbar-track {
//             background: var(--old-lace);
//             border-radius: 4px;
//           }

//           .panning-work::-webkit-scrollbar-thumb,
//           .panning-work-mobile::-webkit-scrollbar-thumb {
//             background: var(--tan);
//             border-radius: 4px;
//           }
//         }

//         /* Collection Items */
//         .collection-list-5,
//         .collection-item-6,
//         .collection-item-7 {
//           flex-shrink: 0;
//           position: relative;
//           border-radius: 0.75rem;
//           overflow: hidden;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           transition: all 0.4s ease;
//         }

//         .collection-list-5:hover,
//         .collection-item-6:hover,
//         .collection-item-7:hover {
//           transform: scale(1.05);
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
//         }

//         .work-item-image {
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.4s ease;
//         }

//         .collection-item-6:hover .work-item-image,
//         .collection-item-7:hover .work-item-image {
//           transform: scale(1.1);
//         }

//         .work-item-overlay {
//           position: absolute;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.7);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .collection-item-6:hover .work-item-overlay,
//         .collection-item-7:hover .work-item-overlay {
//           opacity: 1;
//         }

//         .learn-more {
//           position: relative;
//           display: inline-block;
//         }

//         .learn-more::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 100%;
//           height: 1px;
//           background-color: currentColor;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease;
//         }

//         .collection-item-6:hover .learn-more::after,
//         .collection-item-7:hover .learn-more::after {
//           transform: scaleX(1);
//         }

//         .header-line {
//           width: 80px;
//           height: 2px;
//           background-color: var(--gold);
//           margin: 16px auto 32px;
//         }

//         .carousel-line-mobile {
//           width: 40px;
//           height: 2px;
//           background-color: var(--gold);
//           margin: 8px auto;
//           opacity: 0.5;
//         }

//         .sr-only {
//           position: absolute;
//           width: 1px;
//           height: 1px;
//           padding: 0;
//           margin: -1px;
//           overflow: hidden;
//           clip: rect(0, 0, 0, 0);
//           white-space: nowrap;
//           border-width: 0;
//         }
//       `}</style>

//       {/* Main Section */}
//       <section className="my-work-section w-full py-16 md:py-24" aria-label="Work showcase">
//         <div className="container-5 w-container max-w-7xl mx-auto px-6">
          
//           {/* Section Heading */}
//           <div className="flex flex-col items-center mb-12">
//             <h2 
//               className="my-work-section-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase tracking-wider" 
//               style={{ color: 'var(--gold)' }}
//               id="work-heading"
//             >
//               Our Happy Clients
//             </h2>
//             <div className="header-line" aria-hidden="true"></div>
//           </div>

//           {/* Desktop/Tablet: Seamless Marquee - Full Width */}
//           <div 
//             className="hidden md:block panning-work mb-12"
//             ref={marqueeRef}
//             role="region"
//             aria-labelledby="work-heading"
//             aria-live={prefersReducedMotion ? "polite" : "off"}
//           >
//             <div className="home-work-collection-list">
//               {/* First Set of Items */}
//               {workItems.map((item) => (
//                 <a
//                   key={`first-${item.id}`}
//                   href={`/illustrations/${item.slug}`}
//                   className="collection-item-6"
//                   style={{ 
//                     width: '400px',
//                     minWidth: '400px',
//                     height: '500px'
//                   }}
//                   aria-label={`View ${item.title} project`}
//                   tabIndex="0"
//                 >
//                   {/* Background Image */}
//                   <div
//                     className="work-item-image"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   >
//                     <img src={item.image} alt="" className="sr-only" />
//                   </div>

//                   {/* Overlay */}
//                   <div className="work-item-overlay">
//                     <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 text-center px-4">
//                       {item.title}
//                     </h3>
//                     <span className="learn-more text-white text-sm uppercase tracking-widest font-medium">
                       
//                     </span>
//                   </div>
//                 </a>
//               ))}

//               {/* Duplicated Set for Seamless Loop */}
//               {workItems.map((item) => (
//                 <a
//                   key={`duplicate-${item.id}`}
//                   href={`/illustrations/${item.slug}`}
//                   className="collection-item-7"
//                   style={{ 
//                     width: '400px',
//                     minWidth: '400px',
//                     height: '500px'
//                   }}
//                   aria-hidden="true"
//                   tabIndex="-1"
//                 >
//                   {/* Background Image */}
//                   <div
//                     className="work-item-image"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   >
//                     <img src={item.image} alt="" className="sr-only" />
//                   </div>

//                   {/* Overlay */}
//                   <div className="work-item-overlay">
//                     <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 text-center px-4">
//                       {item.title}
//                     </h3>
//                     <span className="learn-more text-white text-sm uppercase tracking-widest font-medium">
//                       Learn More
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile: Full Width Marquee */}
//           <div 
//             className="md:hidden panning-work-mobile mb-12"
//             role="region"
//             aria-labelledby="work-heading"
//             aria-live={prefersReducedMotion ? "polite" : "off"}
//           >
//             <div className="home-work-collection-page-mobile">
//               {/* First Set */}
//               {workItems.map((item) => (
//                 <div key={`mobile-first-${item.id}`} className="collection-list-5" style={{ minWidth: '320px', width: '320px' }}>
//                   <a
//                     href={`/illustrations/${item.slug}`}
//                     className="block"
//                     aria-label={`View ${item.title} project`}
//                     tabIndex="0"
//                   >
//                     <div className="relative rounded-xl overflow-hidden shadow-lg mb-4" style={{ height: '450px' }}>
//                       <div
//                         className="work-item-image"
//                         style={{ backgroundImage: `url(${item.image})` }}
//                       >
//                         <img src={item.image} alt="" className="sr-only" />
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                     </div>

//                     <div className="mobile-work-title-home text-center">
//                       <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--gold)' }}>
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-2">{item.category}</p>
//                       <div className="carousel-line-mobile"></div>
//                     </div>
//                   </a>
//                 </div>
//               ))}

//               {/* Duplicated Set */}
//               {workItems.map((item) => (
//                 <div key={`mobile-duplicate-${item.id}`} className="collection-list-5" style={{ minWidth: '320px', width: '320px' }} aria-hidden="true">
//                   <a
//                     href={`/illustrations/${item.slug}`}
//                     className="block"
//                     tabIndex="-1"
//                   >
//                     <div className="relative rounded-xl overflow-hidden shadow-lg mb-4" style={{ height: '450px' }}>
//                       <div
//                         className="work-item-image"
//                         style={{ backgroundImage: `url(${item.image})` }}
//                       >
//                         <img src={item.image} alt="" className="sr-only" />
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                     </div>

//                     <div className="mobile-work-title-home text-center">
//                       <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--gold)' }}>
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-2">{item.category}</p>
//                       <div className="carousel-line-mobile"></div>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* More Work Button */}
//           {/* <div className="flex justify-center">
//             <a
//               href="/illustrations"
//               className="inline-block px-8 py-4 rounded-lg font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
//               style={{
//                 backgroundColor: 'var(--gold)',
//                 color: 'white'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = 'var(--tan)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = 'var(--gold)';
//               }}
//             >
//               More Work
//             </a>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Work;