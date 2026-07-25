import React, { useState } from 'react';
import { Award, Scale, Quote, GraduationCap } from 'lucide-react';
import './InternWall.css';

// 10 Distinct Legal Scholars / Alumni with varying heights for authentic Masonry Grid
const scholarsData = [
  {
    id: 'scholar-1',
    name: 'Rohan Mehta',
    batch: '2026 Batch',
    cycle: 'Summer Batch 2026',
    university: 'Maharashtra National Law University (MNLU), Nagpur',
    image: '/intern-male-1.png',
    testimonial: 'An incredible learning experience in Supreme Court drafting and commercial arbitration proceedings.',
    heightClass: 'card-tall'
  },
  {
    id: 'scholar-2',
    name: 'Ananya Deshmukh',
    batch: '2026 Batch',
    cycle: 'Winter Batch 2026',
    university: 'ILS Law College, Pune',
    image: '/intern-female-1.png',
    testimonial: 'The mentorship under Adv. Rajesh Jaiswal sir provided unmatched clarity on constitutional litigation and bail petitions.',
    heightClass: 'card-medium'
  },
  {
    id: 'scholar-3',
    name: 'Vikramaditya Singhania',
    batch: '2025 Batch',
    cycle: 'Summer Batch 2025',
    university: 'National Law School of India University (NLSIU), Bangalore',
    image: '/lawyer-portrait.png',
    testimonial: 'Working on complex corporate M&A structuring and NCLT shareholder disputes was the defining highlight of my law school journey.',
    heightClass: 'card-extra-tall'
  },
  {
    id: 'scholar-4',
    name: 'Priyanka Banerjee',
    batch: '2025 Batch',
    cycle: 'Autumn Batch 2025',
    university: 'Government Law College (GLC), Mumbai',
    image: '/intern-female-1.png',
    testimonial: 'Rigorous statutory due diligence and real estate RERA dispute resolution in a commanding, professional chamber environment.',
    heightClass: 'card-short'
  },
  {
    id: 'scholar-5',
    name: 'Aditya Vardhan Rao',
    batch: '2025 Batch',
    cycle: 'Winter Batch 2025',
    university: 'NALSAR University of Law, Hyderabad',
    image: '/intern-male-1.png',
    testimonial: 'Gained direct courtroom advocacy exposure and assisted in multi-jurisdictional white-collar PMLA defense filings.',
    heightClass: 'card-medium'
  },
  {
    id: 'scholar-6',
    name: 'Siddharth Kulkarni',
    batch: '2024 Batch',
    cycle: 'Summer Batch 2024',
    university: 'Faculty of Law, Delhi University (DU)',
    image: '/lawyer-portrait.png',
    testimonial: 'The level of statutory precision and courtroom ethics practiced at Raj Law Associates set the gold standard for my legal career.',
    heightClass: 'card-tall'
  },
  {
    id: 'scholar-7',
    name: 'Devika Sharma',
    batch: '2024 Batch',
    cycle: 'Winter Batch 2024',
    university: 'Symbiosis Law School (SLS), Pune',
    image: '/intern-female-1.png',
    testimonial: 'Assisted senior partners in complex banking cyber fraud recovery and DPDP data privacy compliance audits.',
    heightClass: 'card-extra-tall'
  },
  {
    id: 'scholar-8',
    name: 'Karanvir Singh',
    batch: '2024 Batch',
    cycle: 'Summer Batch 2024',
    university: 'National Law University (NLU), Delhi',
    image: '/intern-male-1.png',
    testimonial: 'From researching IPC amendments to observing live High Court arguments, every single day was intellectually rewarding.',
    heightClass: 'card-medium'
  },
  {
    id: 'scholar-9',
    name: 'Tanvi Agarwal',
    batch: '2026 Batch',
    cycle: 'Spring Batch 2026',
    university: 'Hidayatullah National Law University (HNLU), Raipur',
    image: '/intern-female-1.png',
    testimonial: 'A collaborative, highly academic chamber where interns are entrusted with meaningful research and client brief preparation.',
    heightClass: 'card-short'
  },
  {
    id: 'scholar-10',
    name: 'Pranav Joshi',
    batch: '2025 Batch',
    cycle: 'Spring Batch 2025',
    university: 'Gujarat National Law University (GNLU), Gandhinagar',
    image: '/intern-male-1.png',
    testimonial: 'The exposure to commercial contracts and insolvency proceedings under IBC gave me a tremendous competitive edge in corporate law.',
    heightClass: 'card-tall'
  }
];

