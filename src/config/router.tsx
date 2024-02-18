import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Opening } from "../pages//opening/opening";
import { Home } from "../pages/home/home";
import { Profile } from "../pages/profile/profile";
import { Product } from "../pages/product/product";
import { ProductRescuedCard } from "../components/ui/productRescuedCard/productRescuedCard";

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
    path: "/success-rescue/:id",
    element: <ProductRescuedCard />
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
