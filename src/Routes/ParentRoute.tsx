import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Products from "../GUI/Admin/Pages/Products";
import { MainDashBoard } from './../GUI/Admin/Layouts/MainDashBoard';
import { UserLayout } from './../GUI/User/Layouts/UserLayout';
import { Category } from "../GUI/User/Pages/Category";
import { HomeUser } from "../GUI/User/Pages/HomeUser";
import { Detail } from "../GUI/User/Pages/Detail";

// Define your routes
const ParentRouter = createBrowserRouter([
    {
        path: "admin",
        element: <MainDashBoard />, // This can be a layout component if needed
        children: [
            {
                path: "",
                element: <Products />,
            },
            {
                path: "products",
                element: <Products />,
            },

        ],
    },
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <HomeUser />,
            },
            {
                path: "/category",
                element: <Category />,
            },
            {
                path: "/detail/",
                element: <Detail />,
            },
        ],
    },
]);

// Use the RouterProvider to pass in the router configuration
export const ParentRoute = () => {
    return (
        <RouterProvider router={ParentRouter} />
    );
};

export default ParentRoute;
