import { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import profile from '../assets/sachin.jpg';
import LineDesign from './LineDesign';

// Social links
const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/sachinbagul_artt/', 
    icon: <FaInstagram size={42} color="#8a733e" />
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/918999286115', 
    icon: <FaWhatsapp size={42} color="#8a733e" />
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="w-full min-h-screen flex items-center"
      style={{ backgroundColor: '#fff5df' }}
    >
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 
              className="morion-text font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ color: "#8a733e" }}
            >
              Hello!
            </h1>

            <div className="space-y-4">
              
              <p 
                className="morion-text text-lg md:text-xl leading-relaxed"
                style={{ color: "#b7a26e" }}
              >
                I’m Sachin Bagul. I specialize in creating premium caricatures 
                and personalized portraits that capture the true essence of 
                people and their most meaningful moments.
              </p>

              <p 
                className="morion-text text-base md:text-lg leading-relaxed"
                style={{ color: "#b7a26e" }}
              >
                Over the years, I’ve had the privilege of sketching live at weddings, 
                events, and special occasions — turning emotions, personalities, 
                and beautiful memories into unique pieces of art.
                <br /><br />
                For me, every artwork is more than just a drawing… it’s a moment 
                frozen in time, something you can cherish forever. My passion 
                lies in bringing joy through my art, and I put my heart into 
                every line, shade, and expression I create.
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform "
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* DECORATIVE LINE */}
            <div className="block pt-8">
              <LineDesign />
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse hidden lg:block"></div>

            <div className="relative z-10">

              <div 
                className="absolute -top-8 -left-8 w-24 h-24 border-4 border-gray-900 rounded-full opacity-30 hidden md:block"
                style={{ animation: 'spin 20s linear infinite' }}
              ></div>

              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={profile}
                  alt="Sachin Bagul - Artist"
                  className="w-full h-auto object-cover aspect-square lg:aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10 hidden md:block"></div>
            </div>

            <div 
              className="absolute top-1/4 -right-8 w-16 h-16 rounded-lg opacity-20 hidden lg:block"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            ></div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @font-face {
          font-family: 'Morion';
          src: url('https://cdn.jsdelivr.net/gh/projectwallace/morion@main/morion.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        .morion-text {
          font-family: 'Morion', serif;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
};

export default About;
