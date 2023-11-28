import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css"
import App from "./App.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
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
        element: <Login />,
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
