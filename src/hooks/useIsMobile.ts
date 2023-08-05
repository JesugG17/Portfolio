import { useEffect, useState } from "react"

export const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResizeScreen = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeScreen);

        return () => {
            window.removeEventListener('resize', handleResizeScreen);
        }
    }, []);

    return width <= 769;
}
