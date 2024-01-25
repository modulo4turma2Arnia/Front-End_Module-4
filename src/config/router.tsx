import { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Opening } from "../pages//opening/opening"
import { Login } from "../pages/login/login"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Opening />
    },
    {
        path: '/login',
        element: <Login />
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