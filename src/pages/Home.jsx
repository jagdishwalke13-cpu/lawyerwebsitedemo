import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Scale, ArrowRight, CheckCircle2, Users, Briefcase, BookOpen, Clock, Phone, Building, ChevronRight, FileText, GraduationCap, Calendar, Upload, Check, ShieldCheck, Lock, Building2, UserCheck, X, PlayCircle, Gavel, MapPin, Mail } from 'lucide-react';
import './Home.css';

// Reusable IntersectionObserver component
const ScrollAnimate = ({ children, className = '', animation = 'fade-up', delay = '0s', threshold = 0.15 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [threshold]);

  return (
    <div ref={domRef} className={`scroll-animate-wrap ${animation} ${isVisible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
};

const Home = () => {
  const triggerConsultationModal = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
  };

  const [activePortal, setActivePortal] = useState('client'); // 'client' or 'career'
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', practiceArea: 'Corporate Law', date: '', message: '' });
  const [careerForm, setCareerForm] = useState({ appType: 'internship', name: '', phone: '', email: '', domain: 'Corporate Law & M&A', standing: '', sop: '', fileName: null });
  const [portalToast, setPortalToast] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setPortalToast("✅ Consultation Request Received! Our team will contact you shortly.");
    setContactForm({ name: '', phone: '', email: '', practiceArea: 'Corporate Law', date: '', message: '' });
    setTimeout(() => setPortalToast(null), 6000);
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    if (!careerForm.name || !careerForm.phone) return;
    setPortalToast(`✅ ${careerForm.appType === 'internship' ? 'Internship Assessment' : 'Lateral Associate'} Application Submitted.`);
    setCareerForm({ appType: 'internship', name: '', phone: '', email: '', domain: 'Corporate Law & M&A', standing: '', sop: '', fileName: null });
    setTimeout(() => setPortalToast(null), 6000);
  };

  const practiceAreasData = [
    { title: "Corporate & Commercial Law", desc: "Expert guidance in M&A, private equity, and complex commercial agreements.", bgImage: "/practice-corporate.png", link: "/practice-areas" },
    { title: "Civil Litigation", desc: "Handling a wide range of civil disputes with strong advocacy and strategic planning.", bgImage: "/practice-litigation.png", link: "/practice-areas" },
    { title: "Criminal Law", desc: "Expert assistance in securing bail and providing dedicated legal defense throughout criminal trials.", bgImage: "/practice-cyber.png", link: "/practice-areas" },
    { title: "Family & Matrimonial Law", desc: "Expert legal assistance in family court cases, navigating sensitive issues.", bgImage: "/practice-property.png", link: "/practice-areas" },
    { title: "Property & Real Estate Law", desc: "Resolving property disputes and ensuring smooth real estate transactions.", bgImage: "/practice-property.png", link: "/practice-areas" },
    { title: "Employment & Labour Law", desc: "Handling service and employment-related disputes before administrative tribunals.", bgImage: "/practice-litigation.png", link: "/practice-areas" },
    { title: "Intellectual Property", desc: "Protecting your intellectual assets through copyright, trademark, and patent laws.", bgImage: "/practice-cyber.png", link: "/practice-areas" },
    { title: "Consumer Disputes", desc: "Helping consumers assert their rights and pursue grievances through consumer forums.", bgImage: "/practice-property.png", link: "/practice-areas" },
  ];

  const teamExperts = [
    { name: "Adv. Rajesh Jaiswal", role: "Founder & Senior Standing Counsel", specialty: "Supreme Court Practice & Constitutional Law", exp: "36+ Years Experience", image: "/adv-rajesh-jaiswal.png", desc: "Strategic legal counsel focused on achieving practical outcomes for every client." },
    { name: "Adv. Meenakshi Sundaram", role: "Senior Partner", specialty: "Corporate Law • Civil Litigation", exp: "15+ Years Experience", image: "/intern-female-1.png", desc: "Extensive experience in corporate counseling and commercial disputes." },
    { name: "Adv. Vikramaditya Verma", role: "Partner", specialty: "Criminal Defense • White Collar", exp: "19+ Years Experience", image: "/intern-male-1.png", desc: "Aggressive defense strategies in complex economic offenses." }
  ];

  const latestUpdates = [
    { title: "Supreme Court Guidelines on Digital Asset Discovery & DPDP Compliance", category: "Corporate Law", date: "July 18, 2026", snippet: "An analytical deep dive into recent Supreme Court rulings on electronic evidence admissibility...", link: "/insights" },
    { title: "Landmark Triumph: Overturning PMLA Attachment in Commercial Arbitration", category: "White-Collar Crime", date: "June 29, 2026", snippet: "How our Nagpur Chambers successfully challenged Enforcement Directorate attachment proceedings...", link: "/insights" },
    { title: "Navigating Real Estate RERA Appeals in Maharashtra & High Court Writs", category: "Real Estate & RERA", date: "May 14, 2026", snippet: "Key statutory amendments impacting real estate developers, institutional home buyers...", link: "/insights" }
  ];

  return (
    <div className="home-master-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="cinematic-hero-section">
        <div className="container hero-container-relative">
          <div className="hero-content-left">
            <h1 className="hero-headline slide-in-on-load delay-load-1">
              Your Legal Rights,<br />
              <span className="text-gold">Our Legal Commitment.</span>
            </h1>
            <p className="hero-subheadline slide-in-on-load delay-load-2">
              We provide experienced, strategic, and client-focused legal representation across a multitude of complex matters.
            </p>
            <div className="hero-cta-group slide-in-on-load delay-load-3">
              <button onClick={triggerConsultationModal} className="btn hero-btn-gold">
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/practice-areas" className="btn hero-btn-outline-play" style={{textDecoration: 'none'}}>
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
          
          <div className="hero-stats-bar slide-in-on-load delay-load-4">
            <div className="stat-item"><Users size={36} className="text-gold stat-icon" /><div className="stat-text"><span className="stat-number">36+</span><span className="stat-label">Years of Experience</span></div></div>
            <div className="stat-separator"></div>
            <div className="stat-item"><Briefcase size={36} className="text-gold stat-icon" /><div className="stat-text"><span className="stat-number">1500+</span><span className="stat-label">Cases Solved</span></div></div>
            <div className="stat-separator"></div>
            <div className="stat-item"><Scale size={36} className="text-gold stat-icon" /><div className="stat-text"><span className="stat-number">98%</span><span className="stat-label">Client Satisfaction</span></div></div>
            <div className="stat-separator"></div>
            <div className="stat-item"><Award size={36} className="text-gold stat-icon" /><div className="stat-text"><span className="stat-number">Top</span><span className="stat-label">Legal Experts</span></div></div>
          </div>
        </div>
      </section>

      {/* 2. LAWYERS / LEGAL EXPERTS */}
      <section className="meet-team-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">MEET OUR LEGAL EXPERTS</span>
            <h2 className="section-title-dark">Experienced Advocates. Trusted Counsel.</h2>
            <p className="section-subtitle-dark">
              Meet the legal professionals dedicated to providing strategic, practical and client-focused representation.
            </p>
          </ScrollAnimate>

          <div className="team-grid-3col new-lawyer-grid">
            {teamExperts.map((member, idx) => (
              <ScrollAnimate key={member.name} animation="fade-up" delay={`${idx * 0.2}s`} className="new-team-card">
                <div className="new-team-card-inner">
                  <div className="team-img-wrap">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-card-body">
                    <h3 className="team-name">{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <div className="team-meta">
                      <span className="team-spec">{member.specialty}</span>
                      <span className="team-exp">{member.exp}</span>
                    </div>
                    <p className="team-desc">{member.desc}</p>
                    <Link to="/our-team" className="team-cta">
                      VIEW PROFILE <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/our-team" className="team-cta-main">
              Meet the Full Legal Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="why-us-section new-why-us">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">WHY CLIENTS CHOOSE US</span>
            <h2 className="section-title-dark">Why Our Clients Trust Us</h2>
            <p className="section-subtitle-dark">
              We combine elite legal scholarship with relentless courtroom execution to deliver unmatched victories.
            </p>
          </ScrollAnimate>

          <div className="new-why-grid">
            <ScrollAnimate animation="fade-up" delay="0s" className="new-why-card">
              <div className="why-num">01</div>
              <ShieldCheck size={32} className="text-gold" />
              <h3>Experienced Legal Counsel</h3>
              <p>Years of legal experience combined with strategic thinking and practical advice.</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay="0.2s" className="new-why-card">
              <div className="why-num">02</div>
              <UserCheck size={32} className="text-gold" />
              <h3>Client-Centered Approach</h3>
              <p>Every matter receives personal attention, clear communication and tailored legal guidance.</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay="0.4s" className="new-why-card">
              <div className="why-num">03</div>
              <Building2 size={32} className="text-gold" />
              <h3>Strategic Representation</h3>
              <p>We focus on understanding the bigger picture and building strong legal strategies.</p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay="0.6s" className="new-why-card">
              <div className="why-num">04</div>
              <Lock size={32} className="text-gold" />
              <h3>Professional & Confidential</h3>
              <p>Your legal matters are handled with complete professionalism, discretion and confidentiality.</p>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES / PRACTICE AREAS */}
      <section className="practice-grid-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">OUR PRACTICE AREAS</span>
            <h2 className="section-title-light">Comprehensive Legal Services</h2>
            <p className="section-subtitle-light">
              Professional legal guidance across a wide range of matters.
            </p>
          </ScrollAnimate>

          <div className="practice-grid-container">
            {practiceAreasData.map((area, idx) => (
              <ScrollAnimate key={area.title} animation="fade-up" delay={`${(idx % 4) * 0.15}s`} className="practice-card-wrapper">
                <Link to={area.link} className="practice-card-interactive">
                  <div className="practice-card-bg" style={{ backgroundImage: `url(${area.bgImage})` }} />
                  <div className="practice-card-overlay" />
                  <div className="practice-card-content">
                    <span className="practice-num">0{idx + 1}</span>
                    <h3 className="practice-card-title">{area.title}</h3>
                    <p className="practice-card-desc">{area.desc}</p>
                    <div className="practice-card-action">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="arrow-shift" />
                    </div>
                  </div>
                  <div className="practice-gold-bottom-border" />
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE FIRM / FOUNDER */}
      <section className="about-split-section">
        <div className="container">
          <div className="about-split-grid">
            <ScrollAnimate animation="slide-left" className="about-visual-left">
              <div className="portrait-frame-container">
                <img src="/adv-rajesh-jaiswal.png" alt="Adv. Rajesh Jaiswal" className="lawyer-portrait-img" />
                <div className="elegant-gold-frame-outline"></div>
                <div className="portrait-caption-tag">
                  <span className="caption-name">Adv. Rajesh Jaiswal</span>
                  <span className="caption-role">Founder & Managing Partner</span>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right" className="about-content-right">
              <span className="section-tag text-gold">ABOUT RAJ LAW ASSOCIATES</span>
              <h2 className="about-main-heading">Committed to Excellence in Legal Representation</h2>
              
              <p className="about-body-text">
                For over three decades, our chambers have stood as a beacon of legal authority and intellectual rigor. We bridge classic courtroom advocacy with modern corporate counseling.
              </p>
              <p className="about-body-text">
                Our philosophy rests on meticulous statutory research, unflinching ethical integrity, and aggressive protection of client rights before appellate benches and courts.
              </p>

              <div className="new-founder-stats">
                <div className="stat-pill"><CheckCircle2 size={16} className="text-gold"/> 36+ Years Experience</div>
                <div className="stat-pill"><CheckCircle2 size={16} className="text-gold"/> 1500+ Matters Handled</div>
                <div className="stat-pill"><CheckCircle2 size={16} className="text-gold"/> Client-Focused Representation</div>
                <div className="stat-pill"><CheckCircle2 size={16} className="text-gold"/> Strategic Legal Counsel</div>
              </div>

              <div className="about-action-row" style={{ marginTop: '30px' }}>
                <Link to="/about-us" className="btn hero-btn-gold">
                  <span>Learn More About Our Firm</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* 6. LATEST LEGAL UPDATES / BLOG */}
      <section className="legal-insights-section">
        <div className="container">
          <ScrollAnimate animation="fade-up" className="text-center section-header-centered">
            <span className="section-tag text-gold">LEGAL INSIGHTS</span>
            <h2 className="section-title-dark">Latest Legal Updates</h2>
            <p className="section-subtitle-dark">
              Stay informed with practical insights, legal developments and expert perspectives.
            </p>
          </ScrollAnimate>

          <div className="insights-grid-3col">
            {latestUpdates.map((post, idx) => (
              <ScrollAnimate key={post.title} animation="fade-up" delay={`${idx * 0.2}s`} className="insight-card-wrapper">
                <div className="insight-snippet-card">
                  <div className="insight-meta-row">
                    <span className="insight-cat-tag">{post.category}</span>
                    <span className="insight-date"><Calendar size={13} className="text-gold inline-icon" /> {post.date}</span>
                  </div>
                  <h3 className="insight-title">{post.title}</h3>
                  <p className="insight-snippet-text">{post.snippet}</p>
                  <div className="insight-card-footer">
                    <Link to={post.link} className="read-article-link">
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/insights" className="team-cta-main">
              View All Insights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / CONSULTATION */}
      <section className="contact-consultation-section">
        <div className="container">
          <div className="contact-2col-grid">
            <ScrollAnimate animation="slide-left" className="contact-info-col">
              <span className="section-tag text-gold">GET IN TOUCH</span>
              <h2 className="contact-main-heading">Facing a Complex Legal Challenge?</h2>
              <p className="contact-sub-text">Speak with our legal team and get professional guidance tailored to your matter.</p>
              
              <div className="contact-details-list">
                <div className="contact-item-row">
                  <div className="contact-icon-box"><MapPin size={20} className="text-gold" /></div>
                  <div>
                    <h4>Office Address</h4>
                    <p>Ravi Nagar Chambers, Nagpur, Maharashtra</p>
                  </div>
                </div>
                <div className="contact-item-row">
                  <div className="contact-icon-box"><Phone size={20} className="text-gold" /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91-9021640817</p>
                  </div>
                </div>
                <div className="contact-item-row">
                  <div className="contact-icon-box"><Mail size={20} className="text-gold" /></div>
                  <div>
                    <h4>Email</h4>
                    <p>adv.rajeshjaiswal@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item-row">
                  <div className="contact-icon-box"><Clock size={20} className="text-gold" /></div>
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-mini-cards">
                <div className="c-mini-card">
                  <Gavel size={24} className="text-gold mb-2"/>
                  <h5>Legal Consultation</h5>
                  <p>Speak directly with our legal team.</p>
                </div>
                <div className="c-mini-card">
                  <CheckCircle2 size={24} className="text-gold mb-2"/>
                  <h5>Consultation Request</h5>
                  <p>Submit details and we will contact you.</p>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right" className="contact-form-col">
              <div className="premium-form-box">
                <div className="portal-tabs" style={{ display: 'flex', gap: '10px', marginBottom: '24px', borderBottom: '2px solid #eaeaea', paddingBottom: '16px' }}>
                  <button 
                    style={{ flex: 1, background: activePortal === 'client' ? '#0B132B' : 'transparent', color: activePortal === 'client' ? '#D4AF37' : '#6B7280', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => setActivePortal('client')}
                  >
                    Client Consultation
                  </button>
                  <button 
                    style={{ flex: 1, background: activePortal === 'career' ? '#0B132B' : 'transparent', color: activePortal === 'career' ? '#D4AF37' : '#6B7280', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => setActivePortal('career')}
                  >
                    Career Application
                  </button>
                </div>

                {activePortal === 'client' && (
                  <form onSubmit={handleContactSubmit}>
                    <div className="form-grid">
                      <div className="form-group full-width">
                        <label>Full Name</label>
                        <input type="text" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" required value={contactForm.phone} onChange={e => setContactForm({...contactForm, phone: e.target.value})} placeholder="Enter phone" />
                      </div>
                      <div className="form-group">
                        <label>Practice Area</label>
                        <select required value={contactForm.practiceArea} onChange={e => setContactForm({...contactForm, practiceArea: e.target.value})}>
                          <option>Corporate Law</option>
                          <option>Civil Litigation</option>
                          <option>Criminal Defense</option>
                          <option>Family Law</option>
                          <option>Real Estate Law</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Preferred Date</label>
                        <input type="date" value={contactForm.date} onChange={e => setContactForm({...contactForm, date: e.target.value})} />
                      </div>
                      <div className="form-group full-width">
                        <label>Message</label>
                        <textarea rows="4" required value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} placeholder="Briefly describe your legal matter..."></textarea>
                      </div>
                      <div className="form-group full-width">
                        <button type="submit" className="btn-submit-premium">Request a Consultation</button>
                      </div>
                    </div>
                  </form>
                )}

                {activePortal === 'career' && (
                  <form onSubmit={handleCareerSubmit}>
                    <div className="form-grid">
                      <div className="form-group full-width" style={{ display: 'flex', gap: '10px' }}>
                        <div 
                          style={{ flex: 1, padding: '12px', textAlign: 'center', background: careerForm.appType === 'internship' ? '#0B132B' : 'transparent', color: careerForm.appType === 'internship' ? '#D4AF37' : '#374151', border: careerForm.appType === 'internship' ? '1px solid #0B132B' : '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}
                          onClick={() => setCareerForm({...careerForm, appType: 'internship'})}
                        >
                          🎓 Student Internship
                        </div>
                        <div 
                          style={{ flex: 1, padding: '12px', textAlign: 'center', background: careerForm.appType === 'lateral' ? '#0B132B' : 'transparent', color: careerForm.appType === 'lateral' ? '#D4AF37' : '#374151', border: careerForm.appType === 'lateral' ? '1px solid #0B132B' : '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}
                          onClick={() => setCareerForm({...careerForm, appType: 'lateral'})}
                        >
                          ⚖️ Lateral Position
                        </div>
                      </div>
                      <div className="form-group full-width">
                        <label>Full Name</label>
                        <input type="text" required value={careerForm.name} onChange={e => setCareerForm({...careerForm, name: e.target.value})} placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" required value={careerForm.email} onChange={e => setCareerForm({...careerForm, email: e.target.value})} placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" required value={careerForm.phone} onChange={e => setCareerForm({...careerForm, phone: e.target.value})} placeholder="Enter phone" />
                      </div>
                      <div className="form-group full-width">
                        <label>{careerForm.appType === 'internship' ? 'Law School Name & Year' : 'Bar Council Enrolment No.'}</label>
                        <input type="text" required value={careerForm.standing} onChange={e => setCareerForm({...careerForm, standing: e.target.value})} placeholder={careerForm.appType === 'internship' ? 'e.g. NLU Nagpur, 4th Year' : 'e.g. MAH/2018/1234'} />
                      </div>
                      <div className="form-group full-width">
                        <label>Statement of Purpose</label>
                        <textarea rows="3" required value={careerForm.sop} onChange={e => setCareerForm({...careerForm, sop: e.target.value})} placeholder="Why do you want to join Raj Law Associates?"></textarea>
                      </div>
                      <div className="form-group full-width">
                        <label>Upload Resume / CV (PDF)</label>
                        <input type="file" required accept=".pdf,.doc,.docx" onChange={e => setCareerForm({...careerForm, fileName: e.target.files[0]?.name || null})} style={{ padding: '9px 12px', background: '#fff', cursor: 'pointer' }} />
                      </div>
                      <div className="form-group full-width">
                        <button type="submit" className="btn-submit-premium">Submit Application</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Portal Submission Toast Notification */}
      {portalToast && (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', background: '#0B132B', color: '#FFFFFF', padding: '16px 24px', borderRadius: '8px', borderLeft: '4px solid #D4AF37', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 99999, animation: 'slideInUp 0.4s ease forwards' }}>
          <CheckCircle2 size={22} className="text-gold flex-shrink-0" />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>{portalToast}</span>
        </div>
      )}
    </div>
  );
};

export default Home;
