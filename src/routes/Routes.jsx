import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import SingleToy from "../pages/Home/SingleToy/SingleToy";
import ToyModal from "../pages/Home/ToysCard/ToyModal";
import ToysCard from "../pages/Home/ToysCard/ToysCard";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

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
      {
        path: "/toys/:id",
        element: <SingleToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carToys/${params.id}`),
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
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);

export default router;
