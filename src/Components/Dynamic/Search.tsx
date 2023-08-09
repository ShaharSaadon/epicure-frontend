import SearchSvg from "../../Assets/Images/AppHeader/Search.svg";

export const Search = () => {
    return (
        <div className="search-dynamic flex justify-center">
            <img src={SearchSvg} alt="" className="search-icon flex " />
            <input
                type="text"
                className="search-input items-center"
                placeholder="Search for restaurants cuisine, chef"
            />
        </div>
    );
};
