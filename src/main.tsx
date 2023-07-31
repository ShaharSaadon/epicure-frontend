import ReactDOM from "react-dom";
import { App } from "./App.tsx";
import "../src/Assets/Styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
