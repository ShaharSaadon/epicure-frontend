import SearchImage from "../../Assets/Images/AppHeader/Search.svg";

interface SearchProps {
    isSearchOpen: boolean;
    toggleSearch: () => void;
}

export const Search: React.FC<SearchProps> = ({
    isSearchOpen,
    toggleSearch,
}) => {
    return (
        <div
            className={`search ${isSearchOpen ? "open" : ""}`}
            onClick={toggleSearch}
        >
            <img src={SearchImage} alt="Search" />
            <h2>Search Box</h2>
        </div>
    );
};
