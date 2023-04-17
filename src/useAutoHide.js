import { useEffect } from 'react';

export default function useAutoHide(ref, show, setIsOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        setIsOpen(false);
        return;
      }
    }

    // Add event listeners only if 'show' is true
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('scroll', handleClickOutside);
    } else {
      // Remove event listeners if 'show' is false
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    }

    // Clean up by removing event listeners when unmounting
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    };
  }, [ref, setIsOpen, show]);
}
