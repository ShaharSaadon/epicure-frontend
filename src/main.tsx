import { Provider } from "react-redux";
import { App } from "./App.tsx";
import { store } from "./store";

import ReactDOM from "react-dom";

import "../src/Assets/Styles/global.scss";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
