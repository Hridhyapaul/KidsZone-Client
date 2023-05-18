import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import RegisterPage from "../Layouts/RegisterPage/RegisterPage";
import LoginPage from "../Layouts/LoginPage/LoginPage";

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
  }
]);

export default router