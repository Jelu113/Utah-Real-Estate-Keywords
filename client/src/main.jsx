import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";
import Home from "./pages/Home";
import Login2 from "./pages/Login2.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import CreateKeyword from "./components/CreateKeyword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login2 />,
      },
      {
        path: "/create-user",
        element: <CreateUser />
      },
      {
        path: "/create-keyword",
        element: <CreateKeyword />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
