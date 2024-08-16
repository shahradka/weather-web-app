import { useEffect, useMemo, useState } from "react";
function useMediaQuery(query: string) {
  const mediaQuery = useMemo<MediaQueryList | null>(() => {
      return window.matchMedia(query);
  }, [query]);

  const [match, setMatch] = useState(mediaQuery?.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery?.matches);
    mediaQuery?.addEventListener("change", onChange);

    return () => mediaQuery?.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match || mediaQuery?.matches;
}

export default useMediaQuery;
