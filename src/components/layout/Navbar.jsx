import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Globe, Phone, Mail, Menu, X, ChevronDown, Shield, CheckCircle2, Download, FileText, Award, Scale, MessageSquare, PhoneCall } from 'lucide-react';
import './Navbar.css';

// Minimalist Gold Social SVGs for guaranteed pixel-perfect rendering
const SocialIcons = {
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  Twitter: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  ),
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  YouTube: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  )
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [contactMode, setContactMode] = useState('form');
  const [downloadsModalOpen, setDownloadsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [downloadToast, setDownloadToast] = useState(null);
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleOpenModal = () => {
      setEnquiryModalOpen(true);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('open-enquiry-modal', handleOpenModal);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-enquiry-modal', handleOpenModal);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setResourcesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'PRACTICE AREAS', path: '/practice-areas' },
    { name: 'OUR TEAM', path: '/our-team' },
    { name: 'INSIGHTS', path: '/insights' },
  ];

  const languages = ['Hindi', 'Marathi', 'Gujarati', 'Bengali', 'Tamil'];

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setEnquiryModalOpen(false);
    }, 2500);
  };

  const handleTriggerDownload = (docName) => {
    setDownloadToast(`Downloading: ${docName} (PDF)...`);
    setTimeout(() => {
      setDownloadToast(null);
      setDownloadsModalOpen(false);
    }, 3000);
  };

  const isResourcesActive = ['/internships', '/careers', '/intern-wall', '/alumni'].includes(location.pathname);

  return (
    <>
      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="nav-download-toast">
          <CheckCircle2 size={16} className="text-gold" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* SECTION 1: PREMIUM STICKY NAVBAR (Clutter Fix & 90% Transparent to Solid Navy Transition) */}
      <header className={`navbar-header ${isScrolled ? 'scrolled-solid' : 'resting-transparent'}`}>
        {/* Top Contact Bar (Super Header) */}
        <div className="top-super-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <div className="top-socials">
                <a href="#facebook" aria-label="Facebook" className="social-link"><SocialIcons.Facebook /></a>
                <a href="#twitter" aria-label="Twitter" className="social-link"><SocialIcons.Twitter /></a>
                <a href="#instagram" aria-label="Instagram" className="social-link"><SocialIcons.Instagram /></a>
                <a href="#youtube" aria-label="YouTube" className="social-link"><SocialIcons.YouTube /></a>
              </div>
              <span className="top-divider">|</span>
              <div className="top-contact-info">
                <a href="tel:+919021640817" className="contact-item">
                  <Phone size={12} className="icon-gold" />
                  <span>+91-9021640817</span>
                </a>
                <span className="top-divider hidden-mobile-xs">|</span>
                <a href="mailto:adv.rajeshjaiswal@gmail.com" className="contact-item hidden-mobile-xs">
                  <Mail size={12} className="icon-gold" />
                  <span>adv.rajeshjaiswal@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="top-bar-right">
              <span className="top-tagline hidden-mobile">Supreme Court & High Court Advocates • Nagpur Chambers</span>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar (14px Inter weight 500) */}
        <nav className="main-navbar">
          <div className="container navbar-container">
            {/* Monogram Branding */}
            <Link to="/home" className="brand-logo" aria-label="Raj Law Associates Home">
              <div className="monogram-box">
                <span className="monogram-text">RL</span>
              </div>
              <div className="brand-text-wrap">
                <span className="brand-name">RAJ LAW ASSOCIATES</span>
                <span className="brand-subtitle">ADVOCATES & LEGAL CONSULTANTS</span>
              </div>
            </Link>

            {/* Desktop Nav Links (14px Inter weight 500 with slight letter spacing) */}
            <ul className="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  >
                    {link.name}
                    <span className="underline-hover"></span>
                  </NavLink>
                </li>
              ))}

              {/* CLUTTER FIX: 'RESOURCES' Dropdown (Groups DOWNLOADS & INTERNSHIPS/INTERN WALL) */}
              <li className="nav-item nav-dropdown-wrap" ref={dropdownRef}>
                <button
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  className={`nav-link dropdown-trigger ${isResourcesActive ? 'active-link' : ''}`}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span>RESOURCES</span>
                  <ChevronDown size={14} className={`dropdown-arrow ${resourcesDropdownOpen ? 'open' : ''}`} />
                  <span className="underline-hover"></span>
                </button>

                {resourcesDropdownOpen && (
                  <div 
                    className="resources-dropdown-menu"
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <Link to="/internships" className="dropdown-item">
                      <Award size={16} className="text-gold flex-shrink-0" />
                      <div className="dropdown-text">
                        <span className="item-title">INTERNSHIPS & CAREERS</span>
                        <span className="item-desc">Chamber application & mentorship</span>
                      </div>
                    </Link>
                    <Link to="/intern-wall" className="dropdown-item">
                      <Scale size={16} className="text-gold flex-shrink-0" />
                      <div className="dropdown-text">
                        <span className="item-title">INTERN WALL (ALUMNI)</span>
                        <span className="item-desc">Celebrating our past scholars</span>
                      </div>
                    </Link>
                    <button 
                      onClick={() => { setResourcesDropdownOpen(false); setDownloadsModalOpen(true); }} 
                      className="dropdown-item dropdown-btn"
                    >
                      <Download size={16} className="text-gold flex-shrink-0" />
                      <div className="dropdown-text">
                        <span className="item-title">LEGAL DOWNLOADS</span>
                        <span className="item-desc">Firm brochure, bare acts & guides</span>
                      </div>
                    </button>
                  </div>
                )}
              </li>

              {/* CONTACT Link */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                >
                  CONTACT
                  <span className="underline-hover"></span>
                </NavLink>
              </li>
            </ul>

            {/* Right Controls: Language Selector & Lawyer Enquiry Button */}
            <div className="nav-actions">
              <div className="lang-selector-wrap hidden-mobile">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="lang-btn"
                  aria-label="Select Language"
                >
                  <Globe size={15} className="icon-gold" />
                  <span>{selectedLang}</span>
                  <ChevronDown size={13} />
                </button>
                
                {langDropdownOpen && (
                  <div className="lang-dropdown">
                    <button onClick={() => { setSelectedLang('EN'); setLangDropdownOpen(false); }} className={`lang-option ${selectedLang === 'EN' ? 'active' : ''}`}>English (EN)</button>
                    {languages.map(lang => (
                      <button key={lang} onClick={() => { setSelectedLang(lang.slice(0, 2).toUpperCase()); setLangDropdownOpen(false); }} className={`lang-option ${selectedLang === lang.slice(0, 2).toUpperCase() ? 'active' : ''}`}>
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Solid Gold Lawyer Enquiry Button */}
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="btn nav-cta-btn hidden-mobile"
              >
                <span>Lawyer Enquiry</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-toggle"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} className="text-gold" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
            <div className="mobile-nav-drawer">
              <div className="mobile-nav-inner">
                {/* Top Close / Cancel Bar */}
                <div className="mobile-drawer-topbar">
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#D4AF37', letterSpacing: '1.5px', textTransform: 'uppercase' }}>CHAMBER MENU</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="mobile-drawer-close-btn"
                    aria-label="Close Menu"
                  >
                    <span>Close / बंद करें</span>
                    <X size={18} className="text-gold" />
                  </button>
                </div>

                <ul className="mobile-links">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) => `mobile-link ${isActive ? 'active-mobile' : ''}`}
                      >
                        <span>{link.name}</span>
                        <span className="mobile-arrow">→</span>
                      </NavLink>
                    </li>
                  ))}
                  
                  {/* RESOURCES in mobile */}
                  <li className="mobile-section-title">RESOURCES & ARCHIVES</li>
                  <li>
                    <Link to="/internships" onClick={() => setMobileMenuOpen(false)} className="mobile-link mobile-sublink">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={15} className="text-gold" />
                        <span>Internships & Careers</span>
                      </div>
                      <span className="mobile-arrow">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/intern-wall" onClick={() => setMobileMenuOpen(false)} className="mobile-link mobile-sublink">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Scale size={15} className="text-gold" />
                        <span>Intern Wall (Alumni)</span>
                      </div>
                      <span className="mobile-arrow">→</span>
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => { setMobileMenuOpen(false); setDownloadsModalOpen(true); }} className="mobile-link mobile-sublink w-full text-left">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={15} className="text-gold" />
                        <span>Legal Downloads (PDFs)</span>
                      </div>
                      <span className="mobile-arrow">↓</span>
                    </button>
                  </li>
                  
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `mobile-link ${isActive ? 'active-mobile' : ''}`}
                    >
                      <span>CONTACT US</span>
                      <span className="mobile-arrow">→</span>
                    </NavLink>
                  </li>
                </ul>

                {/* Mobile Language Selection Row */}
                <div className="mobile-lang-row">
                  <span style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>Language / भाषा:</span>
                  <div className="mobile-lang-pills">
                    <button onClick={() => { setSelectedLang('EN'); setMobileMenuOpen(false); }} className={`lang-pill ${selectedLang === 'EN' ? 'active' : ''}`}>EN</button>
                    {languages.map(lang => (
                      <button key={lang} onClick={() => { setSelectedLang(lang.slice(0, 2).toUpperCase()); setMobileMenuOpen(false); }} className={`lang-pill ${selectedLang === lang.slice(0, 2).toUpperCase() ? 'active' : ''}`}>
                        {lang.slice(0, 2).toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dual Mobile Action Buttons */}
                <div className="mobile-drawer-cta">
                  <button
                    onClick={() => { setMobileMenuOpen(false); setEnquiryModalOpen(true); }}
                    className="btn nav-cta-btn w-full text-center justify-center mb-3"
                    style={{ padding: '14px 20px', fontSize: '14px' }}
                  >
                    <span>Request Confidential Consultation</span>
                  </button>
                  <a
                    href="tel:+919021640817"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn mobile-call-btn w-full text-center justify-center"
                  >
                    <Phone size={15} className="text-gold" />
                    <span>Call Desk: +91-9021640817</span>
                  </a>
                  
                  {/* Bottom Cancel Option */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn mobile-close-bottom-btn w-full text-center justify-center mt-3"
                  >
                    <X size={16} className="text-gold" />
                    <span>Cancel & Close Menu / रद्द करें</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* ==========================================================================
          INTERACTIVE MODAL: Confidential Lawyer Enquiry Form
          ========================================================================== */}
      {enquiryModalOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target.className === 'modal-backdrop') setEnquiryModalOpen(false); }}>
          <div className="modal-content">
            <button
              onClick={() => setEnquiryModalOpen(false)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {formSubmitted ? (
              <div className="modal-success-state text-center">
                <CheckCircle2 size={56} className="text-gold margin-auto mb-3" />
                <h3 className="modal-title">Enquiry Transmitted Securely</h3>
                <p className="modal-subtitle">
                  Thank you for contacting <strong>RAJ LAW ASSOCIATES</strong>. Your case details have been encrypted and sent directly to Senior Partner Adv. Rajesh Jaiswal’s chambers.
                </p>
                <div className="security-badge-inline mt-3">
                  <Shield size={16} className="text-gold" />
                  <span>Expected Callback: Within 2 Hours</span>
                </div>
              </div>
            ) : (
              <>
                <div className="modal-header text-center">
                  <h3 className="modal-title">How would you like to connect?</h3>
                  <p className="modal-subtitle mb-0">Select your preferred method of communication</p>
                </div>

                <div className="contact-mode-tabs">
                  <button 
                    className={`mode-tab ${contactMode === 'form' ? 'active' : ''}`}
                    onClick={() => setContactMode('form')}
                  >
                    <FileText size={18} />
                    <span>Enquiry Form</span>
                  </button>
                  <button 
                    className={`mode-tab whatsapp ${contactMode === 'whatsapp' ? 'active' : ''}`}
                    onClick={() => setContactMode('whatsapp')}
                  >
                    <MessageSquare size={18} />
                    <span>WhatsApp</span>
                  </button>
                  <button 
                    className={`mode-tab call ${contactMode === 'call' ? 'active' : ''}`}
                    onClick={() => setContactMode('call')}
                  >
                    <PhoneCall size={18} />
                    <span>Direct Call</span>
                  </button>
                </div>

                {contactMode === 'form' && (
                  <form onSubmit={handleEnquirySubmit} className="enquiry-form mt-4">
                    <div className="form-group">
                      <label htmlFor="modal-name">Full Name *</label>
                      <input type="text" id="modal-name" required placeholder="Adv. / Mr. / Ms. Full Name" className="form-input" />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="modal-phone">Phone Number *</label>
                        <input type="tel" id="modal-phone" required placeholder="+91 98765 43210" className="form-input" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="modal-email">Email Address</label>
                        <input type="email" id="modal-email" placeholder="client@domain.com" className="form-input" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-domain">Legal Practice Area *</label>
                      <select id="modal-domain" required className="form-input form-select">
                        <option value="Notary Services">Notary Services</option>
                        <option value="Affidavit Service">Affidavit Service (Proof of Service)</option>
                        <option value="Attestation">Attestation & Document Verification</option>
                        <option value="Other Legal Matter">Other Legal Advisory / General Counsel</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-summary">Brief Summary of Legal Dispute *</label>
                      <textarea id="modal-summary" rows={3} required placeholder="Please provide key facts, court jurisdiction, or urgency of relief required..." className="form-input form-textarea"></textarea>
                    </div>

                    <div className="form-footer">
                      <div className="privacy-disclaimer">
                        <Shield size={15} className="text-gold flex-shrink-0" />
                        <span>Your information is 100% secure and confidential. We never share client details with third parties.</span>
                      </div>

                      <button type="submit" className="btn submit-gold-btn w-full">
                        <span>Transmit Enquiry to Partner</span>
                      </button>
                    </div>
                  </form>
                )}

                {contactMode === 'whatsapp' && (
                  <div className="direct-contact-pane whatsapp-pane text-center mt-4">
                    <div className="large-icon-circle whatsapp-icon">
                      <MessageSquare size={40} />
                    </div>
                    <h4>Chat with our Legal Team</h4>
                    <p>Get instant replies and share your documents securely over WhatsApp.</p>
                    <a href="https://wa.me/919021640817" target="_blank" rel="noopener noreferrer" className="btn action-btn whatsapp-btn">
                      Start WhatsApp Chat
                    </a>
                  </div>
                )}

                {contactMode === 'call' && (
                  <div className="direct-contact-pane call-pane text-center mt-4">
                    <div className="large-icon-circle call-icon">
                      <PhoneCall size={40} />
                    </div>
                    <h4>Speak with a Partner</h4>
                    <p>For urgent matters, bails, or immediate legal intervention, call us directly.</p>
                    <a href="tel:+919021640817" className="btn action-btn call-btn">
                      Call +91-9021640817
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* ==========================================================================
          INTERACTIVE MODAL: Legal Downloads (Firm Brochure, Bare Acts & Guides)
          ========================================================================== */}
      {downloadsModalOpen && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target.className === 'modal-backdrop') setDownloadsModalOpen(false); }}>
          <div className="modal-content downloads-modal-card">
            <button
              onClick={() => setDownloadsModalOpen(false)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div className="modal-header">
              <span className="modal-tag">Raj Law Associates Archives</span>
              <h3 className="modal-title">Legal Resources & Downloads</h3>
              <p className="modal-subtitle">
                Access our institutional profile brochures, statutory compliance checklists, and bare act commentaries.
              </p>
            </div>

            <div className="downloads-list">
              <div className="download-item-card">
                <div className="download-icon-box">
                  <FileText size={24} className="text-gold" />
                </div>
                <div className="download-info">
                  <h4 className="doc-title">Institutional Firm Brochure 2026</h4>
                  <p className="doc-desc">Comprehensive overview of senior partners, practice domains, and courtroom triumphs.</p>
                  <span className="doc-meta">PDF • 4.2 MB • Updated July 2026</span>
                </div>
                <button onClick={() => handleTriggerDownload('Firm_Brochure_2026.pdf')} className="btn download-action-btn">
                  <Download size={16} /> <span>Download</span>
                </button>
              </div>

              <div className="download-item-card">
                <div className="download-icon-box">
                  <FileText size={24} className="text-gold" />
                </div>
                <div className="download-info">
                  <h4 className="doc-title">DPDP Act 2026 Board Compliance Guide</h4>
                  <p className="doc-desc">Executive checklist for corporate directors on data privacy liabilities and penalties.</p>
                  <span className="doc-meta">PDF • 1.8 MB • Corporate Advisory</span>
                </div>
                <button onClick={() => handleTriggerDownload('DPDP_Compliance_Guide_2026.pdf')} className="btn download-action-btn">
                  <Download size={16} /> <span>Download</span>
                </button>
              </div>

              <div className="download-item-card">
                <div className="download-icon-box">
                  <FileText size={24} className="text-gold" />
                </div>
                <div className="download-info">
                  <h4 className="doc-title">BNSS & BNS Criminal Procedure Checklist</h4>
                  <p className="doc-desc">Statutory timeline guide for anticipatory bail, regular bail, and evidentiary discovery.</p>
                  <span className="doc-meta">PDF • 2.5 MB • Criminal Defense Division</span>
                </div>
                <button onClick={() => handleTriggerDownload('BNSS_BNS_Checklist_2026.pdf')} className="btn download-action-btn">
                  <Download size={16} /> <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
