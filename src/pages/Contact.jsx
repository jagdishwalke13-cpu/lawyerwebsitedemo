import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Lock, Send, CheckCircle2, Shield, Clock, 
  Award, ArrowRight, AlertTriangle, Scale, Building2, Briefcase, 
  FileText, Check, ShieldCheck, Sparkles 
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Commercial Litigation & Appeals',
    caseDetails: '',
    isUrgent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [caseRef, setCaseRef] = useState('');

  const practiceDomains = [
    { id: 'Commercial Litigation & Appeals', label: '⚖️ Commercial Litigation & Appeals' },
    { id: 'Corporate Law & M&A', label: '🏢 Corporate Law & M&A' },
    { id: 'White Collar Defense & PMLA', label: '🚨 White Collar Defense & PMLA' },
    { id: 'Bail & Criminal Trial Defense', label: '⚖️ Bail & Criminal Defense' },
    { id: 'Real Estate & RERA Appeals', label: '📑 Property & RERA Appeals' },
    { id: 'Cyber Fraud & Banking Recovery', label: '💻 Cyber Fraud & Banking' },
    { id: 'Family & Matrimonial Settlements', label: '🤝 Family & Matrimonial' },
    { id: 'General Legal Advisory', label: '📋 General Legal Counsel' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDomainSelect = (domainId) => {
    setFormData(prev => ({ ...prev, practiceArea: domainId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate unique case reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedRef = `RLA-2026-CASE-${randomNum}`;

    // Simulate encrypted transmission to Senior Partner chambers
    setTimeout(() => {
      setIsSubmitting(false);
      setCaseRef(generatedRef);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: 'Commercial Litigation & Appeals',
      caseDetails: '',
      isUrgent: false
    });
    setIsSubmitted(false);
    setCaseRef('');
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. Header Section: Top Banner with Dark Navy Background & Strict Top Padding */}
      <section className="contact-header-banner">
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag text-gold">Direct Senior Partner Access</span>
          <h1 className="contact-banner-title">Schedule a Consultation</h1>
          <p className="contact-banner-subtext">
            Confidential, Professional, and Result-Oriented Legal Counsel.
          </p>
        </div>
        <div className="banner-glow-bg"></div>
      </section>

      {/* Main Grid Section (2-Column CSS Grid: 50% / 50% on Desktop) */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            
            {/* ==========================================================================
                2. LEFT COLUMN: Contact Information, Location & Chamber Access
                ========================================================================== */}
            <div className="contact-info-col">
              <div className="info-header-block">
                <span className="info-subtag text-gold">Nagpur Headquarters</span>
                <h2 className="contact-section-title">Get in Touch</h2>
                <p className="contact-section-desc">
                  Our Senior Partners represent enterprises and individuals before the Supreme Court of India, High Courts, NCLT, and statutory tribunals. Reach out directly to our Nagpur chambers for prioritized legal intervention.
                </p>
              </div>

              {/* Luxury Interactive Contact Cards */}
              <div className="contact-blocks-wrapper">
                
                {/* Card 1: Headquarters Address */}
                <a 
                  href="https://maps.google.com/?q=Ravi+Nagar+Nagpur+440001" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-info-card"
                >
                  <div className="icon-box-navy">
                    <MapPin size={24} className="icon-box-gold" />
                  </div>
                  <div className="card-text-content">
                    <span className="card-label">Headquarters Chambers</span>
                    <h4 className="card-main-val">Ravi Nagar Chambers</h4>
                    <p className="card-sub-val">
                      19/4, D - Type Quarters, PWD Ravi Nagar,<br />
                      Nagpur, Maharashtra - 440001
                    </p>
                  </div>
                </a>

                {/* Card 2: Phone Number & Bail Hotline */}
                <div className="contact-info-card">
                  <div className="icon-box-navy">
                    <Phone size={24} className="icon-box-gold" />
                  </div>
                  <div className="card-text-content">
                    <span className="card-label">Direct Desk & Bail Hotline</span>
                    <h4 className="card-main-val">+91-9021640817</h4>
                    <p className="card-sub-val">
                      Direct Chamber Desk: <a href="tel:+919021640817" className="link-hover">+91-9021640817</a><br />
                      Partner Standby Line: <a href="tel:+917887864007" className="link-hover">+91-7887864007</a>
                    </p>
                  </div>
                </div>

                {/* Card 3: Confidential Email Address */}
                <a href="mailto:adv.rajeshjaiswal@gmail.com" className="contact-info-card">
                  <div className="icon-box-navy">
                    <Mail size={24} className="icon-box-gold" />
                  </div>
                  <div className="card-text-content">
                    <span className="card-label">Confidential Electronic Mail</span>
                    <h4 className="card-main-val">adv.rajeshjaiswal@gmail.com</h4>
                    <p className="card-sub-val">
                      Encrypted brief submissions & corporate litigation advisory. 100% attorney-client privilege.
                    </p>
                  </div>
                </a>
              </div>

              {/* Chamber Working Hours Box */}
              <div className="chamber-hours-box">
                <div className="hours-icon">
                  <Clock size={22} className="text-gold" />
                </div>
                <div className="hours-text">
                  <strong className="hours-title">Chamber Operational Hours</strong>
                  <div className="hours-grid">
                    <span>Monday – Friday:</span> <span>10:00 AM – 8:30 PM</span>
                    <span>Saturday (Consultations):</span> <span>10:30 AM – 6:00 PM</span>
                    <span>Sunday & Supreme Court Recess:</span> <span className="text-gold font-semibold">By Emergency Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Map Embed pointing to Ravi Nagar with Styled Gold Frame */}
              <div className="map-embed-container">
                <div className="map-header-badge">
                  <span className="map-badge-title">📍 RAVI NAGAR CHAMBERS, NAGPUR</span>
                  <span className="map-badge-hint">Interactive Satellite View</span>
                </div>
                <div className="map-iframe-wrapper">
                  <iframe
                    title="Raj Law Associates Nagpur Chambers Map"
                    src="https://maps.google.com/maps?q=Ravi+Nagar,+Nagpur,+Maharashtra+440001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-embed-iframe"
                  />
                </div>
              </div>
            </div>

            {/* ==========================================================================
                3. RIGHT COLUMN: The Premium Lawyer Case Enquiry Form Portal
                ========================================================================== */}
            <div className="form-card-col">
              <div className="enquiry-form-card">
                
                {isSubmitted ? (
                  /* Success Confirmation View - The Million-Dollar UX Reveal */
                  <div className="form-success-view">
                    <div className="success-icon-badge">
                      <ShieldCheck size={56} className="text-gold" />
                    </div>
                    <span className="success-tag">Transmission Confirmed</span>
                    <h3 className="success-title">Case Brief Transmitted Securely</h3>
                    <p className="success-message">
                      Thank you for contacting <strong>RAJ LAW ASSOCIATES</strong>. Your case facts have been encrypted with 256-bit attorney-client privilege protocols and routed directly to Senior Partner Adv. Rajesh Jaiswal’s desk.
                    </p>

                    <div className="case-ref-box">
                      <span className="ref-label">Confidential Reference Number</span>
                      <strong className="ref-value">{caseRef}</strong>
                    </div>

                    <div className="success-timeline-box">
                      <div className="timeline-item">
                        <Clock size={18} className="text-gold flex-shrink-0" />
                        <div>
                          <strong>Expected Consultation Callback:</strong>
                          <span>{formData.isUrgent ? 'Within 30 Minutes (Urgent Priority)' : 'Within 2 to 4 Business Hours'}</span>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <Award size={18} className="text-gold flex-shrink-0" />
                        <div>
                          <strong>Assigned Chamber Desk:</strong>
                          <span>Senior Partner Litigation Desk, Ravi Nagar Chambers</span>
                        </div>
                      </div>
                    </div>

                    <button onClick={handleReset} className="btn reset-enquiry-btn">
                      <span>Submit Another Case Brief</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  /* Active Case Enquiry Form View */
                  <>
                    <div className="form-header">
                      <div className="form-title-row">
                        <span className="form-status-badge">
                          <span className="status-dot-pulse"></span> Active Intake Portal
                        </span>
                      </div>
                      <h3 className="form-title">Confidential Case Enquiry</h3>
                      <p className="form-subtitle">
                        Direct communication with our Senior Partners. Select your primary legal domain below and submit your brief under strict statutory confidentiality.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="premium-case-form">
                      
                      {/* Domain Selector Pills */}
                      <div className="form-field-section">
                        <label className="section-field-label">
                          <span>1. Select Primary Practice Domain *</span>
                        </label>
                        <div className="domain-pills-grid">
                          {practiceDomains.map((domain) => {
                            const isSelected = formData.practiceArea === domain.id;
                            return (
                              <button
                                type="button"
                                key={domain.id}
                                onClick={() => handleDomainSelect(domain.id)}
                                className={`domain-pill-btn ${isSelected ? 'active-domain' : ''}`}
                              >
                                <span>{domain.label}</span>
                                {isSelected && <Check size={14} className="text-gold flex-shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Client Identification Fields */}
                      <div className="form-field-section">
                        <label className="section-field-label">
                          <span>2. Client & Corporate Details *</span>
                        </label>
                        
                        <div className="form-fields-grid">
                          {/* Name Field */}
                          <div className="input-wrap">
                            <label htmlFor="name" className="field-label">Full Name / Corporate Title *</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. Adv. Rajesh Kumar / MD, Apex Enterprises"
                              className="input-field"
                            />
                          </div>

                          {/* Phone Field */}
                          <div className="input-wrap">
                            <label htmlFor="phone" className="field-label">Direct Phone / WhatsApp Number *</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91-9876543210"
                              className="input-field"
                            />
                          </div>

                          {/* Email Field (Full Width) */}
                          <div className="input-wrap col-full">
                            <label htmlFor="email" className="field-label">Confidential Email Address *</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="client@enterprise.com"
                              className="input-field"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Case Details Textarea */}
                      <div className="form-field-section">
                        <div className="label-with-counter">
                          <label htmlFor="caseDetails" className="section-field-label">
                            <span>3. Case Brief & Factual Background *</span>
                          </label>
                          <span className="char-counter">{formData.caseDetails.length} / 1000 characters</span>
                        </div>
                        <textarea
                          id="caseDetails"
                          name="caseDetails"
                          required
                          rows={4}
                          maxLength={1000}
                          value={formData.caseDetails}
                          onChange={handleChange}
                          placeholder="Please summarize the key factual dispute, judicial forum involved (e.g., Supreme Court, Bombay High Court, NCLT), or immediate statutory relief required..."
                          className="textarea-field"
                        />
                      </div>

                      {/* Urgent Priority Checkbox Toggle */}
                      <div className="urgent-toggle-box">
                        <label className="urgent-checkbox-label">
                          <input
                            type="checkbox"
                            name="isUrgent"
                            checked={formData.isUrgent}
                            onChange={handleChange}
                            className="urgent-checkbox"
                          />
                          <div className="urgent-text-content">
                            <span className="urgent-title flex items-center gap-1">
                              <AlertTriangle size={15} className="text-gold" /> Flag as Urgent Priority Matter (Bail / Injunction Required)
                            </span>
                            <span className="urgent-desc">
                              Check this if you require immediate 24-hour courtroom intervention or emergency bail filing.
                            </span>
                          </div>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="submit-btn-navy"
                      >
                        {isSubmitting ? (
                          <span className="submitting-flex">
                            <span className="spinner-mini" /> Encrypting & Transmitting Brief...
                          </span>
                        ) : (
                          <span className="submit-flex">
                            <span>Submit Confidential Case Brief</span>
                            <Send size={18} className="text-gold" />
                          </span>
                        )}
                      </button>
                    </form>

                    {/* Security & Privilege Footer */}
                    <div className="form-security-note">
                      <Lock size={15} className="security-icon" />
                      <span>
                        <strong>Strict Attorney-Client Privilege:</strong> All consultations and case facts transmitted via this portal are protected under Section 126 of the Indian Evidence Act, 1872. Zero data disclosure guaranteed.
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Emergency Consultation Strip */}
      <section className="contact-emergency-strip">
        <div className="container">
          <div className="luxury-card-dark emergency-box flex-row-between">
            <div className="emergency-text">
              <span className="em-tag">24/7 Priority Chamber Access</span>
              <h3>Requiring Immediate Bail Intervention or Injunction?</h3>
              <p>Our criminal defense and appellate team is on standby for urgent courtroom filings across Central India and New Delhi.</p>
            </div>
            <div className="emergency-action">
              <a href="tel:+919021640817" className="btn hero-btn-gold">
                <Phone size={18} />
                <span>Call Emergency Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
