import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Scale, ArrowRight, CheckCircle2, Users, Briefcase, BookOpen, Clock, Phone, Building, ChevronRight, FileText, GraduationCap, Calendar, Upload, Check, ShieldCheck, Lock, Building2, UserCheck, X, PlayCircle, Gavel } from 'lucide-react';
import './Home.css';

// Reusable IntersectionObserver component for scroll animations
const ScrollAnimate = ({ children, className = '', animation = 'fade-up', delay = '0s', threshold = 0.15 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
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
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`scroll-animate-wrap ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const triggerConsultationModal = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
  };

  // State for Section 8: Dual Interactive Form Blocks
  const [activePortal, setActivePortal] = useState('client'); // 'client', 'career', or null
  const [clientForm, setClientForm] = useState({ name: '', phone: '', email: '', category: 'Corporate Law & M&A', urgency: 'Standard Review', message: '' });
  const [careerForm, setCareerForm] = useState({ appType: 'internship', name: '', phone: '', email: '', domain: 'Corporate Law & M&A', standing: '', sop: '', fileName: null });
  const [portalToast, setPortalToast] = useState(null);

  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (!clientForm.name || !clientForm.phone) return;
    setPortalToast("✅ Client Consultation Request Received! Our Senior Partner will contact you within 2 hours.");
    setClientForm({ name: '', phone: '', email: '', category: 'Corporate Law & M&A', urgency: 'Standard Review', message: '' });
    setTimeout(() => setPortalToast(null), 6000);
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    if (!careerForm.name || !careerForm.phone) return;
    setPortalToast(`✅ ${careerForm.appType === 'internship' ? 'Internship Assessment' : 'Lateral Associate'} Application Submitted to Chamber Recruitment Committee.`);
    setCareerForm({ appType: 'internship', name: '', phone: '', email: '', domain: 'Corporate Law & M&A', standing: '', sop: '', fileName: null });
    setTimeout(() => setPortalToast(null), 6000);
  };

  const practiceAreasData = [
    {
      title: "Family Court Matters",
      desc: "Expert legal assistance in family court cases, navigating sensitive issues such as divorce, maintenance, child custody, and alimony.",
      bgImage: "/practice-property.png",
      link: "/practice-areas"
    },
    {
      title: "District Court Matters",
      desc: "Handling a wide range of civil and criminal disputes at the district court level with strong advocacy.",
      bgImage: "/practice-litigation.png",
      link: "/practice-areas"
    },
    {
      title: "Bails, Criminal Trials",
      desc: "Expert assistance in securing bail and providing dedicated legal defense throughout criminal trials.",
      bgImage: "/practice-cyber.png",
      link: "/practice-areas"
    },
    {
      title: "High Court Matters",
      desc: "Representation in complex civil and criminal cases before the High Court, including writ petitions challenging government actions.",
      bgImage: "/practice-litigation.png",
      link: "/practice-areas"
    },
    {
      title: "Documentation",
      desc: "Preparation, verification, and notarization of all essential legal documents ensuring clear and lawful transactions.",
      bgImage: "/practice-property.png",
      link: "/practice-areas"
    },
    {
      title: "Co-operative matters & Appellate Matters",
      desc: "Legal services for cooperative society disputes and appeals, backed by extensive experience with over 200 societies.",
      bgImage: "/practice-corporate.png",
      link: "/practice-areas"
    },
    {
      title: "DRT (Debt Recovery Tribunal) Matters",
      desc: "Representation in recovery disputes before the Debt Recovery Tribunal for speedy resolution of financial claims.",
      bgImage: "/practice-corporate.png",
      link: "/practice-areas"
    },
    {
      title: "MAT (Maharashtra Administrative Tribunal Cases)",
      desc: "Handling service and employment-related disputes before the Maharashtra Administrative Tribunal.",
      bgImage: "/practice-litigation.png",
      link: "/practice-areas"
    },
    {
      title: "Consumer Matters",
      desc: "Helping consumers assert their rights and pursue grievances through consumer forums and appellate authorities.",
      bgImage: "/practice-property.png",
      link: "/practice-areas"
    },
    {
      title: "IPR Matters (Intellectual Property Rights)",
      desc: "Helping businesses with acquisitions and mergers, trademarks, copyrights and patents.",
      bgImage: "/practice-cyber.png",
      link: "/practice-areas"
    }
  ];

  const teamExperts = [
    {
      name: "Adv. Rajesh Jaiswal",
      role: "Founder & Senior Standing Counsel",
      specialty: "Supreme Court Practice & Constitutional Law",
      exp: "36+ Years Exp.",
      image: "/adv-rajesh-jaiswal.png"
    },
    {
      name: "Adv. Meenakshi Sundaram",
      role: "Senior Partner - Corporate & M&A",
      specialty: "Cross-Border M&A & Private Equity",
      exp: "24+ Years Exp.",
      image: "/intern-female-1.png"
    },
    {
      name: "Adv. Vikramaditya Verma",
      role: "Partner - Criminal Defense & White Collar",
      specialty: "Economic Offenses & PMLA Defense",
      exp: "19+ Years Exp.",
      image: "/intern-male-1.png"
    }
  ];

  const latestUpdates = [
    {
      title: "Supreme Court Guidelines on Digital Asset Discovery & DPDP Compliance",
      category: "Corporate Law",
      date: "July 18, 2026",
      snippet: "An analytical deep dive into recent Supreme Court rulings on electronic evidence admissibility, cloud data preservation, and board-level privacy obligations...",
      link: "/insights"
    },
    {
      title: "Landmark Triumph: Overturning PMLA Attachment in Commercial Arbitration",
      category: "White-Collar Crime",
      date: "June 29, 2026",
      snippet: "How our Nagpur Chambers successfully challenged Enforcement Directorate attachment proceedings before the appellate tribunal, establishing crucial asset protection precedents...",
      link: "/insights"
    },
    {
      title: "Navigating Real Estate RERA Appeals in Maharashtra & High Court Writs",
      category: "Real Estate & RERA",
      date: "May 14, 2026",
      snippet: "Key statutory amendments impacting real estate developers, institutional home buyers, and project escrow accounts under the 2026 Maharashtra RERA regulations...",
      link: "/insights"
    }
  ];

  return (
    <div className="home-master-wrapper">
      {/* ==========================================================================
          SECTION 1: HERO SECTION & FLOATING CARDS FIX (90vh min-height, -80px pull up)
          ========================================================================== */}
      <section className="cinematic-hero-section">
        <div className="container hero-container-relative">
          <div className="hero-content-left">
            <div className="hero-badge slide-in-on-load delay-load-1">
              <span className="text-gold">Defending Rights. Delivering Justice.</span>
              <div className="hero-badge-line"></div>
            </div>

            <h1 className="hero-headline slide-in-on-load delay-load-2">
              Your Legal Rights,<br />
              <span className="text-gold">Our</span> Legal Commitment.
            </h1>

            <p className="hero-subheadline slide-in-on-load delay-load-3">
              We are committed to providing exceptional legal services with integrity, dedication and results.
            </p>

            <div className="hero-cta-group slide-in-on-load delay-load-4">
              <button onClick={triggerConsultationModal} className="btn hero-btn-gold">
                <span>Consult an Attorney</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn hero-btn-outline-play">
                <PlayCircle size={20} />
                <span>Watch Intro</span>
              </button>
            </div>

            <div className="hero-mini-features slide-in-on-load delay-load-5">
              <div className="mini-feature">
                <ShieldCheck size={28} className="text-gold" />
                <div className="mini-text">
                  <span>Trusted</span>
                  <span>Legal Experts</span>
                </div>
              </div>
              <div className="mini-feature">
                <Users size={28} className="text-gold" />
                <div className="mini-text">
                  <span>Client-Focused</span>
                  <span>Approach</span>
                </div>
              </div>
              <div className="mini-feature">
                <Gavel size={28} className="text-gold" />
                <div className="mini-text">
                  <span>Proven Results</span>
                  <span>in Every Case</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Bar within Hero */}
          <div className="hero-stats-bar slide-in-on-load delay-load-6">
            <div className="stat-item">
              <Users size={36} className="text-gold stat-icon" />
              <div className="stat-text">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <Briefcase size={36} className="text-gold stat-icon" />
              <div className="stat-text">
                <span className="stat-number">1500+</span>
                <span className="stat-label">Cases Solved</span>
              </div>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <Scale size={36} className="text-gold stat-icon" />
              <div className="stat-text">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <Award size={36} className="text-gold stat-icon" />
              <div className="stat-text">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Legal Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cards Wrapper: pulled up by -80px, with margin-bottom: 100px so no crash */}
      <div className="floating-cards-wrapper">
        <div className="container">
          <div className="trust-cards-grid">
            {/* Card 1: Notary */}
            <ScrollAnimate animation="fade-up" delay="0s" className="trust-card-col">
              <div className="trust-card-million">
                <div className="trust-icon-badge">
                  <FileText size={28} className="text-gold" />
                </div>
                <h3 className="trust-card-title">Notary Services</h3>
                <p className="trust-card-desc">
                  Our licensed professional notary public services are here to make life easier. Once your documents are notarised, we will help you make any necessary copies and ship them where they need to go.
                </p>
                <div className="trust-hover-line"></div>
              </div>
            </ScrollAnimate>

            {/* Card 2: Affidavit */}
            <ScrollAnimate animation="fade-up" delay="0.2s" className="trust-card-col">
              <div className="trust-card-million">
                <div className="trust-icon-badge">
                  <Check size={28} className="text-gold" />
                </div>
                <h3 className="trust-card-title">Affidavit Service</h3>
                <p className="trust-card-desc">
                  An Affidavit of service also known as a Proof of Service. This affidavit is a notarised testimony signed by the server that details the manner of service, identity of the person served and other details of the job.
                </p>
                <div className="trust-hover-line"></div>
              </div>
            </ScrollAnimate>

            {/* Card 3: Attestation */}
            <ScrollAnimate animation="fade-up" delay="0.4s" className="trust-card-col">
              <div className="trust-card-million">
                <div className="trust-icon-badge">
                  <ShieldCheck size={28} className="text-gold" />
                </div>
                <h3 className="trust-card-title">Attestation</h3>
                <p className="trust-card-desc">
                  Attestation is the act of showing or evidence confirming that something is genuine. e.g. A letter of recommendation or a stamp and signature of a competent person on the certificate or document.
                </p>
                <div className="trust-hover-line"></div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          SECTION 2: ABOUT US (Welcome to RAJ LAW) - padding: 100px 0, gap: 60px
          ========================================================================== */}
      <section className="about-split-section">
        <div className="container">
          <div className="about-split-grid">
            {/* Left Side: Portrait of Adv. Rajesh Jaiswal (contained, no negative margins) */}
            <ScrollAnimate animation="slide-left" className="about-visual-left">
              <div className="portrait-frame-container">
                <img 
                  src="/adv-rajesh-jaiswal.png" 
                  alt="Senior Partner Adv. Rajesh Jaiswal in Nagpur Chambers" 
                  className="lawyer-portrait-img"
                />
                <div className="elegant-gold-frame-outline"></div>
                <div className="portrait-caption-tag">
                  <span className="caption-name">Adv. Rajesh Jaiswal</span>
                  <span className="caption-role">Founder & Senior Standing Counsel</span>
                </div>
              </div>
            </ScrollAnimate>

            {/* Right Side: Welcome to RAJ LAW ASSOCIATES Content */}
            <ScrollAnimate animation="slide-right" className="about-content-right">
              <span className="section-tag text-gold">Institutional Excellence</span>
              <h2 className="about-main-heading">Welcome to RAJ LAW ASSOCIATES</h2>
              
              <p className="about-lead-text">
                For over three decades, our chambers have stood as a beacon of legal authority and intellectual rigor in Central India. We bridge classic courtroom advocacy with modern corporate counseling.
              </p>

              <p className="about-body-text">
                Headquartered in Ravi Nagar Chambers, Nagpur, our leadership team represents multinational corporations, public sector undertakings, banking institutions, and distinguished families. Our philosophy rests on meticulous statutory research, unflinching ethical integrity, and aggressive protection of client rights before appellate benches.
              </p>

              <div className="about-pillars-grid">
                <div className="pillar-box">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Supreme Court & High Court Advocacy</strong>
                    <span>Commanding presence in complex constitutional and civil appeals.</span>
                  </div>
                </div>
                <div className="pillar-box">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Corporate & White-Collar Defense</strong>
                    <span>Safeguarding directors and enterprises in multi-agency investigations.</span>
                  </div>
                </div>
              </div>

              <div className="about-action-row">
                <Link to="/about-us" className="btn hero-btn-gold">
                  <span>Read Institutional History</span>
                  <ChevronRight size={18} />
                </Link>
                <div className="partner-signature-box">
                  <span className="sig-text">Rajesh Jaiswal</span>
                  <span className="sig-label">Senior Partner, Nagpur Chambers</span>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: WHY CONGLOMERATES TRUST US (#FAFAFA, padding: 100px 0, gap: 40px)
          ========================================================================== */}
      <section className="why-us-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">Our Core Value Proposition</span>
            <h2 className="section-title-dark">Why Conglomerates & Leaders Trust Us</h2>
            <p className="section-subtitle-dark">
              We combine elite legal scholarship with relentless courtroom execution to deliver unmatched victories.
            </p>
          </ScrollAnimate>

          <div className="why-us-grid">
            {/* Value 1 */}
            <ScrollAnimate animation="fade-up" delay="0s" className="value-card-col">
              <div className="value-card-million">
                <div className="val-number">01</div>
                <div className="val-icon-wrap">
                  <Shield size={32} className="text-gold" />
                </div>
                <h3 className="val-title">Uncompromising Ethics</h3>
                <p className="val-desc">
                  We operate with absolute transparency and attorney-client privilege. Every strategy is built on solid statutory grounds and rigorous evidentiary discovery.
                </p>
              </div>
            </ScrollAnimate>

            {/* Value 2 */}
            <ScrollAnimate animation="fade-up" delay="0.2s" className="value-card-col">
              <div className="value-card-million">
                <div className="val-number">02</div>
                <div className="val-icon-wrap">
                  <Award size={32} className="text-gold" />
                </div>
                <h3 className="val-title">Commanding Advocacy</h3>
                <p className="val-desc">
                  Our Senior Standing Counsel bring over 36 years of persuasive courtroom presence, securing landmark relief in constitutional, civil, and criminal benches.
                </p>
              </div>
            </ScrollAnimate>

            {/* Value 3 */}
            <ScrollAnimate animation="fade-up" delay="0.4s" className="value-card-col">
              <div className="value-card-million">
                <div className="val-number">03</div>
                <div className="val-icon-wrap">
                  <Briefcase size={32} className="text-gold" />
                </div>
                <h3 className="val-title">Pragmatic Business Counsel</h3>
                <p className="val-desc">
                  We understand commercial realities. Our advisory minimizes litigation exposure while accelerating corporate restructuring, joint ventures, and M&A execution.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: OUR PRACTICE AREAS (#0B132B, padding: 120px 0, 4-col gap: 30px)
          ========================================================================== */}
      <section className="practice-grid-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">Domain Expertise</span>
            <h2 className="section-title-light">Our Services</h2>
            <p className="section-subtitle-light">
              Comprehensive legal counsel spanning Family, District & High Courts, Debt Recovery, Consumer Rights, and Intellectual Property.
            </p>
          </ScrollAnimate>

          <div className="practice-grid-container">
            {practiceAreasData.map((area, idx) => (
              <ScrollAnimate 
                key={area.title} 
                animation="fade-up" 
                delay={`${(idx % 4) * 0.15}s`}
                className="practice-card-wrapper"
              >
                <Link to={area.link} className="practice-card-interactive">
                  <div 
                    className="practice-card-bg"
                    style={{ backgroundImage: `url(${area.bgImage})` }}
                  />
                  <div className="practice-card-overlay" />

                  <div className="practice-card-content">
                    <span className="practice-num">0{idx + 1}</span>
                    <h3 className="practice-card-title">{area.title}</h3>
                    <p className="practice-card-desc">{area.desc}</p>
                    <div className="practice-card-action">
                      <span>Explore Domain</span>
                      <ArrowRight size={16} className="arrow-shift" />
                    </div>
                  </div>

                  <div className="practice-gold-bottom-border" />
                </Link>
              </ScrollAnimate>
            ))}
          </div>

          {/* Button with margin-top: 50px so it doesn't touch the bottom of cards */}
          <div className="practice-btn-wrapper text-center">
            <Link to="/practice-areas" className="btn hero-btn-outline-gold">
              <span>View All Practice Specializations</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 5: MEET OUR TEAM (#FFFFFF, padding: 120px 0, 3-col grid, grayscale hover)
          ========================================================================== */}
      <section className="meet-team-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">Advocate Profiles & Leadership</span>
            <h2 className="section-title-dark">Meet Our Legal Experts</h2>
            <p className="section-subtitle-dark">
              Seasoned standing counsel, trial advocates, and corporate counselors dedicated to securing client victory.
            </p>
          </ScrollAnimate>

          <div className="team-grid-3col">
            {teamExperts.map((member, idx) => (
              <ScrollAnimate key={member.name} animation="fade-up" delay={`${idx * 0.2}s`} className="team-card-wrapper">
                <div className="team-card-clean">
                  {/* Grayscale to color hover effect */}
                  <div className="team-image-frame">
                    <img src={member.image} alt={member.name} className="team-portrait-img" />
                    <div className="team-exp-badge">
                      <Award size={13} className="text-gold" />
                      <span>{member.exp}</span>
                    </div>
                  </div>

                  <div className="team-card-info">
                    <span className="team-role-tag">{member.role}</span>
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-specialty">{member.specialty}</p>
                    <Link to="/our-team" className="team-profile-link">
                      <span>View Full Credentials</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/our-team" className="btn hero-btn-gold">
              <span>Explore Complete Advocate Directory</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 6: LEGAL INSIGHTS & NEWS (#F8F9FA, padding: 100px 0, 3 side-by-side)
          ========================================================================== */}
      <section className="legal-insights-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">Chamber Scholarship & Archives</span>
            <h2 className="section-title-dark">Latest Legal Updates</h2>
            <p className="section-subtitle-dark">
              Authoritative commentaries on Supreme Court judgments, statutory amendments, and corporate compliance.
            </p>
          </ScrollAnimate>

          <div className="insights-grid-3col">
            {latestUpdates.map((post, idx) => (
              <ScrollAnimate key={post.title} animation="fade-up" delay={`${idx * 0.2}s`} className="insight-card-wrapper">
                <div className="insight-snippet-card">
                  <div className="insight-meta-row">
                    <span className="insight-cat-tag">{post.category}</span>
                    <span className="insight-date"><Calendar size={13} className="inline-icon text-gold" /> {post.date}</span>
                  </div>

                  <h3 className="insight-title">{post.title}</h3>
                  <p className="insight-snippet-text">{post.snippet}</p>

                  <div className="insight-card-footer">
                    <Link to={post.link} className="read-article-link">
                      <span>Read Complete Analysis</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/insights" className="btn hero-btn-outline">
              <span style={{ color: '#0B132B' }}>Access Legal Insights Feed</span>
              <ArrowRight size={18} style={{ color: '#0B132B' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 8: DUAL INTERACTIVE FORM BLOCKS (PORTAL SELECTOR & DRAWER)
          ========================================================================== */}
      <section className="dual-portal-section" id="inquiry-portal">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered mb-12">
            <span className="section-tag text-gold">Chamber Applications & Consultation Desk</span>
            <h2 className="section-title-dark">Connect With Our Chambers</h2>
            <p className="section-subtitle-dark" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Select an interactive portal below to schedule an authoritative legal consultation or submit your credentials for mentorship and lateral career opportunities.
            </p>
          </ScrollAnimate>

          {/* Dual Selector Cards Grid */}
          <div className="portal-selector-grid">
            {/* Block 1: Client Legal Consultation */}
            <div 
              onClick={() => setActivePortal(activePortal === 'client' ? null : 'client')}
              className={`portal-selector-card ${activePortal === 'client' ? 'active-portal' : ''}`}
            >
              <div>
                <div className="portal-card-header">
                  <div className="portal-icon-box">
                    <Scale size={32} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="portal-title">Legal Consultation & Case Review</h3>
                    <p className="portal-desc">
                      For corporate conglomerates, directors, and private clients requiring immediate legal representation, bail defense, or strategic M&A counsel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portal-action-indicator">
                <span>{activePortal === 'client' ? '▲ Active Consultation Desk Selected' : 'Tap to Open Case Inquiry Form ▼'}</span>
                <ChevronRight size={18} className="indicator-arrow" />
              </div>
            </div>

            {/* Block 2: Mentorship & Lateral Careers */}
            <div 
              onClick={() => setActivePortal(activePortal === 'career' ? null : 'career')}
              className={`portal-selector-card ${activePortal === 'career' ? 'active-portal' : ''}`}
            >
              <div>
                <div className="portal-card-header">
                  <div className="portal-icon-box">
                    <GraduationCap size={32} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="portal-title">Mentorship & Career Applications</h3>
                    <p className="portal-desc">
                      For ambitious law students seeking chamber assessment / internships and seasoned advocates applying for lateral associate positions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="portal-action-indicator">
                <span>{activePortal === 'career' ? '▲ Active Career Portal Selected' : 'Tap to Open Career Application ▼'}</span>
                <ChevronRight size={18} className="indicator-arrow" />
              </div>
            </div>
          </div>

          {/* Expandable Form Drawer */}
          {activePortal === 'client' && (
            <div className="portal-form-drawer">
              <div className="drawer-header">
                <div className="drawer-title-box">
                  <h3>Schedule Client Legal Consultation</h3>
                  <p>All case details submitted are protected under strict Attorney-Client Privilege (Section 126, Indian Evidence Act).</p>
                </div>
                <button onClick={() => setActivePortal(null)} className="close-drawer-btn">
                  <span>Close Portal ✕</span>
                </button>
              </div>

              <form onSubmit={handleClientSubmit}>
                <div className="grid-12" style={{ rowGap: '1.5rem', columnGap: '1.5rem' }}>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="text" 
                        required 
                        value={clientForm.name}
                        onChange={e => setClientForm({...clientForm, name: e.target.value})}
                        className={`input-field ${clientForm.name ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Full Name / Corporate Entity *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="tel" 
                        required 
                        value={clientForm.phone}
                        onChange={e => setClientForm({...clientForm, phone: e.target.value})}
                        className={`input-field ${clientForm.phone ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Mobile Number / Direct Desk *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="email" 
                        required 
                        value={clientForm.email}
                        onChange={e => setClientForm({...clientForm, email: e.target.value})}
                        className={`input-field ${clientForm.email ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Official Email Address *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap select-wrap">
                      <select 
                        value={clientForm.category}
                        onChange={e => setClientForm({...clientForm, category: e.target.value})}
                        className="select-field has-val"
                      >
                        <option value="Corporate Law & M&A">Corporate Law & M&A</option>
                        <option value="Commercial Litigation">Commercial Litigation</option>
                        <option value="White-Collar & PMLA Defense">White-Collar & PMLA Defense</option>
                        <option value="Urgent Bail Petition / Criminal">Urgent Bail Petition / Criminal</option>
                        <option value="Real Estate & RERA Disputes">Real Estate & RERA Disputes</option>
                        <option value="Cyber Fraud & IT Law">Cyber Fraud & IT Law</option>
                        <option value="Family & Matrimonial Settlements">Family & Matrimonial Settlements</option>
                        <option value="Intellectual Property Rights">Intellectual Property Rights</option>
                      </select>
                      <label className="floating-label">Legal Practice Domain *</label>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="input-floating-wrap textarea-wrap">
                      <textarea 
                        rows={4}
                        required 
                        value={clientForm.message}
                        onChange={e => setClientForm({...clientForm, message: e.target.value})}
                        className={`textarea-field ${clientForm.message ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Brief Overview of Case Facts & Relief Sought *</label>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <button type="submit" className="btn-submit-portal">
                      <Lock size={18} />
                      <span>Transmit Confidential Brief to Senior Partner</span>
                    </button>
                    <p style={{ fontSize: '12.5px', color: '#6B7280', textAlign: 'center', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} className="text-gold" /> Encrypted Transmission • Direct Partner Review Within 2 Hours
                    </p>
                  </div>
                </div>
              </form>
            </div>
          )}

          {activePortal === 'career' && (
            <div className="portal-form-drawer" style={{ borderColor: '#0B132B' }}>
              <div className="drawer-header">
                <div className="drawer-title-box">
                  <h3>Mentorship & Lateral Career Portal</h3>
                  <p>Join Central India's premier litigation and corporate counseling chambers under seasoned Supreme Court advocates.</p>
                </div>
                <button onClick={() => setActivePortal(null)} className="close-drawer-btn">
                  <span>Close Portal ✕</span>
                </button>
              </div>

              <form onSubmit={handleCareerSubmit}>
                {/* Application Type Selector */}
                <div className="app-type-selector">
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0B132B', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Select Application Wing:
                  </span>
                  <div 
                    onClick={() => setCareerForm({...careerForm, appType: 'internship'})}
                    className={`app-type-pill ${careerForm.appType === 'internship' ? 'active' : ''}`}
                  >
                    <GraduationCap size={18} className="text-gold" />
                    <span>🎓 Student Internship / Chamber Assessment</span>
                  </div>
                  <div 
                    onClick={() => setCareerForm({...careerForm, appType: 'lateral'})}
                    className={`app-type-pill ${careerForm.appType === 'lateral' ? 'active' : ''}`}
                  >
                    <Briefcase size={18} className="text-gold" />
                    <span>⚖️ Lateral Advocate / Associate Position</span>
                  </div>
                </div>

                <div className="grid-12" style={{ rowGap: '1.5rem', columnGap: '1.5rem' }}>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="text" 
                        required 
                        value={careerForm.name}
                        onChange={e => setCareerForm({...careerForm, name: e.target.value})}
                        className={`input-field ${careerForm.name ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Applicant Full Name *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="tel" 
                        required 
                        value={careerForm.phone}
                        onChange={e => setCareerForm({...careerForm, phone: e.target.value})}
                        className={`input-field ${careerForm.phone ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Contact Number (WhatsApp Enabled) *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap">
                      <input 
                        type="email" 
                        required 
                        value={careerForm.email}
                        onChange={e => setCareerForm({...careerForm, email: e.target.value})}
                        className={`input-field ${careerForm.email ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Email Address *</label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="input-floating-wrap select-wrap">
                      <select 
                        value={careerForm.domain}
                        onChange={e => setCareerForm({...careerForm, domain: e.target.value})}
                        className="select-field has-val"
                      >
                        <option value="Corporate Law & M&A">Corporate Law & M&A</option>
                        <option value="Commercial Litigation">Commercial Litigation</option>
                        <option value="White-Collar & Criminal Defense">White-Collar & Criminal Defense</option>
                        <option value="Constitutional & Appellate Bench">Constitutional & Appellate Bench</option>
                        <option value="Real Estate & RERA Practice">Real Estate & RERA Practice</option>
                        <option value="Cyber Fraud & Technology Law">Cyber Fraud & Technology Law</option>
                        <option value="Intellectual Property Rights">Intellectual Property Rights</option>
                      </select>
                      <label className="floating-label">Preferred Practice Specialization Wing *</label>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="input-floating-wrap">
                      <input 
                        type="text" 
                        required 
                        value={careerForm.standing}
                        onChange={e => setCareerForm({...careerForm, standing: e.target.value})}
                        className={`input-field ${careerForm.standing ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">
                        {careerForm.appType === 'internship' 
                          ? 'Law School Name & Current Year / Semester (e.g. NLU Nagpur, 4th Year) *' 
                          : 'Bar Council Enrolment No. & Years of Active Standing (e.g. MAH/2018/1234, 6 Yrs Exp) *'}
                      </label>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="input-floating-wrap textarea-wrap">
                      <textarea 
                        rows={3}
                        required 
                        maxLength={500}
                        value={careerForm.sop}
                        onChange={e => setCareerForm({...careerForm, sop: e.target.value})}
                        className={`textarea-field ${careerForm.sop ? 'has-val' : ''}`}
                      />
                      <label className="floating-label">Statement of Purpose: Why do you want to join this practice wing at Raj Law Associates? *</label>
                      <span style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '11px', color: '#9CA3AF' }}>
                        {careerForm.sop.length}/500 chars
                      </span>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div 
                      onClick={() => setCareerForm({...careerForm, fileName: careerForm.fileName ? null : `${careerForm.name.replace(/\s+/g, '_') || 'Applicant'}_Resume_2026.pdf`})}
                      className={`dropzone-dashed ${careerForm.fileName ? 'has-file' : ''}`}
                    >
                      <div className="dropzone-content">
                        {careerForm.fileName ? (
                          <>
                            <CheckCircle2 size={32} className="text-gold" />
                            <span className="dropzone-text">{careerForm.fileName} Attached Successfully</span>
                            <span className="dropzone-subtext">Click to remove or replace document</span>
                          </>
                        ) : (
                          <>
                            <Upload size={32} className="text-gold" />
                            <span className="dropzone-text">Click to attach Curriculum Vitae / Sample Drafting Briefs</span>
                            <span className="dropzone-subtext">Supports PDF, DOCX (Max size 10MB) • Confidentially Reviewed by Recruitment Committee</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <button type="submit" className="btn-submit-portal" style={{ background: '#0B132B' }}>
                      <Award size={18} />
                      <span>Submit Application to Chamber Recruitment Desk</span>
                    </button>
                    <p style={{ fontSize: '12.5px', color: '#6B7280', textAlign: 'center', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} className="text-gold" /> Direct Submission to Chamber Secretary • Shortlisted Candidates Contacted via WhatsApp/Email
                    </p>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================================================
          SECTION 9: DYNAMIC CTA STRIP (Parallax background, inner padding: 100px 20px)
          ========================================================================== */}
      <section className="dynamic-cta-parallax">
        <div className="parallax-bg-layer" />
        <div className="parallax-dark-overlay" />

        {/* Inner content with padding: 100px 20px so text and button are perfectly centered */}
        <div className="container parallax-content-inner text-center">
          <ScrollAnimate animation="fade-up">
            <div className="cta-shield-badge margin-auto mb-4">
              <Scale size={36} className="text-gold" />
            </div>
            
            <h2 className="parallax-cta-title">Facing a Complex Legal Challenge?</h2>
            
            <p className="parallax-cta-subtitle">
              Secure immediate, confidential counsel from Central India’s most authoritative legal team. Let us protect your interests and build your winning strategy today.
            </p>

            <button 
              onClick={triggerConsultationModal} 
              className="btn gold-pulse-btn"
            >
              <span>Request Confidential Consultation</span>
              <ArrowRight size={18} />
            </button>

            <div className="cta-disclaimer-strip mt-6">
              <span>🔒 100% Attorney-Client Privilege Protected • Direct Partner Callback Within 2 Hours</span>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Portal Submission Toast Notification */}
      {portalToast && (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', background: '#0B132B', color: '#FFFFFF', padding: '16px 24px', borderRadius: '8px', borderLeft: '4px solid #D4AF37', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 99999, animation: 'slideInUp 0.4s ease forwards' }}>
          <CheckCircle2 size={22} className="text-gold flex-shrink-0" />
          <span style={{ fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{portalToast}</span>
        </div>
      )}
    </div>
  );
};

export default Home;
