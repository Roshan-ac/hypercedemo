'use client'
import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px'
  } = options;

  const [inView, setInView] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { 
        threshold, 
        root, 
        rootMargin 
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return { ref, inView };
}