import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, ArrowUp, Scale, Clock, Award, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef} 
      className={`authoritative-footer ${isVisible ? 'footer-fade-in-visible' : 'footer-fade-in-hidden'}`}
    >
      {/* 4 Evenly Spaced Columns Architecture */}
      <div className="container footer-main-grid">
        {/* COLUMN 1: Brand Info & Monogram */}
        <div className="footer-col brand-col">
          <div className="footer-brand-header">
            <div className="footer-monogram">
              <span>RL</span>
            </div>
            <div className="footer-brand-titles">
              <h3 className="footer-firm-name">RAJ LAW ASSOCIATES</h3>
              <span className="footer-firm-tag">ADVOCATES & LEGAL CONSULTANTS</span>
            </div>
          </div>
          <p className="footer-brand-bio">
            Professional and reliable legal counsel in Central India. A premier institutional chamber representing corporate conglomerates, financial institutions, and private individuals before the Supreme Court of India, Bombay High Court, and NCLT tribunals.
          </p>
          <div className="footer-accreditation">
            <Award size={16} className="text-gold flex-shrink-0" />
            <span>Advocate Bar Council of Maharashtra & Goa Reg. No. MAH/1892/1990</span>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/home" className="footer-link">Home Architecture</Link></li>
            <li><Link to="/about-us" className="footer-link">Institutional Philosophy</Link></li>
            <li><Link to="/our-team" className="footer-link">Senior Partners & Counsel</Link></li>
            <li><Link to="/insights" className="footer-link">Legal Insights & Feed</Link></li>
            <li><Link to="/internships" className="footer-link">Careers & Mentorship</Link></li>
            <li><Link to="/intern-wall" className="footer-link">Intern Wall (Alumni)</Link></li>
            <li><Link to="/contact" className="footer-link">Confidential Enquiry</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: Practice Areas */}
        <div className="footer-col practice-col">
          <h4 className="footer-col-title">Practice Domains</h4>
          <ul className="footer-links-list">
            <li><Link to="/practice-areas" className="footer-link">Commercial Litigation & Appeals</Link></li>
            <li><Link to="/practice-areas" className="footer-link">Corporate M&A & Joint Ventures</Link></li>
            <li><Link to="/practice-areas" className="footer-link">White-Collar Crime & PMLA Defense</Link></li>
            <li><Link to="/practice-areas" className="footer-link">Bail & High Court Petitions</Link></li>
            <li><Link to="/practice-areas" className="footer-link">Real Estate & RERA Disputes</Link></li>
            <li><Link to="/practice-areas" className="footer-link">Cyber Fraud & IT Cyber Security</Link></li>
            <li><Link to="/practice-areas" className="footer-link">Family & Matrimonial Settlements</Link></li>
          </ul>
        </div>

        {/* COLUMN 4: Headquarters Address & Direct Contacts */}
        <div className="footer-col hq-col">
          <h4 className="footer-col-title">Nagpur Chambers HQ</h4>
          <div className="hq-details-box">
            <div className="hq-info-row">
              <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
              <span>
                <strong>Ravi Nagar Chambers:</strong><br />
                19/4, D - Type Quarters, PWD Ravi Nagar, Nagpur, Maharashtra - 440001
              </span>
            </div>
            <div className="hq-info-row">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <span>
                <a href="tel:+919021640817" className="footer-contact-link">+91-9021640817</a> / <a href="tel:+917887864007" className="footer-contact-link">+91-7887864007</a>
              </span>
            </div>
            <div className="hq-info-row">
              <Mail size={16} className="text-gold flex-shrink-0" />
              <a href="mailto:adv.rajeshjaiswal@gmail.com" className="footer-contact-link">adv.rajeshjaiswal@gmail.com</a>
            </div>
            <div className="hq-info-row">
              <Clock size={16} className="text-gold flex-shrink-0" />
              <span><strong>Chamber Hours:</strong> Mon - Sat: 10:00 AM - 8:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip & Back to Top */}
      <div className="footer-bottom-strip">
        <div className="container bottom-strip-inner">
          <div className="copyright-text">
            <span>© {currentYear} <strong>RAJ LAW ASSOCIATES</strong>. All rights reserved. Under Bar Council of India regulations, this website is meant solely for informational purposes.</span>
          </div>

          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="legal-sublink">Privacy Policy</a>
            <span className="footer-sep">•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="legal-sublink">Terms of Counsel</a>
            <span className="footer-sep">•</span>
            <a href="#disclaimer" onClick={(e) => e.preventDefault()} className="legal-sublink">BCI Disclaimer</a>
          </div>

          <button onClick={scrollToTop} className="btn back-to-top-btn" aria-label="Scroll back to top of page">
            <span>Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
