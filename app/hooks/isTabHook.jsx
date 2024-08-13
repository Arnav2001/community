import { useState, useEffect } from 'react';

function useIsTabletView() {
    const [isTabletView, setIsTabletView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

        const handleMediaQueryChange = (e) => {
            setIsTabletView(e.matches);
        };

        // Initial check
        setIsTabletView(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addListener(handleMediaQueryChange);

        // Cleanup
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    return isTabletView;
}

export default useIsTabletView;
