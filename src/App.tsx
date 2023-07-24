import { AppHeader } from "./Components/AppHeader";
import { AppFooter } from "./Components/AppFooter";
import { HomePage } from "./Pages/HomePage";
import "../src/Assets/Styles/global.scss";
function App() {
    return (
        <>
            <AppHeader />
            <HomePage />
            <AppFooter />
        </>
    );
}

export default App;
