import claroImg from "../Assets/Images/HomePage/cards/claro.png";
import garbanzoFritoImg from "../Assets/Images/HomePage/cards/garbanzo-frito.png";
import kitchenMarketImg from "../Assets/Images/HomePage/cards/kitchen-market.png";
import luminaImg from "../Assets/Images/HomePage/cards/lumina.png";
import mashyaImg from "../Assets/Images/HomePage/cards/mashya.png";
import onzaImg from "../Assets/Images/HomePage/cards/onza.png";
import padKiMaoImg from "../Assets/Images/HomePage/cards/pad-ki-mao.png";
import smokedPizzaImg from "../Assets/Images/HomePage/cards/smoked-pizza.png";
import tigerLillyImg from "../Assets/Images/HomePage/cards/tiger-lilly.png";
import kabkemImg from "../Assets/Images/Restaurants/kab-kem.png";
import messaImg from "../Assets/Images/Restaurants/messa.png";
import miMaImg from "../Assets/Images/Restaurants/mi-ma.png";
import miMeImg from "../Assets/Images/Restaurants/mi-me.png";
import miMuImg from "../Assets/Images/Restaurants/mi-mu.png";
import nitanThaiImg from "../Assets/Images/Restaurants/nitan-thai.png";
import yaPanImg from "../Assets/Images/Restaurants/ya-pan.png";
import redFarmImg from "../Assets/Images/Restaurants/red-farm.png";
import taMaLaKo from "../Assets/Images/Restaurants/ta-ma-la-ko.png";
type ImageType = string;

interface ImageMapType {
    [key: string]: ImageType;
}

const imageMap: ImageMapType = {
    Claro: claroImg,
    Onza: onzaImg,
    Mashya: mashyaImg,
    Lumina: luminaImg,
    Messa: messaImg,
    "Kitchen Market": kitchenMarketImg,
    "Tiger Lilly": tigerLillyImg,
    "Pad Ki Mao": padKiMaoImg,
    "Garbanzo Frito": garbanzoFritoImg,
    "Smoked Pizza": smokedPizzaImg,
    "Kab Kem": kabkemImg,
    "Nitan Thi": nitanThaiImg,
    "Ya Pan": yaPanImg,
    "MI MA": miMaImg,
    "MI ME": miMeImg,
    "MI MU": miMuImg,
    "Ta Ma La Ko": taMaLaKo,
    "Red Farm": redFarmImg,
};

const mobileNavLinks = [
    { path: "/restaurants", text: "Restaurants" },
    { path: "/chefs", text: "Chefs" },
    { path: "/contact-us", text: "Contact Us" },
    { path: "/term-of-use", text: "Term of Use" },
    { path: "/privacy-policy", text: "Privacy Policy" },
];
const dekstopNavLinks = [
    { path: "/restaurants", text: "Restaurants" },
    { path: "/chefs", text: "Chefs" },
];

enum restaurantFilter {
    ALL = "ALL",
    NEW = "NEW",
    MOST_POPULAR = "MOST_POPULAR",
    OPEN_NOW = "OPEN_NOW",
}
enum lunchfilter {
    BREAKFAST = "Breakfast",
    LANCH = "Lanch",
    DINNER = "Dinner",
}

const filterTypes = [
    { type: "price", label: "Price Range" },
    { type: "distance", label: "Distance" },
    { type: "rating", label: "Rating" },
];

export const linkService = {
    imageMap,
    mobileNavLinks,
    restaurantFilter,
    lunchfilter,
    filterTypes,
    dekstopNavLinks,
};
