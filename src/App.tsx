import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppHeader } from "./Components/AppHeader/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Loader } from "./Components/Dynamic/Loader";

const RestaurantIndex = lazy(() => import("./Pages/RestaurantIndex"));
const RestaurantPage = lazy(() => import("./Pages/RestaurantPage"));
const DishPage = lazy(() => import("./Pages/DishPage"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

export const App = () => {
    return (
        <Router>
            <AppHeader />
            <Suspense fallback={<Loader></Loader>}>
                <Routes>
                    <Route
                        path="/restaurants/:restaurantId/:dishId"
                        element={<DishPage />}
                    />
                    <Route
                        path="/restaurants/:restaurantId"
                        element={<RestaurantPage />}
                    />
                    <Route path="/restaurants" element={<RestaurantIndex />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <AppFooter />
        </Router>
    );
};
