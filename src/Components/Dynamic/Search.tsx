import SearchSvg from "../../Assets/Images/AppHeader/Search.svg";

export const Search = () => {
    return (
        <div className="search-dynamic flex">
            <img src={SearchSvg} alt="" className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search for restaurants cuisine, chef"
            />
        </div>
    );
};
