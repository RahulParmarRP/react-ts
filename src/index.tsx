import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./components/dashboard/dashboard";
import * as serviceWorker from "./serviceWorker";
import IconProfile from "./components/icons/profile";
import ProductListTable from "./common/product-list-table/product-list-table";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));
ReactDOM.render(<IconProfile />, document.getElementById("my-content"));
      ReactDOM.render(
        <ProductListTable />,
        document.getElementById("product-list-table")
      );

//ReactDOM.render(<MainContent />, document.getElementById('main-content'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
