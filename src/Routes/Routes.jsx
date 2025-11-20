import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import PrivateRoutes from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import Login from "../components/Authentications/Login/Login";
import Register from "../components/Authentications/Register/Register";
import FoodDetails from '../pages/FoodDetails';
import Error404 from '../pages/Error404';
import ManageFoods from '../components/ManageFoods/ManageFoods';
import MyFood from '../pages/MyFood';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,

    children: [
      {
        index: true,
        element: <Home />,
        loader: async () =>
          fetch(
            "https://plate-share-server-ver2.vercel.app/api/featured-foods"
          ).then(res => res.json()),
      },

      {
        path: "/available-foods",
        element: <AvailableFoods />,
        loader: async () => {
          const res = await fetch(
            "https://plate-share-server-ver2.vercel.app/api/foods/availables"
          );
          if (!res.ok) throw new Error("Failed to fetch foods");
          return res.json();
        },
      },

      {
        path: "/add-food",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },

      {
        path: "/manage-foods",
        element: (
          <PrivateRoutes>
            <ManageFoods />
          </PrivateRoutes>
        ),
      },

      {
        path: "/my-food-requests",
        element: (
          <PrivateRoutes>
            <MyFood />
          </PrivateRoutes>
        ),
      },

      {
        path: "/foods/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
      },

      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
