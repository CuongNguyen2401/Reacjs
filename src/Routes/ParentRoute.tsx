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
import { ErrorPage } from "../GUI/User/Components/ErrorPage";

// Define your routes
const ParentRouter = createBrowserRouter([
    {
        path: "admin",
        element: <MainDashBoard />,
        children: [
            {
                path: "",
                element: <Products />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "*",
                element: <ErrorPage />,
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
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

export const ParentRoute = () => {
    return (
        <RouterProvider router={ParentRouter} />
    );
};

export default ParentRoute;
