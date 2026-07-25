import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Scale, CheckCircle2, ArrowRight, PhoneCall, BookOpen, Users, Building2, Handshake } from 'lucide-react';
import './AboutUs.css';

// Minimalist Vector Icons for Why Us / Core Values Section
const WhyUsIcons = {
  Shield: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Handshake: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  ),
  ScaleSuccess: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
      <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
      <circle cx="8" cy="12" r="2" />
      <path d="M22 12h-4" />
    </svg>
  )
};

// Intersection Observer Component for Fade-Up scroll animations
const FadeUpItem = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-up-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  const triggerEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
  };

  return (
    <div className="about-page-wrapper">
      {/* Page Header Banner */}
      <section className="about-header-banner">
        <div className="container text-center">
          <span className="section-tag text-gold">Heritage & Ethics</span>
          <h1 className="about-page-title">About RAJ LAW ASSOCIATES</h1>
          <p className="about-page-subtitle">
            A premier Central Indian legal chambers dedicated to uncompromising courtroom advocacy, statutory precision, and client trust since inception.
          </p>
        </div>
      </section>

      {/* ==========================================================================
          1. THE 'WELCOME' SECTION (SPLIT-SCREEN LAYOUT) - PROMPT 4 SPECIFICATIONS
          ========================================================================== */}
      <section className="welcome-split-section">
        <div className="container">
          <div className="welcome-grid-split">
            {/* Left Column (Visual): High-res lawyer portrait with floating gold frame */}
            <div className="welcome-visual-left">
              <div className="lawyer-image-wrapper">
                <div className="floating-gold-frame" />
                <img 
                  src="/lawyer-portrait.png" 
                  alt="Senior Advocate Rajesh Jaiswal - Founder & Managing Partner" 
                  className="lawyer-portrait-img"
                />
                <div className="image-experience-badge">
                  <span className="exp-years">25+</span>
                  <span className="exp-text">Years of Supreme Court Standing</span>
                </div>
              </div>
            </div>

            {/* Right Column (Content) */}
            <div className="welcome-content-right">
              <span className="know-firm-tag">KNOW THE FIRM</span>
              <h2 className="welcome-main-heading">Welcome to RAJ LAW ASSOCIATES</h2>
              
              <p className="welcome-body-para">
                Headquartered in Nagpur with an established appellate practice across Central India and New Delhi, RAJ LAW ASSOCIATES is a full-service law firm recognized for its commanding courtroom presence and meticulous strategic advisory. 
              </p>
              
              <p className="welcome-body-para">
                Founded under the leadership of Senior Advocate Rajesh Jaiswal, our chambers represent multinational corporations, public sector undertakings, financial institutions, and individuals of standing. We operate at the intersection of rigorous constitutional jurisprudence and dynamic commercial realities, offering decisive counsel in corporate mergers, arbitration, white-collar defense, and constitutional litigation.
              </p>

              <p className="welcome-body-para">
                Every client engagement is governed by absolute attorney-client privilege, transparent statutory analysis, and a relentless commitment to safeguarding your legal rights.
              </p>

              <div className="welcome-btn-wrap">
                <button 
                  onClick={triggerEnquiryModal}
                  className="btn welcome-read-btn"
                >
                  <span>Request Consultation With Partner</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. THE 'WHY US' SECTION (MINIMALIST VALUE PROPOSITION) - PROMPT 4
          ========================================================================== */}
      <section className="why-us-section">
        <div className="container">
          <div className="why-us-header text-center">
            <h2 className="why-us-title">Why Us</h2>
            <div className="why-us-separator" />
          </div>

          <div className="why-us-grid">
            {/* Column 1: Unrivaled Legal Acumen */}
            <FadeUpItem delay={0}>
              <div className="why-us-col-card">
                <div className="why-us-icon-header">
                  <span className="why-us-number">01</span>
                  <div className="why-us-vector-icon">
                    <WhyUsIcons.Shield />
                  </div>
                </div>
                <h3 className="why-us-card-title">Unrivaled Legal Acumen</h3>
                <p className="why-us-card-desc">
                  Our team comprises highly skilled advocates with decades of courtroom standing across the Supreme Court, High Courts, and specialized tribunals, delivering unmatched strategic counsel.
                </p>
              </div>
            </FadeUpItem>

            {/* Column 2: Transparent Communication */}
            <FadeUpItem delay={200}>
              <div className="why-us-col-card">
                <div className="why-us-icon-header">
                  <span className="why-us-number">02</span>
                  <div className="why-us-vector-icon">
                    <WhyUsIcons.Handshake />
                  </div>
                </div>
                <h3 className="why-us-card-title">Transparent Communication</h3>
                <p className="why-us-card-desc">
                  We prioritize absolute clarity and honesty, ensuring clients are informed at every juncture with realistic assessments, ethical billing, and dedicated responsiveness.
                </p>
              </div>
            </FadeUpItem>

            {/* Column 3: Proven Success Rate */}
            <FadeUpItem delay={400}>
              <div className="why-us-col-card">
                <div className="why-us-icon-header">
                  <span className="why-us-number">03</span>
                  <div className="why-us-vector-icon">
                    <WhyUsIcons.ScaleSuccess />
                  </div>
                </div>
                <h3 className="why-us-card-title">Proven Success Rate</h3>
                <p className="why-us-card-desc">
                  A track record defined by decisive courtroom victories, landmark settlements, and unwavering advocacy that protects client interests in the most complex disputes.
                </p>
              </div>
            </FadeUpItem>
          </div>
        </div>
      </section>

      {/* Institutional Philosophy Banner */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="luxury-card-dark philosophy-box text-center">
            <Scale size={48} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
            <h2>"Justice is the constant and perpetual will to allot to every man his due."</h2>
            <p className="philosophy-author">Senior Adv. Rajesh Jaiswal — Founder, Raj Law Associates</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
