"use client"
// components/ClientSideLenis.js

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ClientSideLenis = () => {
/*   useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      // other Lenis options
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null; // This component does not render anything */
  
      useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      })
};

export default ClientSideLenis;