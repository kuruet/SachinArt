import { useState, useEffect, useRef } from 'react';

// ✅ Correct production-friendly image imports
import project1 from '../assets/Sclient3.jpg';
import project2 from '../assets/hero2.jpg';
import project3 from '../assets/hero3.jpg';
import project4 from '../assets/Sclient2.jpg';
import project5 from '../assets/hero4.jpg';
import project6 from '../assets/sachinClient1.jpg';
import project7 from '../assets/client6.jpg';
import project8 from '../assets/client7.jpg';

// If needed later:
// import client9 from '../assets/client8.jpg';
// import client10 from '../assets/client9.jpg';
// import client11 from '../assets/client10.jpg';
// import client12 from '../assets/client11.jpg';

// ----------------------------------------------------------------------
// Projects array — using imported asset references (✔ PRODUCTION SAFE)
// ----------------------------------------------------------------------
const projects = [
  { image: project1 },
  { image: project2 },
  { image: project3 },
  { image: project4 },
  { image: project5 },
  { image: project6 },
  { image: project7 },
  { image: project8 },
];

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-labelledby="work-heading"
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: '#fff5df' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ---------- Section Heading ---------- */}
        <h1
          className="morion-heading flex justify-center items-center text-center mx-auto"
          style={{
            color: '#8B7355',
            letterSpacing: '2px',
            marginTop: '50px',
            marginBottom: '40px',
            fontSize: '50px',
            fontWeight: 800,
            lineHeight: '70px',
          }}
        >
          PORTFOLIO
        </h1>

        {/* ---------- Projects Grid ---------- */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div
                className="group block relative h-56 md:h-72 lg:h-96 rounded-xl shadow-lg overflow-hidden"
              >
                {/* BG Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <img src={project.image} alt="" className="sr-only" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300"></div>

                {/* Dummy Text (Optional) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif font-bold text-xl md:text-2xl mb-1">
                    
                  </h3>
                  <p className="text-sm opacity-70"></p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="
              inline-block font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg
              text-[#8a733e] bg-[#fff5df] border-2 border-[#8a733e]
              hover:bg-[#8a733e] hover:text-[#fff5df] hover:shadow-xl
              transition-all duration-300 transform hover:-translate-y-1
            "
          >
            More Work
          </a>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        @font-face {
          font-family: 'Morion';
          src: url('https://cdn.jsdelivr.net/gh/projectwallace/morion@main/morion.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        .morion-heading {
          font-family: 'Morion', serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </section>
  );
};

export default Work;
