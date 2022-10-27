import { createBrowserRouter } from "react-router-dom";
import CourseContent from "../layout/CourseContent";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <CourseContent></CourseContent>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
          {
            path: "/",
            loader: () =>
              fetch("https://assignment10-backend.vercel.app/courses"),
            element: <Courses></Courses>,
          },
          {
            path: "/courses",
            loader: () =>
              fetch("https://assignment10-backend.vercel.app/courses"),
            element: <Courses></Courses>,
          },
          {
            path: "/course/:id",
            loader: ({ params }) =>
              fetch(
                `https://assignment10-backend.vercel.app/course/${params.id}`
              ),
            element: <CourseDetails></CourseDetails>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
  {
    path: "/checkout/:id",
    loader: ({ params }) =>
      fetch(`https://assignment10-backend.vercel.app/course/${params.id}`),
    element: (
      <PrivateRoute>
        <CheckOut></CheckOut>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default routes;
