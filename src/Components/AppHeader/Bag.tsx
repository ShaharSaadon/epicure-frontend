import BagImage from "../../Assets/Images/AppHeader/Bag.svg";

interface BagProps {
    isBagOpen: boolean;
    toggleBag: () => void;
}

export const Bag: React.FC<BagProps> = ({ isBagOpen, toggleBag }) => {
    return (
        <div className={`bag ${isBagOpen ? "open" : ""}`} onClick={toggleBag}>
            <img src={BagImage} alt="Bag" />
            <h2>YOUR BAG IS EMPTY</h2>
        </div>
    );
};
