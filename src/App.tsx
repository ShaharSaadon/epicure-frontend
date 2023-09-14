import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppHeader } from "./Components/AppHeader/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Orders } from "./Pages/Orders";
import { ChefPage } from "./Pages/ChefPage";
import ErrorBoundary from "./Pages/ErrorBaundary";

const RestaurantIndex = lazy(() => import("./Pages/RestaurantIndex"));
const RestaurantPage = lazy(() => import("./Pages/RestaurantPage"));
const DishPage = lazy(() => import("./Pages/DishPage"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const Loader = lazy(() => import("./Components/Dynamic/Loader"));

export const App = () => {
    return (
        <Router>
            <AppHeader />
            <ErrorBoundary>
                <Suspense fallback={"Loading..."}>
                    <Routes>
                        <Route
                            path="/restaurants/:restaurantId/:dishId"
                            element={<DishPage />}
                        />
                        <Route
                            path="/restaurants/:restaurantId"
                            element={<RestaurantPage />}
                        />
                        <Route path="/chefs" element={<ChefPage />} />
                        <Route
                            path="/restaurants"
                            element={<RestaurantIndex />}
                        />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Loader />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>

            <AppFooter />
        </Router>
    );
};
