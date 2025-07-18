'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ToggleButton, useTheme } from '@once-ui-system/core';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, [theme]);

  const icon = currentTheme === 'dark' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  const handleThemeToggle = () => {
    setIsAnimating(true);
    
    if (buttonRef.current) {
      buttonRef.current.classList.add('animating');
    }

    setTimeout(() => {
      setTheme(nextTheme);
    }, 50);

    setTimeout(() => {
      setIsAnimating(false);
      if (buttonRef.current) {
        buttonRef.current.classList.remove('animating');
      }
    }, 300);
  };

  return (
    <div 
      ref={buttonRef}
      className="theme-toggle-animation"
    >
      <ToggleButton
        prefixIcon={icon}
        onClick={handleThemeToggle}
        aria-label={`Switch to ${nextTheme} mode`}
        disabled={isAnimating}
      />
    </div>
  );
};
