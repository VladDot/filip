'use client'

import { useEffect, useRef, useState } from 'react';

interface ILazyVideoProps {
    src: string ; 
    className: string; 
  }

const LazyVideo = ({ src, className }: ILazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.25 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      autoPlay
      muted
      loop
      className={className}
      controls
    />
  );
};

export default LazyVideo;
