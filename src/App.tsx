import { useState } from "react";
import "../src/Assets/Styles/global.scss";
import { AppHeader } from "./Components/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AppHeader />
            <HomePage />
            <AppFooter />
        </>
    );
}

export default App;
