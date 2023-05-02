import { useRef, useEffect } from 'react';

function useIsMounted(): boolean {
  const isMount = useRef<boolean>(false);

  useEffect(() => {
    isMount.current = true;
  }, []);

  return isMount.current;
}

export default useIsMounted;
