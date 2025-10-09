import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from '../Pages/Home'
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";
import AppsDetails from "../components/AppsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/AppsDetails/:id",
        Component: AppsDetails,
      },
    ]
  },

]);

export default router;
