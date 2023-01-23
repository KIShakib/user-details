import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Main/Home/Home";
export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    }
])