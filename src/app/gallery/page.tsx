"use client";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const IMAGES_PER_PAGE = 20;

// Function to determine grid span based on simulated dimensions
const getSpan = (width: number, height: number) => {
  if (height > width) return "large"; 
  if (width > height) return "wide";  
  return "small";                     
};

// Generate 60 photos with varied aspect ratios
const allPhotos = Array.from({ length: 60 }).map((_, i) => {
  const types = [
    { w: 800, h: 800 },   // Square
    { w: 800, h: 1200 },  // Portrait
    { w: 1200, h: 800 },  // Landscape
  ];
  const dimension = types[i % 3]; 
  const span = getSpan(dimension.w, dimension.h);

  return {
    id: i + 1,
    src: `https://picsum.photos/seed/${i + 100}/${dimension.w}/${dimension.h}`,
    alt: `Clinical Excellence — Gallery Item ${i + 1}`,
    span: span,
    width: dimension.w,
    height: dimension.h
  };
});

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof allPhotos[0] | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedPhoto]);

  const totalPages = Math.ceil(allPhotos.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentPhotos = allPhotos.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return (
    <div className="gallery-page">
      <Navigation onBookAppointment={openAppointmentModal} />
      
      <header className="gallery-hero">
        <div className="container">
          <p className="overline">Clinical Legacy</p>
          <h1>Medical <em className="accent">Gallery</em></h1>
          <p className="hero-desc">
            Experience our world-class infrastructure and patient-centric design through our visual clinical heritage.
          </p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="container">
          <div className="aspect-grid">
            {currentPhotos.map((photo) => (
              <div 
                key={photo.id}
                className={`gallery-item ${photo.span}`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="image-wrapper">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="image-overlay">
                    <Maximize2 size={24} />
                    <span>View Detail</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              <ChevronLeft size={18} /> Previous
            </button>
            <div className="page-numbers">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* THEMED LIGHTBOX */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div 
            className="lightbox-container" 
            onClick={e => e.stopPropagation()}
            style={{ 
              maxWidth: selectedPhoto.width > selectedPhoto.height ? '800px' : '500px' 
            }}
          >
            <button className="close-btn" onClick={() => setSelectedPhoto(null)}>
              <X size={20} />
            </button>
            <div className="image-holder">
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            </div>
            <div className="image-caption">
              <h3>{selectedPhoto.alt}</h3>
              <p>Burlington Clinic — Specialized Medical Care</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-page {
          background: var(--blue-xlight);
          min-height: 100vh;
        }

        .gallery-hero {
          padding: 180px 0 80px;
          text-align: center;
          background: linear-gradient(135deg, var(--text) 0%, var(--blue2) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(60, 143, 140, 0.2) 0%, transparent 70%);
        }

        .overline {
          color: var(--blue3);
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          margin-bottom: 1.25rem;
          display: block;
          position: relative;
          z-index: 1;
        }

        h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .accent { color: var(--blue3); font-style: italic; }

        .hero-desc {
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .gallery-section { padding: 80px 0 120px; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

        .aspect-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 240px;
          grid-auto-flow: dense;
          gap: 25px;
        }

        .gallery-item {
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 4px solid var(--white);
          box-shadow: var(--shadow-md);
          transition: all 0.4s var(--ease);
          position: relative;
          background: var(--white);
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--blue3);
        }

        .gallery-item.large { grid-row: span 2; }
        .gallery-item.wide { grid-column: span 2; }

        .image-wrapper { width: 100%; height: 100%; position: relative; }
        .image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--ease); }

        .image-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(45, 109, 107, 0.85);
          color: white;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 15px; opacity: 0; transition: all 0.3s ease;
        }

        .gallery-item:hover .image-overlay { opacity: 1; }
        .gallery-item:hover img { transform: scale(1.1); }

        .pagination {
          margin-top: 80px; display: flex; justify-content: center; align-items: center; gap: 20px;
        }

        .page-btn {
          padding: 10px 24px; border-radius: 50px; border: 1px solid var(--blue);
          background: var(--white); color: var(--blue); font-weight: 700; cursor: pointer; transition: all 0.2s;
        }

        .page-btn:hover:not(:disabled) { background: var(--blue); color: white; }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        .page-num {
          width: 46px; height: 46px; border-radius: 50%; border: 1px solid var(--surface2);
          background: var(--white); font-weight: 700; cursor: pointer; color: var(--muted);
        }

        .page-num.active { background: var(--blue); border-color: var(--blue); color: white; box-shadow: 0 8px 20px rgba(60, 143, 140, 0.3); }

        /* THEMED LIGHTBOX */
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(10, 26, 25, 0.96);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-container {
          position: relative;
          background: var(--white);
          border-radius: 24px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 60px rgba(60, 143, 140, 0.4);
          width: 95%;
          animation: modalIn 0.4s var(--ease);
        }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .image-holder {
          width: 100%;
          max-height: 70vh;
          overflow: hidden;
          border-radius: 16px;
          background: var(--text);
        }

        .image-holder img { width: 100%; height: 100%; object-fit: contain; display: block; }

        .image-caption {
          padding: 25px 15px 15px;
          text-align: center;
        }

        .image-caption h3 { margin: 0; color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.4rem; font-weight: 800; }
        .image-caption p { margin: 6px 0 0; color: var(--blue2); font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.75rem; }

        .close-btn {
          position: absolute;
          top: 25px; right: 25px;
          background: var(--white); border: none; color: var(--text);
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .close-btn:hover { transform: rotate(90deg); }

        @media (max-width: 768px) {
          .aspect-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 200px; }
          .gallery-item.large { grid-row: span 2; }
          .gallery-item.wide { grid-column: span 2; }
        }

        @media (max-width: 480px) {
          .aspect-grid { grid-template-columns: 1fr; }
          .gallery-item.large, .gallery-item.wide { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </div>
  );
}
