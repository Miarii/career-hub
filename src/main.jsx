import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
        loader: () => fetch("../jobs.json"), // do not load all data. load only the one you needed
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"), // do not load all data. load only the one you needed
      },
      {
        path: "/statistics",
        element: <h2>Statistics</h2>,
      },
      {
        path: "/blogs",
        element: <h2>Blog</h2>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
