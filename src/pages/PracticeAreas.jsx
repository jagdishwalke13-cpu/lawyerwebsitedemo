import React, { useState } from 'react';
import { ArrowRight, Scale, Shield, Award, CheckCircle2, PhoneCall, BookOpen, FileText, ChevronRight, Gavel, Lock, Building, Users, Filter } from 'lucide-react';
import './PracticeAreas.css';

const practiceServices = [
  {
    id: 'family',
    category: 'Court Matters',
    title: 'Family Court Matters',
    description: 'We provide expert legal assistance in family court cases, helping clients navigate sensitive issues such as divorce, maintenance, child custody, and alimony.',
    bgImage: '/practice-property.png',
    statutes: ['Family Courts Act', 'Hindu Marriage Act', 'Special Marriage Act'],
    detail: 'Our compassionate approach ensures your interests and the well-being of your family are always safeguarded throughout every stage of the legal process.'
  },
  {
    id: 'district',
    category: 'Court Matters',
    title: 'District Court Matters',
    description: 'Handling a wide range of civil and criminal disputes at the district court level with strong advocacy.',
    bgImage: '/practice-litigation.png',
    statutes: ['Code of Civil Procedure', 'Bharatiya Nyaya Sanhita (BNS)'],
    detail: 'We provide comprehensive legal representation in various civil suits and criminal trials across District Courts, ensuring timely and effective resolution.'
  },
  {
    id: 'bails',
    category: 'Court Matters',
    title: 'Bails, Criminal Trials',
    description: 'Expert assistance in securing bail and providing dedicated legal defense throughout criminal trials.',
    bgImage: '/practice-cyber.png',
    statutes: ['Bharatiya Nagarik Suraksha Sanhita (BNSS)', 'Criminal Procedure Code'],
    detail: 'Securing immediate relief, regular bail, and anticipatory bail in complex sessions trials while protecting your fundamental rights.'
  },
  {
    id: 'highcourt',
    category: 'Court Matters',
    title: 'High Court Matters',
    description: 'Representation in complex civil and criminal cases before the High Court, including writ petitions challenging government actions.',
    bgImage: '/practice-litigation.png',
    statutes: ['Constitution of India (Article 226)', 'Civil Procedure Code'],
    detail: 'Our appellate practice handles intricate appeals, revisions, and writ petitions before the High Court with commanding courtroom advocacy.'
  },
  {
    id: 'documentation',
    category: 'Documentation',
    title: 'Documentation',
    description: 'Preparation, verification, and notarization of all essential legal documents ensuring clear and lawful transactions.',
    bgImage: '/practice-property.png',
    statutes: ['Registration Act', 'Indian Stamp Act'],
    detail: 'We draft and register high-value commercial agreements, sale deeds, lease deeds, and other statutory documents with rigorous precision.'
  },
  {
    id: 'cooperative',
    category: 'Corporate & Tribunals',
    title: 'Co-operative matters & Appellate',
    description: 'Legal services for cooperative society disputes and appeals, backed by extensive experience with over 200 societies.',
    bgImage: '/practice-corporate.png',
    statutes: ['Co-operative Societies Act'],
    detail: 'Providing specialized counsel for housing societies, credit cooperatives, and managing committee disputes before the appellate authorities.'
  },
  {
    id: 'drt',
    category: 'Corporate & Tribunals',
    title: 'DRT (Debt Recovery Tribunal)',
    description: 'Representation in recovery disputes before the Debt Recovery Tribunal for speedy resolution of financial claims.',
    bgImage: '/practice-corporate.png',
    statutes: ['SARFAESI Act', 'Recovery of Debts Due to Banks and Financial Institutions Act'],
    detail: 'Assisting financial institutions, banks, and corporate debtors in high-value debt recovery proceedings and securitization appeals.'
  },
  {
    id: 'mat',
    category: 'Corporate & Tribunals',
    title: 'MAT (Administrative Tribunal)',
    description: 'Handling service and employment-related disputes before the Maharashtra Administrative Tribunal.',
    bgImage: '/practice-litigation.png',
    statutes: ['Administrative Tribunals Act', 'Service Rules'],
    detail: 'Representing government employees in matters of promotion, transfer, disciplinary actions, and pension disputes before the MAT.'
  },
  {
    id: 'consumer',
    category: 'Corporate & Tribunals',
    title: 'Consumer Matters',
    description: 'Helping consumers assert their rights and pursue grievances through consumer forums and appellate authorities.',
    bgImage: '/practice-property.png',
    statutes: ['Consumer Protection Act'],
    detail: 'Filing complaints and fighting for compensation in cases of medical negligence, deficiency in service, and unfair trade practices.'
  },
  {
    id: 'ipr',
    category: 'Corporate & Tribunals',
    title: 'IPR Matters',
    description: 'A Legal Lawyer help businesses with acquisitions and mergers, trademarks, copyrights and patents.',
    bgImage: '/practice-cyber.png',
    statutes: ['Trade Marks Act', 'Copyright Act', 'Patents Act'],
    detail: 'We safeguard corporate brand equity through trademark prosecution, aggressive infringement litigation, and IP licensing agreements.'
  }
];

const categories = [
  'All Services',
  'Court Matters',
  'Corporate & Tribunals',
  'Documentation'
];

const PracticeAreas = () => {
  const [selectedService, setSelectedService] = useState(practiceServices[0]);
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = activeCategory === 'All Services'
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
          <span className="section-tag text-gold">What We Do</span>
          <h1 className="practice-page-title">Our Services</h1>
          <p className="practice-page-subtitle">
            Professional legal services ensuring your documentation is authenticated, verified, and legally binding.
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
                  const firstMatch = cat === 'All Services' ? practiceServices[0] : practiceServices.find(s => s.category === cat);
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
