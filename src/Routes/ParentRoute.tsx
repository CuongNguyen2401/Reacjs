import {
    createBrowserRouter,
    RouterProvider,
    useParams,
} from "react-router-dom";
import Products from "../GUI/Admin/Pages/ProductsManage";
import { MainDashBoard } from './../GUI/Admin/Layouts/MainDashBoard';
import { UserLayout } from './../GUI/User/Layouts/UserLayout';
import { Category } from "../GUI/User/Pages/CategoryPage";
import { HomeUser } from "../GUI/User/Pages/HomeUserPage";
import { Detail } from "../GUI/User/Pages/DetailPage";
import { ErrorPage } from "../GUI/User/Components/ErrorPage";
import { Login } from "../GUI/User/Components/Login";
import { SignUp } from "../GUI/User/Components/SignUp";




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
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "register",
        element: <SignUp />
    },

]);

export const ParentRoute = () => {
    return (
        <RouterProvider router={ParentRouter} />
    );
};

export default ParentRoute;
