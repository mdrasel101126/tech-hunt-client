import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);

export default routes;
