import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Orders, DragdropBoard, Chart } from "./screens";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DragdropBoard />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
