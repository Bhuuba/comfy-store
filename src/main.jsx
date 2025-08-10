import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
// order
import "./index.css";

import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster position="top-center" richColors />
  </Provider>
);
