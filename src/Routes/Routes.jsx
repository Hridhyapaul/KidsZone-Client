import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import RegisterPage from "../Layouts/RegisterPage/RegisterPage";
import LoginPage from "../Layouts/LoginPage/LoginPage";
import AddToyPage from "../Layouts/AddToyPage/AddToyPage";
import Blog from "../Layouts/Blog/Blog";
import ViewDetails from "../Layouts/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/addToys",
    element: <AddToyPage></AddToyPage>
  },
  {
    path: "/blogs",
    element: <Blog></Blog>
  },
  {
    path: '/viewDetails',
    element: <ViewDetails></ViewDetails>
  }
]);

export default router