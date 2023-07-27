interface HamburgerProps {
    isHeaderOpen: boolean;
    toggleHeader: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
    isHeaderOpen,
    toggleHeader,
}) => {
    return (
        <div
            className={`hamburger ${isHeaderOpen ? "open" : ""}`}
            onClick={toggleHeader}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
