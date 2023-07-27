import { Search } from "../Dynamic/Search";

interface SearchProps {
    isSearchOpen: boolean;
    toggleSearch: () => void;
}

export const SearchHeader: React.FC<SearchProps> = ({
    isSearchOpen,
    toggleSearch,
}) => {
    return (
        <div
            className={`search ${
                isSearchOpen ? "open" : ""
            } flex  items-center justify-center `}
            onClick={toggleSearch}
        >
            <Search />
        </div>
    );
};
