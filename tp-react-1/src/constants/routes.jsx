import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import { Ejercicio1 } from "../exercises/Ejercicio1/ejercicio1";
import { Ejercicio2 } from "../exercises/Ejercicio2/ejercicio2";
import { Ejercicio3 } from "../exercises/Ejercicio3/ejercicio3";
import { Ejercicio4View } from "../views/Ejercicio4View/ejercicio4view";
import Ejercicio6View from "../views/Ejercicio6View/ejercicio6view";
import { Ejercicio7View } from "../views/Ejercicio7View/ejercicio7View";
import Ejercicio8View from "../views/Ejercicio8View/ejercicio8View";
import { Ejercicio9View } from "../views/Ejercicio9View/ejercicio9View";
import Ejercicio10View from "../views/Ejercicio10View/ejercicio10View";
import Ejercicio11View from "../views/Ejercicio11View/ejercicio11View";
import Ejercicio13View from "../views/Ejercicio13View/ejercicio13View";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      { path: "/ejercicio1", element: <Ejercicio1 /> },
      { path: "/ejercicio2", element: <Ejercicio2 /> },
      { path: "/ejercicio3", element: <Ejercicio3 /> },
      { path: "/ejercicio4", element: <Ejercicio4View /> },
      { path: "/ejercicio6", element: <Ejercicio6View /> },
      { path: "/ejercicio7", element: <Ejercicio7View /> },
      { path: "/ejercicio8", element: <Ejercicio8View /> },
      { path: "/ejercicio9", element: <Ejercicio9View /> },
      { path: "/ejercicio10", element: <Ejercicio10View /> },
      { path: "/ejercicio11", element: <Ejercicio11View /> },
      { path: "/ejercicio13", element: <Ejercicio13View /> },
      { path: "/ejercicio14", element: <Ejercicio14View /> },
    ],
  },
]);
