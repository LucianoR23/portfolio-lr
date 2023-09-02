import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ui/pages/ErrorPage";
import { AboutMe, Home, Knowledge, Projects } from "../views";
import { Welcome } from "../views/Welcome";
import { PortfolioLayout } from "../layout/PortfolioLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Welcome />,
    },
    {
        path: "/home",
        errorElement: <ErrorPage />,
        element: <Home />
    },
    {
        path: "/about",
        errorElement: <ErrorPage />,
        element: <AboutMe />,
    },
    {
        path: '/projects',
        errorElement: <ErrorPage />,
        element: <Projects />
    },
    {
        path: '/knowledge',
        errorElement: <ErrorPage />,
        element: <Knowledge />
    },
    {
        path: '/*',
        errorElement: <ErrorPage />,
        element: <Navigate to='/home' />
    },
])