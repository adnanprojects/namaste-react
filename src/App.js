import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from 'react';
import Shimmer from "./components/Shimmer";

const Cart = lazy(() => import('./components/Cart'));

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Suspense fallback={<Shimmer />} > <Cart /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

// root rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);