const filterBatches = ['All', '2026 Batch', '2025 Batch', '2024 Batch'];

const InternWall = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [scholars, setScholars] = useState(scholarsData);

  const handleFilterChange = (batch) => {
    setActiveFilter(batch);
  };

  const filteredScholars = activeFilter === 'All'
    ? scholarsData
    : scholarsData.filter(item => item.batch === activeFilter);

  return (
    <div className="intern-wall-wrapper">
      {/* 1. Page Header & Introduction (Solid White with Faint Scales Watermark) */}
      <section className="intern-wall-header text-center">
        {/* Faint watermark background SVG */}
        <div className="scales-watermark" aria-hidden="true">
          <Scale size={420} className="watermark-svg" />
        </div>

        <div className="container header-content-relative">
          <span className="section-tag text-gold">Alumni Showcase & Mentorship Legacy</span>
          <h1 className="intern-wall-title">Our Legal Scholars</h1>
          <p className="intern-wall-subtext">
            Celebrating the bright minds who have assisted, learned, and grown with Raj Law Associates.
          </p>

          {/* 4. Filter System: Small pill-shaped outline buttons */}
          <div className="wall-filter-bar">
            {filterBatches.map((batch) => (
              <button
                key={batch}
                onClick={() => handleFilterChange(batch)}
                className={`wall-filter-btn ${activeFilter === batch ? 'active' : ''}`}
              >
                {batch}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Gallery Architecture (Responsive Masonry Grid) */}
      <section className="intern-gallery-section">
        <div className="container">
          <div className="masonry-grid-container">
            {filteredScholars.map((scholar) => (
              /* 3. Intern Card Design & Hover Dynamics (Million-Dollar Reveal) */
              <div 
                key={scholar.id} 
                className={`intern-card ${scholar.heightClass}`}
              >
                {/* Default State: Crisp Black & White (Grayscale filter), transitions to full color on hover */}
                <div className="image-frame">
                  <img 
                    src={scholar.image} 
                    alt={scholar.name} 
                    className="scholar-portrait-img"
                  />
                  <div className="card-top-badge">
                    <span>{scholar.batch.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Hover Animation: Dark Overlay slides up smoothly from bottom */}
                <div className="scholar-reveal-overlay">
                  <div className="overlay-inner-content">
                    {/* Intern Name: Playfair Display, Bold, 1.2rem, White */}
                    <h3 className="scholar-name">{scholar.name}</h3>
                    
                    {/* Batch / Duration: Inter, 12px, Solid Gold */}
                    <span className="scholar-cycle">{scholar.cycle}</span>
                    
                    {/* University Name: Inter, 13px, Light Grey */}
                    <p className="scholar-university">
                      <GraduationCap size={14} className="text-gold inline-icon" />
                      {scholar.university}
                    </p>
                    
                    {/* Short Testimonial: Faint italicized quote at bottom */}
                    <div className="scholar-testimonial-box">
                      <Quote size={14} className="quote-icon-gold" />
                      <p className="testimonial-text">"{scholar.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredScholars.length === 0 && (
            <div className="no-scholars-msg text-center">
              <p>No scholars found for this selected batch cycle.</p>
            </div>
          )}
        </div>
      </section>

      {/* Mentorship Invitation Banner */}
      <section className="intern-wall-cta text-center">
        <div className="container">
          <div className="luxury-card-dark wall-cta-box">
            <Award size={36} className="text-gold margin-auto mb-3" />
            <h2 className="cta-heading">Ready to Join Our Next Mentorship Cohort?</h2>
            <p className="cta-subtext">
              We invite exceptional law students from top universities across India to apply for our intensive summer and winter chamber cycles.
            </p>
            <div className="cta-actions-row">
              <a href="/internships" className="btn hero-btn-primary">
                <span>Apply for Internship</span>
              </a>
              <a href="/about-us" className="btn hero-btn-secondary">
                <span>Explore Chamber Philosophy</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternWall;
