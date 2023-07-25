import claroImg from "../Assets/Images/HomePage/cards/claro.png";
import garbanzoFritoImg from "../Assets/Images/HomePage/cards/garbanzo-frito.png";
import kitchenMarketImg from "../Assets/Images/HomePage/cards/kitchen-market.png";
import luminaImg from "../Assets/Images/HomePage/cards/lumina.png";
import mashyaImg from "../Assets/Images/HomePage/cards/mashya.png";
import onzaImg from "../Assets/Images/HomePage/cards/onza.png";
import padKiMaoImg from "../Assets/Images/HomePage/cards/pad-ki-mao.png";
import smokedPizzaImg from "../Assets/Images/HomePage/cards/smoked-pizza.png";
import tigerLillyImg from "../Assets/Images/HomePage/cards/tiger-lilly.png";

type ImageType = string;

interface ImageMapType {
    [key: string]: ImageType;
}

const imageMap: ImageMapType = {
    Claro: claroImg,
    Onza: onzaImg,
    Mashya: mashyaImg,
    Lumina: luminaImg,
    "Kitchen Market": kitchenMarketImg,
    "Tiger Lilly": tigerLillyImg,
    "Pad Ki Mao": padKiMaoImg,
    "Garbanzo Frito": garbanzoFritoImg,
    "Smoked Pizza": smokedPizzaImg,
};

export default imageMap;
