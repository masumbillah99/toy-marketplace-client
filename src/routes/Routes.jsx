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
import AllToys from "../pages/Toys/All Toys/AllToys";
import ToySingle from "../pages/Home/SingleToy/ToySingle";
import MyToys from "../pages/Toys/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/shared/Blog/Blog";
import Update from "../pages/Toys/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="categories/0" />,
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
        path: "/",
        element: <Navigate to="categories/0" />,
      },
      {
        path: "/categories/:id",
        element: <ToysCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <SingleToyLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0" />,
      },
      {
        path: "/carToys/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carToys/${params.id}`),
      },
      {
        path: "/postToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/update/:id",
      //   element: <Update />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/update/${params.id}`),
      // },
      {
        path: "/allPostToys",
        element: (
          <PrivateRoute>
            <AllToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/allPostToys/:id",
        element: <ToySingle />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPostToys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
