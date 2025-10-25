import React from 'react';

/**
 * Heading Component - "Projects" Title
 * 
 * Displays a centered, bold heading with exact styling specifications
 * Fully responsive across all devices
 * Uses Morion font family with gold color theme
 */

const Heading = () => {
  return (
    <>
      {/* CSS Variables and Font */}
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
          marginTop: '100px',
          marginBottom: '40px',
          fontSize: '60px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '70px',
          textDecoration: 'none'
        }}
      >
        Projects
      </h1>
    </>
  );
};

export default Heading;