import React, { useState } from 'react';
import { ArrowRight, Scale, Shield, Award, CheckCircle2, PhoneCall, BookOpen, FileText, ChevronRight, Gavel, Lock, Building, Users, Filter } from 'lucide-react';
import './PracticeAreas.css';

// 8 Interactive Service Cards with Categories
const practiceServices = [
  {
    id: 'corporate',
    category: 'Corporate & Commercial',
    title: 'Corporate Law & M&A',
    description: 'Structuring joint ventures, mergers, regulatory compliance, and governance for top Indian corporations.',
    bgImage: '/practice-corporate.png',
    statutes: ['Companies Act, 2013', 'SEBI Regulations', 'FEMA & RBI Guidelines', 'Insolvency & Bankruptcy Code (IBC)'],
    detail: 'We advise domestic and multinational enterprises on complex cross-border transactions, joint ventures, private equity investments, and corporate restructuring before NCLT and appellate tribunals.'
  },
  {
    id: 'litigation',
    category: 'Trial & Litigation',
    title: 'Commercial Litigation',
    description: 'Aggressive representation in shareholder disputes, recovery suits, and Supreme Court appeals.',
    bgImage: '/practice-litigation.png',
    statutes: ['Code of Civil Procedure (CPC)', 'Arbitration & Conciliation Act', 'Commercial Courts Act', 'Specific Relief Act'],
    detail: 'Our litigation team represents corporate entities and promoters in high-stakes commercial disputes, contractual breach enforcement, and corporate recovery before the Supreme Court and High Courts.'
  },
  {
    id: 'white-collar',
    category: 'Constitutional & Criminal',
    title: 'White Collar & PMLA',
    description: 'Specialized criminal defense in financial fraud, ED/CBI investigations, and economic offenses.',
    bgImage: '/practice-cyber.png',
    statutes: ['Prevention of Money Laundering Act (PMLA)', 'Prevention of Corruption Act', 'Companies Act Fraud Sections', 'BNS & IPC Economic Offenses'],
    detail: 'We provide strategic defense counsel in multi-jurisdictional investigations by ED, CBI, SFIO, and EOW, defending directors and high-net-worth individuals in white-collar prosecutions.'
  },
  {
    id: 'bail',
    category: 'Constitutional & Criminal',
    title: 'Bail Matters & Defense',
    description: 'Immediate intervention, anticipatory bail, and rigorous criminal trial defense across all jurisdictions.',
    bgImage: '/practice-litigation.png',
    statutes: ['Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC', 'Bharatiya Nyaya Sanhita (BNS) / IPC', 'NDPS Act', 'UAPA & MCOCA'],
    detail: 'We secure immediate constitutional relief, regular bail, and anticipatory bail in complex sessions and High Court trials, ensuring absolute protection of personal liberty and constitutional rights.'
  },
  {
    id: 'family',
    category: 'Constitutional & Criminal',
    title: 'Family & Matrimonial',
    description: 'Confidential resolution of high-net-worth divorce, child custody, and family estate settlements.',
    bgImage: '/practice-property.png',
    statutes: ['Hindu Marriage Act', 'Special Marriage Act', 'Guardians and Wards Act', 'Family Courts Act'],
    detail: 'We handle sensitive matrimonial disputes, international child custody petitions, alimony negotiations, and family business succession with utmost discretion and dignity.'
  },
  {
    id: 'property',
    category: 'Trial & Litigation',
    title: 'Real Estate & Property',
    description: 'Title due diligence, land acquisition, RERA disputes, and commercial lease structuring.',
    bgImage: '/practice-property.png',
    statutes: ['Transfer of Property Act', 'Real Estate (Regulation and Development) Act (RERA)', 'Registration Act', 'Land Acquisition Act'],
    detail: 'Our property practice conducts exhaustive title due diligence, represents developers and buyers in RERA litigation, and drafts high-value commercial leases and conveyance deeds.'
  },
  {
    id: 'cyber',
    category: 'Technology & IPR',
    title: 'Cyber Fraud & IT Law',
    description: 'Legal defense and recovery in online financial fraud, data privacy breaches, and IT Act disputes.',
    bgImage: '/practice-cyber.png',
    statutes: ['Information Technology Act, 2000', 'Digital Personal Data Protection Act (DPDP)', 'Cyber Crime Rules', 'BNS Cyber Offenses'],
    detail: 'We assist victims of complex banking cyber fraud, crypto asset tracing, data breach litigation, and corporate compliance with emerging Indian data privacy frameworks.'
  },
  {
    id: 'ip',
    category: 'Technology & IPR',
    title: 'Intellectual Property',
    description: 'Trademark protection, patent infringement litigation, and international domestic arbitration.',
    bgImage: '/practice-corporate.png',
    statutes: ['Trade Marks Act, 1999', 'Patents Act, 1970', 'Copyright Act, 1957', 'Designs Act'],
    detail: 'We safeguard corporate brand equity through trademark prosecution, aggressive infringement litigation, and licensing agreements before Commercial Courts and IP divisions.'
  }
];

