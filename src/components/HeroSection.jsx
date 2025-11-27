import React, { useState, useEffect } from 'react';
import img1 from '../assets/front1.jpg';
import img2 from '../assets/front2.jpg';
import img3 from '../assets/front3.jpg';
import img4 from '../assets/front4.jpg';
 
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
  img1,
  img2,
  img3,
  img4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <style>{`
        .serif-font {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .hero-bg {
          background: linear-gradient(135deg, #fff5df 0%, #fef8e8 50%, #fff5df 100%);
          position: relative;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(138, 115, 62, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(138, 115, 62, 0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
        
        .floating-shape {
          position: absolute;
          opacity: 0.12;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(-15px, -40px) rotate(-5deg); }
          75% { transform: translate(15px, -20px) rotate(3deg); }
        }
        
        .floating-shape:nth-child(2) {
          animation-delay: -5s;
          animation-duration: 25s;
        }
        
        .floating-shape:nth-child(3) {
          animation-delay: -10s;
          animation-duration: 30s;
        }
        
        .gold-underline {
          position: relative;
          display: inline-block;
        }
        
        .gold-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #8a733e, transparent);
          opacity: 0.6;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; transform: scaleX(0.8); }
          50% { opacity: 0.7; transform: scaleX(1); }
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #8a733e 0%, #a68a4d 100%);
          box-shadow: 0 4px 15px rgba(138, 115, 62, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(138, 115, 62, 0.4);
        }
        
        .btn-secondary {
          border: 2px solid #8a733e;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(138, 115, 62, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-secondary:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .btn-secondary:hover {
          border-color: #a68a4d;
          transform: translateY(-2px);
        }
        
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #8a733e;
          border-radius: 50%;
          opacity: 0;
          animation: sparkle 3s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        
        .sparkle:nth-child(1) { top: 20%; left: 15%; animation-delay: 0s; }
        .sparkle:nth-child(2) { top: 40%; left: 25%; animation-delay: 1s; }
        .sparkle:nth-child(3) { top: 60%; left: 18%; animation-delay: 2s; }
        .sparkle:nth-child(4) { top: 75%; left: 22%; animation-delay: 1.5s; }
        
        .illustration-container {
          position: relative;
          animation: fadeInRight 1.2s ease-out;
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .text-content {
          animation: fadeInLeft 1.2s ease-out;
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .brush-stroke {
          position: absolute;
          stroke: #8a733e;
          stroke-width: 2;
          fill: none;
          opacity: 0.15;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawStroke 4s ease-in-out infinite;
        }
        
        @keyframes drawStroke {
          0%, 100% { stroke-dashoffset: 1000; }
          50% { stroke-dashoffset: 0; }
        }

        .image-slider {
          position: relative;
          width: 100%;
          padding-bottom: 125%;
          overflow: hidden;
        }

        .slider-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slider-image.active {
          opacity: 1;
          z-index: 1;
        }
      `}</style>

      <section className="hero-bg paper-texture min-h-screen flex items-center justify-center relative overflow-hidden px-6 sm:px-8 lg:px-16 py-20 lg:py-0">
        <svg className="brush-stroke" style={{ top: '10%', left: '5%', width: '200px', height: '150px' }} viewBox="0 0 200 150">
          <path d="M 10 75 Q 50 10, 100 75 T 190 75" />
        </svg>
        
        <svg className="brush-stroke" style={{ bottom: '15%', right: '8%', width: '180px', height: '120px' }} viewBox="0 0 180 120">
          <path d="M 10 60 Q 90 10, 170 60" />
        </svg>
        
        <div className="floating-shape" style={{ top: '15%', left: '10%', width: '120px', height: '120px', border: '2px solid #8a733e', borderRadius: '50%' }}></div>
        <div className="floating-shape" style={{ top: '60%', right: '15%', width: '80px', height: '80px', border: '2px solid #8a733e', transform: 'rotate(45deg)' }}></div>
        <div className="floating-shape" style={{ bottom: '20%', left: '20%', width: '100px', height: '100px', border: '2px solid #8a733e', borderRadius: '30%' }}></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-content space-y-8">
              <div className="space-y-6">
                <h1 className="serif-font text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ color: '#8a733e' }}>
                  <span className="gold-underline">Premium</span> Live Caricature Art for Weddings & Luxury Events
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed" style={{ color: '#8a733e', opacity: 0.85 }}>
                  Bring your special moments to life with bespoke, hand-drawn caricatures crafted live for your guests. A perfect blend of entertainment and artistic elegance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <a 
  href="https://wa.me/918999286115?text=Hi%20Sachin%2C%20I%20want%20to%20book%20you%20for%20an%20event!" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg tracking-wide relative z-10 hover:scale-105 transition-transform duration-300">
    Book Your Event
  </button>
</a>

                {/* <button className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg tracking-wide relative z-10" style={{ color: '#8a733e' }}>
                  View Portfolio
                </button> */}
              </div>
              
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(138, 115, 62, 0.1), rgba(138, 115, 62, 0.2))' }}>
                    <svg className="w-6 h-6" style={{ color: '#8a733e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#8a733e', opacity: 0.8 }}>Live Entertainment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(138, 115, 62, 0.1), rgba(138, 115, 62, 0.2))' }}>
                    <svg className="w-6 h-6" style={{ color: '#8a733e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#8a733e', opacity: 0.8 }}>Bespoke Artistry</span>
                </div>
              </div>
            </div>
            
            <div className="illustration-container relative">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-20 rounded-3xl transform rotate-3"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 25px 50px rgba(138, 115, 62, 0.2)' }}>
                  <div className="image-slider">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Luxury Event ${index + 1}`}
                        className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    ))}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(138, 115, 62, 0.95), transparent)' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Live Caricature Drawing</p>
                        <p className="text-white/80 text-sm">Capturing moments in real-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-30 animate-pulse" style={{ background: 'radial-gradient(circle, #8a733e, transparent)' }}></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ background: 'radial-gradient(circle, #8a733e, transparent)', animationDelay: '1s' }}></div>
              </div>
              
              <div className="absolute top-1/4 -left-12 w-24 h-24 opacity-20 animate-spin" style={{ animationDuration: '20s' }}>
                <svg viewBox="0 0 100 100" fill="none" stroke="#8a733e" strokeWidth="2">
                  <circle cx="50" cy="50" r="40" />
                  <path d="M 50 10 L 50 30 M 50 70 L 50 90 M 10 50 L 30 50 M 70 50 L 90 50" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;