import App from "app/app";
import { store } from "app/store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}>, React uygulamanızda Redux store’u tüm bileşenlere erişilebilir hale getirir. Yani, uygulamadaki herhangi bir bileşen, store’daki verilere ulaşabilir ve action dispatch edebilir. Kısacası, Redux ile React arasında bağlantı kurar. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);