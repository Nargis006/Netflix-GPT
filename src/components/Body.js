import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browser";
import Login from "./Login";

export default function Body() {
  const appRouter = new createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browser",
      element: <Browse />,
    },
    {
      path: "/Login",
      element: <Login />,
    }
]);
  return (
    <RouterProvider router={appRouter}/>
  );
}
