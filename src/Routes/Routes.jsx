import RootLayout from "../Layout/RootLayout";
import { createBrowserRouter } from "react-router";
import AvailableFoods from "../pages/AvailableFoods";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import Login from "../components/Authentications/Login/Login";
import Register from "../components/Authentications/Register/Register";
import AuthLayout from "../pages/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/available-foods",
        Component: AvailableFoods,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },    
    ],
  },
    {
    path: '/auth',
    Component: AuthLayout,
    
    children: [
      {
        path: '/auth/register',
        Component: Register,
      },
      {
        path: '/auth/login',
        Component: Login,
      },
    ],
  },

]);
