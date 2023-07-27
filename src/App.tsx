import { AppHeader } from "./Components/AppHeader/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { RestaurantIndex } from "./Pages/RestaurantIndex";
import { RestaurantPage } from "./Pages/RestaurantPage";

export const App = () => {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route
                    path="/restaurants/:restaurantName"
                    element={<RestaurantPage />}
                />
                <Route path="/restaurants" element={<RestaurantIndex />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <AppFooter />
        </Router>
    );
};
