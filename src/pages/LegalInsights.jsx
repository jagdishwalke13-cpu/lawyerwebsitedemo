import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, CheckCircle2, Bookmark, Copy, ExternalLink, Send, User } from 'lucide-react';
import './LegalInsights.css';

// Initial Feed Posts Data with realistic legal advice and corporate updates
const initialPosts = [
  {
    id: 'post-1',
    author: 'Adv. Rajesh Jaiswal',
    role: 'Senior Partner & Founder',
    avatar: '/adv-rajesh-jaiswal.png',
    timestamp: '2 hours ago',
    category: 'Criminal Law',
    title: 'Navigating Your First Court Case: What Every Client Should Know',
    snippet: 'Entering a courtroom for the first time can be an intimidating experience for any individual or corporate officer. Understanding statutory procedural frameworks, the role of evidentiary discovery, and maintaining absolute composure during cross-examination are critical pillars of litigation strategy. When facing criminal or civil proceedings, your primary responsibility is absolute transparency with your counsel.',
    fullContent: `
      Furthermore, under the new Bharatiya Nagarik Suraksha Sanhita (BNSS), deadlines for preliminary filings, charge sheets, and statutory bail applications have been significantly streamlined. Clients must ensure that every piece of physical and electronic correspondence—including emails, WhatsApp messages, and bank statements—is preserved and cataloged without alteration.

      Key Strategic Takeaways for First-Time Litigants:
      1. Attorney-Client Privilege is Absolute: Share every material fact, whether favorable or unfavorable, exclusively with your senior advocate.
      2. Adhere strictly to judicial decorum and court appearance timelines; tardiness or unexcused absences can result in adverse inferences or ex-parte orders.
      3. Rely on statutory documentation rather than verbal assertions during preliminary hearings.
    `,
    image: '/practice-litigation.png',
    likes: 142,
    commentsCount: 18,
    isLiked: false,
    comments: [
      { id: 'c1', author: 'Rohan Mehta (MD, Apex Tech)', text: 'Invaluable advice, Rajesh sir. The clarity on BNSS procedural deadlines is extremely helpful for corporate legal teams.' },
      { id: 'c2', author: 'Adv. S. K. Sharma', text: 'Spot on regarding evidentiary preservation. Most clients make the mistake of deleting casual electronic chats before consultation.' }
    ]
  },
  {
    id: 'post-2',
    author: 'Adv. Rajesh Jaiswal',
    role: 'Senior Partner & Founder',
    avatar: '/adv-rajesh-jaiswal.png',
    timestamp: 'Yesterday at 4:30 PM',
    category: 'Cyber & Tech',
    title: 'The New Digital Personal Data Protection Act (DPDP): What Corporate Boards Must Do Today',
    snippet: 'With the notification of the Digital Personal Data Protection Act (DPDP), Indian enterprises and multinational corporations processing citizen data face unprecedented statutory penalties—reaching up to ₹250 Crore per breach. Boardrooms can no longer treat cybersecurity and data privacy as mere IT operational matters; they are now direct fiduciary compliance mandates.',
    fullContent: `
      Under the DPDP framework, every Data Fiduciary must implement verifiable consent mechanisms, explicit purpose limitations, and mandatory breach notification protocols to the Data Protection Board of India within tight statutory timelines. Notice forms must be rendered in clear, plain language across English and constitutional languages listed in the Eighth Schedule.

      Immediate Compliance Action Checklist for General Counsel:
      • Conduct an exhaustive enterprise data mapping audit across HR, CRM, and cloud vendors.
      • Re-draft existing vendor Data Processing Agreements (DPAs) with indemnity clauses aligning with DPDP liability structures.
      • Appoint an independent Data Protection Officer (DPO) domiciled in India if classified as a Significant Data Fiduciary (SDF).
    `,
    image: '/practice-cyber.png',
    likes: 289,
    commentsCount: 34,
    isLiked: true,
    comments: [
      { id: 'c3', author: 'Vikramaditya Singhania', text: 'We are currently upgrading our cloud compliance for our Fintech division. Would love to schedule a chamber consultation on the DPA restructuring.' }
    ]
  },
  {
    id: 'post-3',
    author: 'Adv. Rajesh Jaiswal',
    role: 'Senior Partner & Founder',
    avatar: '/adv-rajesh-jaiswal.png',
    timestamp: 'July 22, 2026',
    category: 'Corporate Updates',
    title: 'Structuring Shareholder Agreements to Prevent NCLT Deadlocks in Startups & JVs',
    snippet: 'Corporate deadlocks between co-founders or joint venture investors are among the leading causes of destructive litigation before the National Company Law Tribunal (NCLT) under Section 241/242 of the Companies Act, 2013 (Oppression and Mismanagement). Most of these courtroom battles can be preempted by drafting robust Shareholder Agreements (SHAs).',
    fullContent: `
      A well-architected SHA must move beyond standard boilerplates to incorporate unambiguous dispute escalation ladders, Call/Put option valuation formulas, and clear deadlock resolution mechanisms such as the 'Russian Roulette' or 'Texas Shootout' clauses.

      When representing private equity funds and founder groups, we consistently emphasize that anti-dilution rights and affirmative voting matters (reserved matters) must be calibrated to balance operational agility with minority investor protection. Never rely on informal understandings or unsigned term sheets when equity capital is at stake.
    `,
    image: null,
    likes: 95,
    commentsCount: 12,
    isLiked: false,
    comments: []
  },
  {
    id: 'post-4',
    author: 'Adv. Rajesh Jaiswal',
    role: 'Senior Partner & Founder',
    avatar: '/adv-rajesh-jaiswal.png',
    timestamp: 'July 18, 2026',
    category: 'Criminal Law',
    title: 'Anticipatory Bail vs. Regular Bail: Strategic Pre-Arrest Remedies',
    snippet: 'When an individual or corporate promoter apprehends arrest in connection with non-bailable offenses under economic laws or penal codes, seeking prompt pre-arrest protection is paramount. Understanding the jurisprudential distinction between Anticipatory Bail under Section 482 BNSS (formerly Sec 438 CrPC) and Regular Bail is essential for safeguarding personal liberty.',
    fullContent: `
      Anticipatory bail is an extraordinary constitutional remedy granted by the Court of Sessions or High Court when the applicant demonstrates reasonable apprehension of arrest arising from mala fide motives, political rivalry, or contractual disputes disguised as criminal complaints.

      Supreme Court precedents consistently reiterate that economic offenses do not automatically preclude anticipatory bail if the accused co-operates fully with the investigating agency and does not pose a flight risk. Our chambers prioritize immediate judicial intervention and protective orders before coercive police action occurs.
    `,
    image: null,
    likes: 210,
    commentsCount: 27,
    isLiked: false,
    comments: []
  },
  {
    id: 'post-5',
    author: 'Adv. Rajesh Jaiswal',
    role: 'Senior Partner & Founder',
    avatar: '/adv-rajesh-jaiswal.png',
    timestamp: 'July 14, 2026',
    category: 'Real Estate & RERA',
    title: 'Understanding RERA Benchmarks for Delay in Delivery and Buyer Compensation',
    snippet: 'The Real Estate (Regulation and Development) Act, 2016 (RERA) has fundamentally altered property jurisprudence in India, transforming the buyer-developer dynamic from caveat emptor to strict accountability. When residential or commercial projects suffer unreasonable construction delays, allottees possess enforceable statutory rights.',
    fullContent: `
      Under Section 18 of RERA, if a promoter fails to complete or give possession of an apartment in accordance with the terms of the agreement for sale, the allottee has the absolute right to withdraw from the project and claim full refund of the amount paid along with statutory interest at prescribed rates.

      Alternatively, if the buyer chooses to continue with the project, they are entitled to receive interest compensation for every month of delay until actual physical handover occurs. We routinely represent resident welfare associations and institutional investors in enforcing these statutory rights before RERA appellate tribunals and execution authorities.
    `,
    image: null,
    likes: 164,
    commentsCount: 15,
    isLiked: false,
    comments: []
  }
];

