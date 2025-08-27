"use client";

import React, { useState } from "react";
import { RevealFx, Icon } from "@once-ui-system/core";

export function HeroVideo() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gifKey, setGifKey] = useState(0);

  // Reset states when component mounts to avoid conflicts
  React.useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setIsModalOpen(false);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    // Force GIF restart by changing the key
    setGifKey(prev => prev + 1);
  };
  
  return (
    <>
      <RevealFx translateY={8} delay={0.25} flex={1} horizontal="center">
        <div 
          onClick={openModal}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '400px',
            aspectRatio: '3/2',
            maxWidth: '600px',
            margin: '0 auto',
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
            border: '2px solid var(--neutral-alpha-medium)',
            transition: 'all 0.3s ease-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.2)';
            e.currentTarget.style.borderColor = 'var(--neutral-alpha-medium)';
          }}
        >
          {/* Loading State */}
          {!imageLoaded && !imageError && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '16px',
              color: 'var(--neutral-weak)',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid var(--neutral-alpha-weak)',
                borderTop: '3px solid rgba(139, 92, 246, 0.8)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                Loading terminal demo...
              </span>
            </div>
          )}

          {/* Error State */}
          {imageError && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '16px',
              color: 'var(--neutral-weak)',
              textAlign: 'center',
              padding: '20px'
            }}>
              <Icon name="warning" size="l" style={{ color: 'rgba(139, 92, 246, 0.8)' }} />
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Terminal Demo
                </div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  Click to view IPCrawler in action
                </div>
              </div>
            </div>
          )}

          {/* Thumbnail Image */}
          <img
            src="/videos/ipcrawler-io-demo.gif"
            alt="IPCrawler Terminal UI Demo - Real-time reconnaissance automation"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? '1' : '0',
              transition: 'opacity 0.6s ease-out',
            }}
          />
          
          {/* Always visible content overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            zIndex: imageLoaded ? 1 : 2
          }}>            
            {/* Demo Label */}
            <div style={{
              padding: '12px 24px',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ marginBottom: '4px' }}>
                🎬 Terminal Demo
              </div>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: '400', 
                opacity: 0.9,
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                See IPCrawler in action
              </div>
            </div>
          </div>
        </div>
      </RevealFx>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease-out',
              zIndex: 10000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Icon name="close" size="m" style={{ color: 'white' }} />
          </button>

          {/* Full-screen GIF */}
          <img
            key={gifKey}
            src={`/videos/ipcrawler-io-demo.gif?v=${gifKey}`}
            alt="IPCrawler Terminal UI Demo - Full View"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 25px 100px rgba(0, 0, 0, 0.5)',
              animation: 'scaleIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}