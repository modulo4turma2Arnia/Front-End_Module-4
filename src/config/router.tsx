import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Opening } from "../pages//opening/opening";
import { Home } from "../pages/home/home";
import { Profile } from "../pages/profile/profile";
import { Product } from "../pages/product/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Opening />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export const Router = () => {
  return (
    <>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}
