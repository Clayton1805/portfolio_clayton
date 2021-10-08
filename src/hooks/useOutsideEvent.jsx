import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideEvent(ref, setState, value) {
  useEffect(() => {
    /**
         * Alert if clicked on outside of element
         */
    function isOutside(elementRef, event) {
      return (elementRef.current && !elementRef.current.contains(event.target));
    }

    function handleClickOutside(event) {
      if (ref.length && ref.every((elementRef) => isOutside(elementRef, event))) {
        setState(value);
      } else if (isOutside(ref, event)) setState(value);
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

// referencia: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
