import { useEffect, useState, useCallback } from 'react';

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

export const useWindowDimensions = () => {
    const initWindowDimensions = getWindowDimensions();
    const [windowSize, setWindowSize] = useState(initWindowDimensions);

    const resizeCallback = useCallback(() => {
        setWindowSize(getWindowDimensions());
    }, [setWindowSize]);

    // checks to see if the window is being resized and sets the window state
    useEffect(() => {
        window.addEventListener('resize', resizeCallback);
        return () => window.removeEventListener('resize', resizeCallback);
    }, [resizeCallback]);

    return windowSize;
};

export const useImage = fileName => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                const res = await import(`../assets/${fileName}`);
                setImage(res.default);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getImage();
    }, [fileName]);

    return {
        loading,
        error,
        image,
    };
};

export const changeTheme = currTheme => {
    const changeHelper = {
        dark: 'light',
        light: 'dark',
    };
    return changeHelper[currTheme];
};
