import { useEffect } from 'react';

export default function useAutoHide(ref, setIsOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
        const hamburger = document.getElementById('hamburger');
        if (hamburger && hamburger.contains(event.target)) {
          return;
        }

        setIsOpen(false);
        return;
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    };
  }, [ref, setIsOpen]);
}
