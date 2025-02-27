import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ViewHome } from "../features/home";
import ContactForm from "../features/shared/components/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewHome />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "*",
    element: <div>NO EXISTE ESTA RUTA</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
