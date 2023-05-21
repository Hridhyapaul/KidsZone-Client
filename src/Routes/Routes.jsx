import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import RegisterPage from "../Layouts/RegisterPage/RegisterPage";
import LoginPage from "../Layouts/LoginPage/LoginPage";
import AddToyPage from "../Layouts/AddToyPage/AddToyPage";
import Blog from "../Layouts/Blog/Blog";
import ViewDetails from "../Layouts/ViewDetails/ViewDetails";
import Details from "../Layouts/ViewDetails/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyToysPage from "../Layouts/MyToys/MyToysPage";
import AllToysPage from "../Layouts/AllToysPage/AllToysPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    path: "/viewDetails",
    element: <ViewDetails></ViewDetails>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://kids-zone-server-indol.vercel.app/product/${params.id}`)
      }
    ]
  },
  {
    path: 'myToys',
    element: <MyToysPage></MyToysPage>,
  },
  {
    path: 'allToys',
    element: <AllToysPage></AllToysPage>
  }
]);

export default router