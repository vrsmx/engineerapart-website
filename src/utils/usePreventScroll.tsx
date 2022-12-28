import * as React from 'react';

interface UsePreventScroll {
  isOpen: boolean;
}
export const usePreventScroll = ({isOpen}: UsePreventScroll) => {
  React.useEffect(() => {
    isOpen && document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;
};
