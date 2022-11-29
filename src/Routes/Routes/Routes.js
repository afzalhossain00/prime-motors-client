import { createBrowserRouter } from "react-router-dom";
import DashboardLoayout from "../../Layout/DashboardLoayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Home/Product/Product";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/category/:categoryId',
                element: <PrivateRoutes><Product></Product></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://prime-motors-server.vercel.app/category/${params.categoryId}`)
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
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLoayout></DashboardLoayout></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/addproduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>,
            },
            {
                path: '/dashboard/myproducts',
                element: <AdminRoute><MyProducts></MyProducts></AdminRoute>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://prime-motors-server.vercel.app/bookings/${params.id}`)
            },

        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])