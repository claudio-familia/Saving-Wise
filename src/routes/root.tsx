import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AUTH_ROUTES } from "./core/auth";

export const router = createBrowserRouter([
    ...AUTH_ROUTES,
    {
      path: "/",
      element:<App />,
    },
]);