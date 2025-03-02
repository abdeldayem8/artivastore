import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { lazy, Suspense } from "react";
import Loading from "@components/common/Loading/Loading.jsx";
import Login from "@pages/Login.jsx";
import Register from "@pages/Register.jsx";
import ProductDetails from "@pages/ProductDetails.jsx";
import Profile from "@pages/Profile.jsx";
import Protectedroute from "@routes/ProtectedRoute.jsx";
import Publicroute from "@routes/PublicRoute.jsx";
import Cart from "@pages/Cart.jsx";
import Order from "@pages/Order.jsx";
import NotFound from "@pages/Not-found.jsx";
import OrderConfirm from "@/pages/OrderConfirm.jsx";
const Collection = lazy(() => import("@pages/Collection.jsx"));
const Makeyourtshirt = lazy(() => import("@pages/TshirtDesigner.jsx"));
const Home = lazy(() => import("@pages/Home.jsx"));
import { motion } from "framer-motion";
import FeaturedCollection from "@/components/ecommerce/SomeCollection/FeaturedCollection.jsx";
import MoreSold from "@/components/ecommerce/MoreSold/MoreSold.jsx";
import ErrorBoundary from "@/components/common/ErrorBoudary/ErrorBoundary.jsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const router = createBrowserRouter([
  {
    path: "/artivastore/",
    element: <App />,
    children: [
      {
        path: "/artivastore/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home>
              {/* Featured Collection Section */}
              <motion.div
                className="text-center my-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Our Featured Collection
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <FeaturedCollection />
              </motion.div>

              {/* Best Sellers Section */}
              <motion.div
                className="my-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <MoreSold title="Best Sellers" />
              </motion.div>
            </Home>
          </Suspense>
        ),
      },
      {
        path: "/artivastore/collection",
        element: (
          <Suspense fallback={<Loading />}>
            <Collection />
          </Suspense>
        ),
      },
      {
        path: "/artivastore/collection/:id",

        element: <ProductDetails />,
      },
      {
        path: "/artivastore/maketshirt",
        element: (
          <Suspense fallback={<Loading />}>
            <Makeyourtshirt />
          </Suspense>
        ),
      },
      {
        path: "/artivastore/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/artivastore/login",
        element: (
          <Publicroute>
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          </Publicroute>
        ),
      },
      {
        path: "/artivastore/register",
        element: (
          <Publicroute>
            <Register />
          </Publicroute>
        ),
      },
      {
        path: "/artivastore/profile",
        element: (
          <Protectedroute>
            <Profile />
          </Protectedroute>
        ),
      },
      {
        path: "/artivastore/order",
        element: <Order />,
      },
      {
        path: "/artivastore/orderconfirm",
        element: <OrderConfirm />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
