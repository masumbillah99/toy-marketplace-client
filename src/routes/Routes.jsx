import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import SingleToyLayout from "../layouts/SingleToyLayout";
import SingleToy from "../pages/Home/SingleToy/SingleToy";
import ToysCard from "../pages/Home/ToysCard/ToysCard";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddToys from "../pages/Toys/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/category/:id",
        element: <ToysCard />,
        loader: ({ params }) =>
          fetch(
            `https://toy-ass11-server-side.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <SingleToyLayout />,
    children: [
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-ass11-server-side.vercel.app/carToys/${params.id}`
          ),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
