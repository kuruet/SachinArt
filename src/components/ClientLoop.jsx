import { useEffect, useRef, useState } from "react";

// Image imports
import client1 from "../assets/hero1.jpg";
import client2 from "../assets/hero2.jpg";
import client3 from "../assets/hero3.jpg";
import client4 from "../assets/Sclient2.jpg";
import client5 from "../assets/hero4.jpg";
import client6 from "../assets/sachinClient1.jpg";
import client7 from "../assets/client6.jpg";
import client8 from "../assets/client7.jpg";
import client9 from "../assets/client8.jpg";
import client10 from "../assets/client9.jpg";
import client11 from "../assets/client10.jpg";
import client12 from "../assets/client11.jpg";

const images = [
  client1, client2, client3, client4, client5, client6,
  client7, client8, client9, client10, client11, client12
];

export default function Work() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [desktopWidth, setDesktopWidth] = useState(0);
  const [mobileWidth, setMobileWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (desktopRef.current) setDesktopWidth(desktopRef.current.scrollWidth);
      if (mobileRef.current) setMobileWidth(mobileRef.current.scrollWidth);
    };

    updateWidths();
    const timer = setTimeout(updateWidths, 300);
    window.addEventListener("resize", updateWidths);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --cream: #fff5df;
          --gold: #8a733e;
        }

        .work-section {
          background: var(--cream);
          padding: 60px 0;
        }

        .marquee-desktop {
          display: flex;
          gap: 20px;
          animation: scroll-desktop ${desktopWidth / 120}s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-desktop {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-${desktopWidth}px,0,0); }
        }

        .marquee-mobile {
          display: flex;
          gap: 14px;
          animation: scroll-mobile ${mobileWidth / 80}s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-mobile {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-${mobileWidth}px,0,0); }
        }

        .img-card {
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          width: clamp(280px, 30vw, 400px);
          height: clamp(340px, 40vw, 500px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .img-card:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 25px rgba(0,0,0,0.25);
        }

        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .heading {
          font-size: 52px;
          color: var(--gold);
          text-align: center;
          margin-bottom: 40px;
          font-family: 'Times New Roman', serif;
          letter-spacing: 2px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .heading { font-size: 32px; }
        }
      `}</style>

      <section className="work-section">
        <h2 className="heading">MY HAPPY CLIENTS</h2>

        {/* Desktop & Tablet */}
        <div className="hidden sm:block overflow-hidden w-full">
          <div className="marquee-desktop">
            <div ref={desktopRef} className="flex gap-5">
              {images.map((img, i) => (
                <div key={"d1"+i} className="img-card">
                  <img loading="lazy" src={img} alt={`Client ${i}`} />
                </div>
              ))}
            </div>

            {/* Duplicate set for infinite loop */}
            <div className="flex gap-5">
              {images.map((img, i) => (
                <div key={"d2"+i} className="img-card" aria-hidden="true">
                  <img loading="lazy" src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden overflow-hidden w-full mt-8">
          <div className="marquee-mobile">
            <div ref={mobileRef} className="flex gap-3">
              {images.map((img, i) => (
                <div key={"m1"+i} className="img-card" style={{ width: "240px", height: "320px" }}>
                  <img loading="lazy" src={img} alt="" />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {images.map((img, i) => (
                <div key={"m2"+i} className="img-card" style={{ width: "240px", height: "320px" }} aria-hidden="true">
                  <img loading="lazy" src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
