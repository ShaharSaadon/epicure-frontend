import closeSvg from "../../Assets/Images/AppHeader/close.svg";
export const Wrapper = () => {
    return (
        <div className="header-wrapper">
            <img src={closeSvg} alt="x" className="icon" />
        </div>
    );
};
