import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../Blogs/Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])