const categories = ['All', 'Criminal Law', 'Corporate Updates', 'Cyber & Tech', 'Real Estate & RERA'];

const LegalInsights = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedPosts, setExpandedPosts] = useState({});
  const [activeComments, setActiveComments] = useState({});
  const [newCommentText, setNewCommentText] = useState({});
  const [activeOptionsMenu, setActiveOptionsMenu] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleFilterChange = (cat) => {
    setActiveCategory(cat);
  };

  const toggleExpand = (postId) => {
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleComments = (postId) => {
    setActiveComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          return {
            ...post,
            isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1
          };
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId, e) => {
    e.preventDefault();
    const text = newCommentText[postId];
    if (!text || text.trim() === '') return;

    const newCommentObj = {
      id: `c-${Date.now()}`,
      author: 'You (Verified Client)',
      text: text.trim()
    };

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            commentsCount: post.commentsCount + 1,
            comments: [...post.comments, newCommentObj]
          };
        }
        return post;
      })
    );

    setNewCommentText(prev => ({ ...prev, [postId]: '' }));
    showToast('Your comment has been posted to discussion.');
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.snippet,
        url: window.location.href,
      }).catch(() => {
        showToast('Link copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    }
  };

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="insights-feed-wrapper">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="feed-toast">
          <CheckCircle2 size={16} className="text-gold" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Page Container & Layout Strategy (Max-width 680px centered feed) */}
      <div className="feed-container">
        {/* Page Header */}
        <header className="feed-page-header text-center">
          <h1 className="feed-main-title">Legal Insights & Updates</h1>
          <p className="feed-subtitle">
            Authoritative legal commentary, statutory analysis, and courtroom perspectives from our Senior Partners.
          </p>

          {/* Filter Bar with small pill-shaped buttons */}
          <div className="feed-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* 2. Content Cards Timeline (The 'Feed Post' Component) */}
        <div className="feed-posts-timeline">
          {filteredPosts.map((post) => {
            const isExpanded = !!expandedPosts[post.id];
            const showCommentsSection = !!activeComments[post.id];

            return (
              <article key={post.id} className="feed-post-card">
                {/* Top Bar (Context) */}
                <div className="post-top-bar">
                  <div className="author-context">
                    <img src={post.avatar} alt={post.author} className="author-avatar" />
                    <div className="author-meta">
                      <div className="author-name-row">
                        <span className="author-name">{post.author}</span>
                        <span className="author-verified-badge">✔</span>
                      </div>
                      <span className="author-role">{post.role} • {post.timestamp}</span>
                    </div>
                  </div>

                  <div className="post-top-actions">
                    <span className="post-category-tag">{post.category}</span>
                    
                    {/* Three dots options icon */}
                    <div className="options-dropdown-wrap">
                      <button 
                        onClick={() => setActiveOptionsMenu(activeOptionsMenu === post.id ? null : post.id)} 
                        className="options-icon-btn" 
                        aria-label="Post Options"
                      >
                        <MoreHorizontal size={20} />
                      </button>

                      {activeOptionsMenu === post.id && (
                        <div className="options-menu-popup">
                          <button onClick={() => { showToast('Post saved to your bookmarks!'); setActiveOptionsMenu(null); }}>
                            <Bookmark size={14} /> <span>Save Article</span>
                          </button>
                          <button onClick={() => { handleShare(post); setActiveOptionsMenu(null); }}>
                            <Copy size={14} /> <span>Copy Link</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Post Title */}
                <h2 className="post-title">{post.title}</h2>

                {/* Post Snippet & Expand Action */}
                <div className="post-body-text">
                  <p className="snippet-para">
                    {post.snippet}
                    {!isExpanded && (
                      <span 
                        onClick={() => toggleExpand(post.id)} 
                        className="expand-more-link"
                      >
                        {' '}... More
                      </span>
                    )}
                  </p>

                  {/* Expanded Full Article Content */}
                  {isExpanded && (
                    <div className="expanded-article-content">
                      {post.fullContent.split('\n\n').map((para, idx) => (
                        <p key={idx} className="full-para">{para.trim()}</p>
                      ))}
                      <span 
                        onClick={() => toggleExpand(post.id)} 
                        className="expand-less-link"
                      >
                        Show Less ▲
                      </span>
                    </div>
                  )}
                </div>

                {/* Optional Post Image Attachment */}
                {post.image && (
                  <div className="post-image-attachment">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}

                {/* Engagement Stats Bar */}
                <div className="post-stats-row">
                  <span className="stat-likes-count">
                    <span className="like-icon-gold">👍</span> {post.likes} Applauds
                  </span>
                  <span 
                    onClick={() => toggleComments(post.id)} 
                    className="stat-comments-count"
                  >
                    {post.commentsCount} Comments • 8 Shares
                  </span>
                </div>

                {/* Divider: faint 1px solid line */}
                <div className="post-divider" />

                {/* 3. Interactive Engagement Footer (Action Bar) */}
                <div className="post-action-bar">
                  {/* Like / Applaud Button */}
                  <button 
                    onClick={() => toggleLike(post.id)} 
                    className={`action-btn ${post.isLiked ? 'liked-active' : ''}`}
                  >
                    <ThumbsUp size={18} className="action-svg-icon" />
                    <span>{post.isLiked ? 'Applauded' : 'Applaud'}</span>
                  </button>

                  {/* Comment / Discuss Button */}
                  <button 
                    onClick={() => toggleComments(post.id)} 
                    className={`action-btn ${showCommentsSection ? 'comment-active' : ''}`}
                  >
                    <MessageSquare size={18} className="action-svg-icon" />
                    <span>Discuss</span>
                  </button>

                  {/* Share Button */}
                  <button 
                    onClick={() => handleShare(post)} 
                    className="action-btn"
                  >
                    <Share2 size={18} className="action-svg-icon" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Interactive Comments Discussion Section */}
                {showCommentsSection && (
                  <div className="post-comments-section">
                    <div className="comments-list">
                      {post.comments.length === 0 ? (
                        <p className="no-comments-text">No comments yet. Be the first to start the discussion!</p>
                      ) : (
                        post.comments.map(c => (
                          <div key={c.id} className="comment-item">
                            <div className="comment-avatar">
                              <User size={16} />
                            </div>
                            <div className="comment-bubble">
                              <span className="comment-author">{c.author}</span>
                              <p className="comment-text">{c.text}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add Comment Form */}
                    <form onSubmit={(e) => handleAddComment(post.id, e)} className="add-comment-form">
                      <input
                        type="text"
                        placeholder="Add your legal inquiry or comment..."
                        value={newCommentText[post.id] || ''}
                        onChange={(e) => setNewCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                        className="comment-input"
                      />
                      <button type="submit" className="comment-submit-btn" aria-label="Send Comment">
                        <Send size={16} />
                      </button>
                    </form>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* 4. End of Feed Component */}
        <div className="end-of-feed-box text-center">
          <div className="end-check-circle">
            <CheckCircle2 size={24} />
          </div>
          <span className="end-feed-text">You're All Caught Up</span>
        </div>
      </div>
    </div>
  );
};

export default LegalInsights;
