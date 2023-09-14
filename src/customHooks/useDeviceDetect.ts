import { useMediaQuery } from "react-responsive";

export const useDeviceDetect = () => {
    const isDesktop = useMediaQuery({ query: "(min-width: 480px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

    return { isDesktop, isMobile };
};
