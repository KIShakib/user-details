import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./pages/Layouts/MainLayouts";
import Home from "./pages/Main/Home/Home";
export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayouts />,
        children: [{
            path: "/",
            element: <Home />
        }]
    }
])