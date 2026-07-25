import React from 'react';
import { Award, Mail, Phone, Shield, Scale, BookOpen } from 'lucide-react';

const OurTeam = () => {
  const team = [
    {
      name: "Adv. Rajesh Jaiswal",
      role: "Founder & Managing Partner",
      specialty: "Supreme Court Practice & Constitutional Law",
      experience: "25+ Years Exp.",
      image: "/lawyer-portrait.png",
      bio: "Senior Standing Counsel with landmark triumphs before the Supreme Court of India and High Courts in constitutional, corporate tax, and appellate litigation."
    },
    {
      name: "Adv. Meenakshi Sundaram",
      role: "Senior Partner - Corporate & M&A",
      specialty: "Cross-Border M&A & Private Equity",
      experience: "20+ Years Exp.",
      image: "/intern-female-1.png",
      bio: "Recognized as a leading Corporate Counselor advising Fortune 500 conglomerates, venture capital funds, and public sector undertakings on complex regulatory compliance."
    },
    {
      name: "Adv. Vikramaditya Verma",
      role: "Partner - Criminal Defense & White Collar",
      specialty: "Economic Offenses & PMLA Defense",
      experience: "18+ Years Exp.",
      image: "/intern-male-1.png",
      bio: "Formidable trial and appellate advocate specializing in defending corporate entities, directors, and executives in multi-agency regulatory and financial investigations."
    },
    {
      name: "Adv. Neha Kulkarni",
      role: "Senior Associate - Real Estate & RERA",
      specialty: "Property Litigation & Town Planning Appeals",
      experience: "12+ Years Exp.",
      image: "/intern-female-1.png",
      bio: "Commanding expertise in high-stakes property title verification, infrastructure development disputes, and RERA appellate tribunal representation across Central India."
    },
    {
      name: "Adv. Siddharth Rao",
      role: "Senior Associate - Cyber Fraud & Banking",
      specialty: "Digital Privacy & Asset Recovery",
      experience: "10+ Years Exp.",
      image: "/intern-male-1.png",
      bio: "Spearheads the chamber's technology and cyber-crime litigation wing, recovering embezzled corporate funds and advising on strict DPDP data privacy compliance."
    },
    {
      name: "Adv. Ananya Mukherjee",
      role: "Associate - Commercial Arbitration",
      specialty: "Domestic & International Arbitration",
      experience: "8+ Years Exp.",
      image: "/intern-female-1.png",
      bio: "Meticulous commercial arbitration practitioner representing construction, energy, and supply chain enterprises in institutional and ad-hoc tribunal proceedings."
    }
  ];

  return (
    <div className="team-page" style={{ width: '100%', overflowX: 'hidden', backgroundColor: 'var(--color-bg-alt)' }}>
      {/* Page Banner - STRICT 170px top padding guarantees NO OVERLAP with fixed navbar */}
      <section className="page-banner">
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            Advocate Profiles & Leadership
          </span>
          <h1 className="heading-underline-center" style={{ paddingBottom: '1.25rem', color: 'var(--color-text-light)', fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Our Legal Minds
          </h1>
          <p style={{ maxWidth: '700px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', margin: '1.75rem auto 0', lineHeight: 1.7 }}>
            Our leadership comprises seasoned Supreme Court advocates, trial lawyers, and strategic counselors dedicated to uncompromising courtroom victory.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid-12" style={{ rowGap: '3rem' }}>
            {team.map((member, idx) => (
              <div key={idx} className="col-span-4">
                <div className="luxury-card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Real Portrait Image Frame with contain object-fit to guarantee full photo is displayed uncropped */}
                  <div style={{ width: '100%', height: '360px', backgroundColor: '#0B132B', borderRadius: '6px', marginBottom: '1.5rem', border: '1px solid rgba(212, 175, 55, 0.3)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-avatar-img"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#0B132B', color: '#FFFFFF', padding: '6px 14px', borderRadius: '50px', fontSize: '11.5px', fontWeight: 700, border: '1px solid #D4AF37', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Award size={14} className="text-gold" /> {member.experience}
                    </div>
                  </div>

                  <span className="text-gold" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    {member.role}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontFamily: 'Playfair Display, serif' }}>{member.name}</h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1C2541', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    {member.specialty}
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.75rem', color: '#4B5563' }}>
                    {member.bio}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(0,0,0,0.08)', color: 'var(--color-primary-dark)' }}>
                    <a href="mailto:counsel@rajlawassociates.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#0B132B', transition: 'color 0.2s ease' }}>
                      <Mail size={16} className="text-gold" /> Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
