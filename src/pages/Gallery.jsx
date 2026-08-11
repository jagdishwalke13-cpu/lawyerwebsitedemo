import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    "id": 1,
    "src": "/gallery/img_318a9aad.jpeg",
    "alt": "Gallery Image 1",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 2,
    "src": "/gallery/img_f1379f89.jpeg",
    "alt": "Gallery Image 2",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 3,
    "src": "/gallery/img_5aadd8da.jpeg",
    "alt": "Gallery Image 3",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 4,
    "src": "/gallery/img_032b0d6d.jpeg",
    "alt": "Gallery Image 4",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 5,
    "src": "/gallery/img_04a166e3.jpeg",
    "alt": "Gallery Image 5",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 6,
    "src": "/gallery/img_020c7956.jpeg",
    "alt": "Gallery Image 6",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 7,
    "src": "/gallery/img_1be8680b.jpeg",
    "alt": "Gallery Image 7",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 8,
    "src": "/gallery/img_eacd9b22.jpeg",
    "alt": "Gallery Image 8",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 9,
    "src": "/gallery/img_d9b35ca6.jpeg",
    "alt": "Gallery Image 9",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 10,
    "src": "/gallery/img_797a6f49.jpeg",
    "alt": "Gallery Image 10",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 11,
    "src": "/gallery/img_aba2f780.jpeg",
    "alt": "Gallery Image 11",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 12,
    "src": "/gallery/img_528dfc7b.jpeg",
    "alt": "Gallery Image 12",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 13,
    "src": "/gallery/img_e41c818b.jpeg",
    "alt": "Gallery Image 13",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 14,
    "src": "/gallery/img_224fc271.jpeg",
    "alt": "Gallery Image 14",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 15,
    "src": "/gallery/img_2c0bc117.jpeg",
    "alt": "Gallery Image 15",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 16,
    "src": "/gallery/img_3fea4acf.jpeg",
    "alt": "Gallery Image 16",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 17,
    "src": "/gallery/img_5da92276.jpeg",
    "alt": "Gallery Image 17",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 19,
    "src": "/gallery/img_d38db1dc.jpeg",
    "alt": "Gallery Image 19",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 20,
    "src": "/gallery/img_2106901e.jpeg",
    "alt": "Gallery Image 20",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 21,
    "src": "/gallery/img_cd896d59.jpeg",
    "alt": "Gallery Image 21",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 22,
    "src": "/gallery/img_8e90b1f8.jpeg",
    "alt": "Gallery Image 22",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 23,
    "src": "/gallery/img_162c6a87.jpeg",
    "alt": "Gallery Image 23",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 24,
    "src": "/gallery/img_2a242b1c.jpeg",
    "alt": "Gallery Image 24",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 25,
    "src": "/gallery/img_1cc1ab46.jpeg",
    "alt": "Gallery Image 25",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 26,
    "src": "/gallery/img_7f98f87c.jpeg",
    "alt": "Gallery Image 26",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 27,
    "src": "/gallery/img_976122ca.jpeg",
    "alt": "Gallery Image 27",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 28,
    "src": "/gallery/img_d0f1ce80.jpeg",
    "alt": "Gallery Image 28",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 29,
    "src": "/gallery/img_a891a4c6.jpeg",
    "alt": "Gallery Image 29",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 30,
    "src": "/gallery/img_75c0ab38.jpeg",
    "alt": "Gallery Image 30",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 31,
    "src": "/gallery/img_c39d6284.jpeg",
    "alt": "Gallery Image 31",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 32,
    "src": "/gallery/img_13ba748b.jpeg",
    "alt": "Gallery Image 32",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 33,
    "src": "/gallery/img_4db80218.jpeg",
    "alt": "Gallery Image 33",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 34,
    "src": "/gallery/img_8ed7d947.jpeg",
    "alt": "Gallery Image 34",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 35,
    "src": "/gallery/img_30d4a467.jpeg",
    "alt": "Gallery Image 35",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 36,
    "src": "/gallery/img_2f71a7e2.jpeg",
    "alt": "Gallery Image 36",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 37,
    "src": "/gallery/img_e94342b1.jpeg",
    "alt": "Gallery Image 37",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 38,
    "src": "/gallery/img_f9b177de.jpeg",
    "alt": "Gallery Image 38",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 39,
    "src": "/gallery/img_40833cdf.jpeg",
    "alt": "Gallery Image 39",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 41,
    "src": "/gallery/img_fad79e7b.jpeg",
    "alt": "Gallery Image 41",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 42,
    "src": "/gallery/img_45176ae3.jpeg",
    "alt": "Gallery Image 42",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 43,
    "src": "/gallery/img_9f4b6d69.jpeg",
    "alt": "Gallery Image 43",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 44,
    "src": "/gallery/img_d4be9ff4.jpeg",
    "alt": "Gallery Image 44",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 45,
    "src": "/gallery/img_7748af67.jpeg",
    "alt": "Gallery Image 45",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 46,
    "src": "/gallery/img_fde37955.jpeg",
    "alt": "Gallery Image 46",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 47,
    "src": "/gallery/img_fb4cf724.jpeg",
    "alt": "Gallery Image 47",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 48,
    "src": "/gallery/img_6e8266b9.jpeg",
    "alt": "Gallery Image 48",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 49,
    "src": "/gallery/img_4304131d.jpeg",
    "alt": "Gallery Image 49",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 50,
    "src": "/gallery/img_96a393ac.jpeg",
    "alt": "Gallery Image 50",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 51,
    "src": "/gallery/img_cfd92c30.jpeg",
    "alt": "Gallery Image 51",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 52,
    "src": "/gallery/img_aaed4e90.jpeg",
    "alt": "Gallery Image 52",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 53,
    "src": "/gallery/img_0703d6df.jpeg",
    "alt": "Gallery Image 53",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 54,
    "src": "/gallery/img_f1ece95f.jpeg",
    "alt": "Gallery Image 54",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 55,
    "src": "/gallery/img_c4142795.jpeg",
    "alt": "Gallery Image 55",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 56,
    "src": "/gallery/img_af0b788b.jpeg",
    "alt": "Gallery Image 56",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 57,
    "src": "/gallery/img_4a7b6058.jpeg",
    "alt": "Gallery Image 57",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 58,
    "src": "/gallery/img_982f0f30.jpeg",
    "alt": "Gallery Image 58",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 59,
    "src": "/gallery/img_4c89596d.jpeg",
    "alt": "Gallery Image 59",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 60,
    "src": "/gallery/img_faa401ec.jpeg",
    "alt": "Gallery Image 60",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 61,
    "src": "/gallery/img_f04548d2.jpeg",
    "alt": "Gallery Image 61",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 62,
    "src": "/gallery/img_7c75f34a.jpeg",
    "alt": "Gallery Image 62",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 63,
    "src": "/gallery/img_f1664ec7.jpeg",
    "alt": "Gallery Image 63",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 64,
    "src": "/gallery/img_dc229eaf.jpeg",
    "alt": "Gallery Image 64",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 65,
    "src": "/gallery/img_747bf4ab.jpeg",
    "alt": "Gallery Image 65",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 66,
    "src": "/gallery/img_e6a72c17.jpeg",
    "alt": "Gallery Image 66",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 67,
    "src": "/gallery/img_19f21545.jpeg",
    "alt": "Gallery Image 67",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 68,
    "src": "/gallery/img_5d2faf1f.jpeg",
    "alt": "Gallery Image 68",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 69,
    "src": "/gallery/img_5514fb73.jpeg",
    "alt": "Gallery Image 69",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 70,
    "src": "/gallery/img_da59120d.jpeg",
    "alt": "Gallery Image 70",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 71,
    "src": "/gallery/img_4b18e82f.jpeg",
    "alt": "Gallery Image 71",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 72,
    "src": "/gallery/img_ef6c96f3.jpeg",
    "alt": "Gallery Image 72",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 73,
    "src": "/gallery/img_2f3b15b3.jpeg",
    "alt": "Gallery Image 73",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 74,
    "src": "/gallery/img_bfa2bf17.jpeg",
    "alt": "Gallery Image 74",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 75,
    "src": "/gallery/img_ced7f3e0.jpeg",
    "alt": "Gallery Image 75",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 76,
    "src": "/gallery/img_0380bd3c.jpeg",
    "alt": "Gallery Image 76",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 77,
    "src": "/gallery/img_54b2e053.jpeg",
    "alt": "Gallery Image 77",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 78,
    "src": "/gallery/img_3deec9fc.jpeg",
    "alt": "Gallery Image 78",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  },
  {
    "id": 79,
    "src": "/gallery/img_e7d2fffb.jpeg",
    "alt": "Gallery Image 79",
    "category": "Practice Areas",
    "title": "Practice Areas Snapshot",
    "desc": "An exclusive look into our practice areas."
  },
  {
    "id": 80,
    "src": "/gallery/img_c2f35aea.jpeg",
    "alt": "Gallery Image 80",
    "category": "Events",
    "title": "Events Snapshot",
    "desc": "An exclusive look into our events."
  },
  {
    "id": 81,
    "src": "/gallery/img_1ef6efd8.jpeg",
    "alt": "Gallery Image 81",
    "category": "Firm & Chambers",
    "title": "Firm & Chambers Snapshot",
    "desc": "An exclusive look into our firm & chambers."
  },
  {
    "id": 82,
    "src": "/gallery/img_7ed42fac.jpeg",
    "alt": "Gallery Image 82",
    "category": "Our Team",
    "title": "Our Team Snapshot",
    "desc": "An exclusive look into our our team."
  }
];

const categories = ['All', 'Firm & Chambers', 'Our Team', 'Practice Areas', 'Events'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      {/* Premium Hero Header */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container gallery-hero-content text-center">
          <span className="section-badge fade-in-up">ARCHIVES & MEMORIES</span>
          <h1 className="hero-title fade-in-up delay-1">Raj Law Gallery</h1>
          <div className="gold-divider fade-in-up delay-2 mx-auto mt-4 mb-4"></div>
          <p className="hero-subtitle fade-in-up delay-3 mx-auto">
            A visual journey through our firm's legacy, our esteemed team members, and the core domains where we champion justice.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Section */}
      <section className="gallery-content-section section-padding">
        <div className="container">
          
          {/* Category Filters */}
          <div className="gallery-filters fade-in-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-card fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleImageClick(item)}
              >
                <div className={`gallery-image-wrap ${[82, 81, 79, 78].includes(item.id) ? 'contain-img' : ''}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-category">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-desc-snippet">{item.desc}</p>
                    <div className="view-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="empty-state text-center">
              <p>No images found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox / Modal for Full Size Viewing */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={closeModal}>
          <button className="lightbox-close" onClick={closeModal} aria-label="Close">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedImage.category}</span>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
