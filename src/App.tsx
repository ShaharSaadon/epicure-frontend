import { AppHeader } from "./Components/AppHeader/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <AppFooter />
        </Router>
    );
}

export default App;
