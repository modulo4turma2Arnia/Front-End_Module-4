import { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Opening } from "../pages//opening/opening"
import { Home } from "../pages/home/home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Opening />
    },
    {
        path: '/home',
        element: <Home />
    },
    {

    },
    {

    },
])

export const Router = () => {
    return (
        <>
            <Suspense>
                <RouterProvider router={router} />
            </Suspense>
        </>
    )
} 