import { AppHeader } from "./Components/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Restaurants } from "./Pages/Restaurants";
import { RestaurantPage } from "./Pages/RestaurantPage";

function App() {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route
                    path="/restaurants/:restaurantName"
                    element={<RestaurantPage />}
                />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <AppFooter />
        </Router>
    );
}

export default App;
