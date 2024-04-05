import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Create, { action as createAction } from "./routes/create";
import Edit from "./routes/edit";
import Home from "./routes/home";
import Invoice, { loader as invoicLoader } from "./routes/invoice";
import Root, { loader as rootLoader } from "./routes/root";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: rootLoader,
      },
      {
        path: "invoice/:invoiceId",
        element: <Invoice />,
        loader: invoicLoader,
      },
      {
        path: "invoice/create",
        element: <Create />,
        action: createAction,
      },
      {
        path: "invoice/:invoiceId/edit",
        element: <Edit />,
        loader: invoicLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
