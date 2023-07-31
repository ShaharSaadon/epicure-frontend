import { linkService } from "../../Services/link.service";

export const OurIcons = () => {
    const { ourIconsData } = linkService;
    return (
        <div className="icons-container flex  flex-column text-center">
            <h1 className="icon-title">THE MEANING OF OUR ICONS:</h1>
            <div className="our-icons flex flex-column items-center ">
                {ourIconsData.map((item, index) => (
                    <div className="icon-type flex flex-column" key={index}>
                        <img src={item.icon} alt={item.type} className="icon" />
                        <p className="icon-name">{item.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
