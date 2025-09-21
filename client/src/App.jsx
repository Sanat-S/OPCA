// App.jsx
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PRCHistory from "./pages/PRCHistory.jsx";
import OptionChainData from "./pages/OptionChainData.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";

const hashRouter = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pcr-history", element: <PRCHistory /> },
      { path: "/optionchain-data", element: <OptionChainData /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={hashRouter} />;
};

export default App;
