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
import spicyImg from "../Assets/Images/HomePage/icons/spicy.svg";
import veganImg from "../Assets/Images/HomePage/icons/vegan.svg";
import vegitarianImg from "../Assets/Images/HomePage/icons/vegitarian.svg";
import YossiShitritImg from "../Assets/Images/HomePage/yossi-shitrit.png";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store/index";
import { Action } from "redux";
type ImageType = string;

enum restaurantFilter {
    ALL = "ALL",
    NEW = "NEW",
    MOST_POPULAR = "MOST POPULAR",
    OPEN_NOW = "OPEN NOW",
}
enum lunchfilter {
    BREAKFAST = "Breakfast",
    LANCH = "Lanch",
    DINNER = "Dinner",
}
interface ImageMapType {
    [key: string]: ImageType;
}
const imageMap: ImageMapType = {
    Claro: claroImg,
    Onza: onzaImg,
    Mashya: mashyaImg,
    Lumina: luminaImg,
    Messa: messaImg,
    spicy: spicyImg,
    vegan: veganImg,
    vegitarian: vegitarianImg,
    "Yossi Shitrit": YossiShitritImg,
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
const upperMobileNavLinks = [
    { path: "/restaurants", text: "Restaurants" },
    { path: "/chefs", text: "Chefs" },
];
const lowerMobileNavLinks = [
    { path: "/contact-us", text: "Contact Us" },
    { path: "/term-of-use", text: "Term of Use" },
    { path: "/privacy-policy", text: "Privacy Policy" },
];
const dekstopNavLinks = [
    { path: "/restaurants", text: "Restaurants" },
    { path: "/chefs", text: "Chefs" },
];
const dynamicQuestions = [
    {
        title: "Choose a side",
        type: "radio",
        options: ["White Bread", "Sticky rice"],
        idQuestion: "side",
    },
    {
        title: "Changes",
        type: "checkbox",
        options: ["Whithout peanuts", "Sticky Less spicy"],
        idQuestion: "changes",
    },
];
const filterTypes = [
    { type: "price", label: "Price Range" },
    { type: "distance", label: "Distance" },
    { type: "rating", label: "Rating" },
];
const ourIconsData = [
    {
        type: "Spicy",
        icon: spicyImg,
    },
    {
        type: "Vegitarian",
        icon: vegitarianImg,
    },
    {
        type: "Vegan",
        icon: veganImg,
    },
];
export const linkService = {
    imageMap,
    upperMobileNavLinks,
    lowerMobileNavLinks,
    restaurantFilter,
    lunchfilter,
    filterTypes,
    dekstopNavLinks,
    ourIconsData,
    dynamicQuestions,
};

export interface Restaurant {
    _id: string;
    type: "restaurant";
    name: string;
    chef?: iChef;
    stars: number;
    openHoures: string[];
    dishes?: Dish[];
    faundationDate: Date;
}
export interface Dish {
    _id: string;
    type: "dish";
    name: string;
    special?: string;
    ingredients: string;
    price?: number;
    restaurantId: string;
    dishType?: string;
    signature: boolean;
}
export interface Order {
    _id: string;
    date: Date;
    restaurantId: number;
    price: number;
}
export interface User {
    _id: string;
    email: string;
    password: string;
    orders: Order[];
}
export interface Credentials {
    email: string;
    password: string;
}
export interface iDynamicQuestion {
    title: string;
    type: string;
    options: string[];
    idQuestion: string;
}
export interface LoggedInUser {
    _id: string;
    email: string;
    orders: Order[];
}
export interface iChef {
    _id: string;
    name: string;
    description: string;
    associatedRestaurants: Restaurant[];
    restaurants: Restaurant[];
}
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
