import { useCallback, useState } from 'react';

export const useShowModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [isShowing]);

  return { isShowing, toggle };
};
