import { Search } from "../Dynamic/Search";

interface SearchHeaderProps {
    isSearchOpen: boolean;
    toggleSearch: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
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