const categories = [
  'All Specializations',
  'Corporate & Commercial',
  'Trial & Litigation',
  'Constitutional & Criminal',
  'Technology & IPR'
];

const PracticeAreas = () => {
  const [selectedService, setSelectedService] = useState(practiceServices[0]);
  const [activeCategory, setActiveCategory] = useState('All Specializations');

  const filteredServices = activeCategory === 'All Specializations'
    ? practiceServices
    : practiceServices.filter(s => s.category === activeCategory);

  const triggerEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
  };

  return (
    <div className="practice-page-wrapper">
      {/* Page Header Banner - STRICT 170px top padding guarantees ZERO OVERLAP with fixed navbar */}
      <section className="practice-page-header">
        <div className="container text-center">
          <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            Our Legal Specializations
          </span>
          <h1 className="practice-page-title">Unrivaled Practice Areas</h1>
          <p className="practice-page-subtitle">
            Combining rigorous statutory precision with commanding courtroom advocacy across corporate law, commercial litigation, white-collar defense, and constitutional litigation.
          </p>
        </div>
      </section>

      {/* ==========================================================================
          PRACTICE AREAS INTERACTIVE CARD GRID (WITH FILTER TABS)
          ========================================================================== */}
      <section className="practice-interactive-section">
        <div className="container">
          <div className="practice-section-header text-center">
            <span className="practice-what-we-do-tag">WHAT WE DO</span>
            <h2 className="practice-main-title">Our Practice Areas</h2>
            <p className="practice-header-desc">
              We deliver commanding courtroom advocacy and strategic legal counsel across diverse legal domains, safeguarding enterprise assets and individual rights with unwavering precision.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="practice-filter-bar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat);
                  const firstMatch = cat === 'All Specializations' ? practiceServices[0] : practiceServices.find(s => s.category === cat);
                  if (firstMatch) setSelectedService(firstMatch);
                }}
                className={`practice-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Responsive CSS Grid Container (4-col XL, 3-col Desktop, 2-col Tablet, 1-col Mobile) */}
          <div className="practice-cards-grid">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`practice-interactive-card ${selectedService.id === service.id ? 'active-card' : ''}`}
              >
                {/* Background Image with Zoom on hover */}
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="card-bg-visual"
                />
                
                {/* Gradient Overlay that darkens on hover */}
                <div className="card-gradient-overlay" />
                
                {/* Content at Bottom that lifts up on hover */}
                <div className="card-content-block">
                  <span className="card-cat-badge">{service.category}</span>
                  <h3 className="card-service-title">{service.title}</h3>
                  <p className="card-service-snippet">{service.description}</p>
                  
                  <div className="card-learn-more">
                    <span>{selectedService.id === service.id ? 'Active Domain' : 'Explore Domain'}</span>
                    <ArrowRight size={16} className="learn-arrow-icon" />
                  </div>
                </div>

                {/* Bottom Gold Border Highlight that fades in on hover */}
                <div className="card-bottom-gold-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Domain In-Depth Focus Section */}
      <section className="practice-domain-focus">
        <div className="container">
          <div className="domain-focus-box">
            <div className="domain-focus-left">
              <span className="domain-tag">PRACTICE IN-DEPTH ({selectedService.category})</span>
              <h2 className="domain-title">{selectedService.title}</h2>
              <p className="domain-detail-text">{selectedService.detail}</p>
              
              <div className="domain-cta-actions">
                <button onClick={triggerEnquiryModal} className="btn hero-btn-primary">
                  <span>Request Counsel for {selectedService.title.split(' ')[0]}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="domain-focus-right">
              <div className="statute-box">
                <div className="statute-header">
                  <Gavel className="text-gold" size={22} />
                  <h4>Key Governing Statutes & Tribunals</h4>
                </div>
                <ul className="statute-list">
                  {selectedService.statutes.map((statute, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                      <span>{statute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="practice-consult-banner text-center">
        <div className="container">
          <div className="bottom-cta-box">
            <div className="cta-box-content">
              <h3>Need Immediate Legal Intervention?</h3>
              <p>Our Senior Partners are available for urgent legal filings, bail petitions, and commercial injunctions.</p>
              <div className="cta-buttons-inline">
                <button onClick={triggerEnquiryModal} className="btn hero-btn-primary">
                  <span>Schedule Partner Consultation</span>
                </button>
                <a href="tel:+919021640817" className="btn hero-btn-secondary">
                  <PhoneCall size={16} />
                  <span>Call +91-9021640817</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
