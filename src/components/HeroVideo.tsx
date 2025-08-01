"use client";

import React, { useState, useEffect } from "react";
import { RevealFx } from "@once-ui-system/core";

export function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    // Show video container after 2 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <RevealFx translateY={8} delay={0.25} flex={2} horizontal="center">
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        height: '450px',
        perspective: '1000px',
        padding: '-50px',
        opacity: showVideo && videoLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '9% center',
            borderRadius: '20px',
            transform: 'rotateY(-15deg) rotateX(5deg)',
            transformStyle: 'preserve-3d',
            boxShadow: videoLoaded ? `
              0 25px 80px rgba(0, 0, 0, 0.4),
              0 15px 40px rgba(0, 0, 0, 0.3),
              0 5px 20px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            ` : 'none',
            border: '1px solid var(--neutral-alpha-weak)',
            opacity: videoLoaded ? '0.9' : '0',
            filter: 'brightness(0.95) contrast(1.1)',
            transition: 'box-shadow 0.8s ease-out, opacity 0.8s ease-out'
          }}
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Additional shadow layer for more depth */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          right: '-30px',
          bottom: '-30px',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.08))',
          borderRadius: '20px',
          zIndex: -1,
          transform: 'rotateY(-15deg) rotateX(5deg)',
          filter: 'blur(20px)',
          opacity: videoLoaded ? '0.7' : '0',
          transition: 'opacity 0.8s ease-out'
        }} />
      </div>
    </RevealFx>
  );
}