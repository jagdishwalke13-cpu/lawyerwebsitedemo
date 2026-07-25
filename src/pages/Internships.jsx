import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, X, Award, Shield, BookOpen, GraduationCap, ArrowRight, User, Phone, Mail, Building } from 'lucide-react';
import './Internships.css';

const Internships = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    yearOfStudy: '3rd Year (5-Year Law)',
    preferredMonth: 'August 2026',
    interestArea: 'Commercial Litigation & Appeals',
    coverLetter: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate secure application processing and transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1600);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      college: '',
      yearOfStudy: '3rd Year (5-Year Law)',
      preferredMonth: 'August 2026',
      interestArea: 'Commercial Litigation & Appeals',
      coverLetter: ''
    });
    setSelectedFile(null);
    setIsSubmitted(false);
  };

  return (
    <div className="internship-page-wrapper">
      {/* 1. Page Header & Inspiration Section (Deep Dark Navy with subtle pattern) */}
      <section className="internship-header-section text-center">
        <div className="container header-container-inner">
          <span className="section-tag text-gold">Chamber Mentorship & Careers</span>
          <h1 className="internship-page-title">Shape Your Legal Career With Us</h1>
          <p className="internship-page-subtext">
            Gain hands-on experience in drafting, research, and courtroom proceedings under the guidance of top legal experts in Nagpur.
          </p>

          <div className="internship-highlights-badges">
            <span className="badge-item"><Award size={14} className="text-gold" /> Courtroom Advocacy Mentorship</span>
            <span className="badge-item"><BookOpen size={14} className="text-gold" /> Rigorous Statutory Drafting</span>
            <span className="badge-item"><GraduationCap size={14} className="text-gold" /> Certificate of Excellence</span>
          </div>
        </div>
      </section>

      {/* 2. The Internship Application Form Container (Negative top margin overlap -50px) */}
      <section className="internship-form-section">
        <div className="container">
          <div className="internship-form-card">
            {isSubmitted ? (
              /* Success Confirmation Screen */
              <div className="internship-success-view text-center">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={64} className="text-gold" />
                </div>
                <h2 className="success-main-heading">Thank you! Your application has been received.</h2>
                <p className="success-sub-text">
                  Our team will contact you shortly. We have securely logged your academic credentials and resume into our Nagpur Chambers Mentorship portal.
                </p>

                <div className="application-ref-box">
                  <div className="ref-row">
                    <span>Application Reference ID:</span>
                    <strong>RLA-INT-{Math.floor(100000 + Math.random() * 900000)}</strong>
                  </div>
                  <div className="ref-row">
                    <span>Applicant Name:</span>
                    <strong>{formData.firstName} {formData.lastName}</strong>
                  </div>
                  <div className="ref-row">
                    <span>Law Institution:</span>
                    <strong>{formData.college || 'National Law University'}</strong>
                  </div>
                  <div className="ref-row">
                    <span>Preferred Cycle:</span>
                    <strong>{formData.preferredMonth}</strong>
                  </div>
                </div>

                <div className="next-steps-info">
                  <Shield size={18} className="text-gold flex-shrink-0" />
                  <span><strong>Next Step:</strong> Shortlisted applicants will receive an invitation for a chamber or virtual telephonic assessment within 7 working days.</span>
                </div>

                <button onClick={handleReset} className="btn submit-another-btn">
                  <span>Submit Another Application</span>
                </button>
              </div>
            ) : (
              /* Active Internship Application Form */
              <>
                <div className="form-card-header text-center">
                  <h2 className="form-title">Internship Application Form</h2>
                  <p className="form-subtitle">
                    Complete all sections below to apply for our upcoming internship cycles at Nagpur Chambers.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="internship-multi-form">
                  {/* ==========================================
                      SECTION 1: PERSONAL DETAILS (2-col Grid)
                      ========================================== */}
                  <div className="form-section-block">
                    <div className="section-header-tag">
                      <span className="section-step-num">01</span>
                      <h3 className="section-step-title">Personal Details</h3>
                    </div>

                    <div className="form-grid-2col">
                      {/* First Name */}
                      <div className="material-group">
                        <label htmlFor="firstName" className="material-label">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. Rohan / Ananya"
                          className="material-input"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="material-group">
                        <label htmlFor="lastName" className="material-label">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Mehta / Deshmukh"
                          className="material-input"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="material-group">
                        <label htmlFor="email" className="material-label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rohan.mehta@nlu.ac.in"
                          className="material-input"
                        />
                      </div>

                      {/* Phone / WhatsApp Number */}
                      <div className="material-group">
                        <label htmlFor="phone" className="material-label">Phone/WhatsApp Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-9876543210"
                          className="material-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ==========================================
                      SECTION 2: ACADEMIC DETAILS (2-col Grid)
                      ========================================== */}
                  <div className="form-section-block">
                    <div className="section-header-tag">
                      <span className="section-step-num">02</span>
                      <h3 className="section-step-title">Academic Details</h3>
                    </div>

                    <div className="form-grid-2col">
                      {/* Law College / University Name */}
                      <div className="material-group col-span-2-mobile">
                        <label htmlFor="college" className="material-label">Law College/University Name *</label>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          required
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="e.g. Maharashtra National Law University (MNLU), Nagpur"
                          className="material-input"
                        />
                      </div>

                      {/* Current Year of Study (Dropdown) */}
                      <div className="material-group">
                        <label htmlFor="yearOfStudy" className="material-label">Current Year of Study *</label>
                        <select
                          id="yearOfStudy"
                          name="yearOfStudy"
                          value={formData.yearOfStudy}
                          onChange={handleChange}
                          className="material-input material-select"
                        >
                          <option value="1st Year (5-Year Law)">1st Year (5-Year BA/BBA LLB)</option>
                          <option value="2nd Year (5-Year Law)">2nd Year (5-Year BA/BBA LLB)</option>
                          <option value="3rd Year (5-Year Law)">3rd Year (5-Year BA/BBA LLB)</option>
                          <option value="4th Year (5-Year Law)">4th Year (5-Year BA/BBA LLB)</option>
                          <option value="5th Year (5-Year Law)">5th Year (5-Year BA/BBA LLB)</option>
                          <option value="1st Year (3-Year LLB)">1st Year (3-Year LLB)</option>
                          <option value="2nd Year (3-Year LLB)">2nd Year (3-Year LLB)</option>
                          <option value="3rd Year (3-Year LLB)">3rd Year (3-Year LLB)</option>
                          <option value="LLM / Post Graduate">LLM / Post Graduate Scholar</option>
                        </select>
                      </div>

                      {/* Preferred Internship Month (Dropdown) */}
                      <div className="material-group">
                        <label htmlFor="preferredMonth" className="material-label">Preferred Internship Month *</label>
                        <select
                          id="preferredMonth"
                          name="preferredMonth"
                          value={formData.preferredMonth}
                          onChange={handleChange}
                          className="material-input material-select"
                        >
                          <option value="August 2026">August 2026</option>
                          <option value="September 2026">September 2026</option>
                          <option value="October 2026">October 2026</option>
                          <option value="November 2026">November 2026</option>
                          <option value="December 2026 (Winter Cycle)">December 2026 (Winter Cycle)</option>
                          <option value="January 2027">January 2027</option>
                          <option value="May / June 2027 (Summer Cycle)">May / June 2027 (Summer Cycle)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ==========================================
                      SECTION 3: UPLOADS & COVER LETTER (1-col)
                      ========================================== */}
                  <div className="form-section-block">
                    <div className="section-header-tag">
                      <span className="section-step-num">03</span>
                      <h3 className="section-step-title">Uploads & Cover Letter</h3>
                    </div>

                    <div className="form-grid-1col">
                      {/* Cover Letter Text Area */}
                      <div className="material-group">
                        <label htmlFor="coverLetter" className="material-label">Cover Letter / Statement of Purpose *</label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          required
                          rows={4}
                          value={formData.coverLetter}
                          onChange={handleChange}
                          placeholder="Please introduce yourself, highlight your research interests, and explain why you wish to intern at RAJ LAW ASSOCIATES Nagpur Chambers..."
                          className="material-input material-textarea"
                        />
                      </div>

                      {/* Custom Drag-and-Drop Resume Upload Box */}
                      <div className="resume-upload-wrapper">
                        <label className="material-label">Resume / Curriculum Vitae (PDF or DOCX) *</label>
                        
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={`custom-drop-zone ${isDragging ? 'dragging-active' : ''} ${selectedFile ? 'file-selected' : ''}`}
                        >
                          <input 
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden-file-input"
                            style={{ display: 'none' }}
                          />

                          {selectedFile ? (
                            /* Selected File View */
                            <div className="selected-file-badge text-center">
                              <div className="file-icon-gold">
                                <FileText size={36} className="text-gold" />
                              </div>
                              <div className="file-info-text">
                                <span className="file-name-strong">{selectedFile.name}</span>
                                <span className="file-size-sub">
                                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for Transmission
                                </span>
                              </div>
                              <button 
                                type="button" 
                                onClick={removeFile} 
                                className="remove-file-btn"
                                aria-label="Remove File"
                              >
                                <X size={16} /> <span>Remove / Replace</span>
                              </button>
                            </div>
                          ) : (
                            /* Empty Drag & Drop View */
                            <div className="drop-zone-content text-center">
                              <div className="cloud-icon-circle">
                                <UploadCloud size={38} className="text-gold upload-bounce" />
                              </div>
                              <span className="upload-main-text">Click to Upload Resume/CV (PDF)</span>
                              <span className="upload-sub-text">or drag and drop your file here (Max file size: 10MB)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button: Full-width Solid Gold button */}
                  <div className="form-submit-row">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn submit-internship-gold-btn"
                    >
                      {isSubmitting ? (
                        <span className="submitting-flex">
                          <span className="spinner-mini" /> Verifying Credentials & Transmitting...
                        </span>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                    <p className="submission-disclaimer text-center">
                      🔒 All applications are reviewed confidentially by Senior Partner Adv. Rajesh Jaiswal’s recruitment panel.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
