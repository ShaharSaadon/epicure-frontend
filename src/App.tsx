import { AppHeader } from "./Components/AppHeader/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { RestaurantIndex } from "./Pages/RestaurantIndex";
import { RestaurantPage } from "./Pages/RestaurantPage";
import { DishPage } from "./Pages/DishPage";

export const App = () => {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route path="/:restaurant/:dish" element={<DishPage />} />
                <Route path="/:restaurant" element={<RestaurantPage />} />
                <Route path="/restaurants" element={<RestaurantIndex />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <AppFooter />
        </Router>
    );
};
