import {createBrowserRouter} from 'react-router-dom';
import RootView from '../views/RootView';
import { Ejercicio1 } from '../exercises/Ejercicio1/ejercicio1';
import { Ejercicio2 } from '../exercises/Ejercicio2/ejercicio2';
import { Ejercicio3 } from '../exercises/Ejercicio3/ejercicio3';
import { Ejercicio4view } from '../views/Ejercicio4View/ejercicio4view';
export const router = createBrowserRouter([{
    path: '/',
    element: <RootView/>,
    children: [
        { path: '/ejercicio1', 
        element: <Ejercicio1/>,
        },
        { path: '/ejercicio2',
        element: <Ejercicio2/>,
        },
        { path: '/ejercicio3',
        element: <Ejercicio3/>,
        },
        { path: '/ejercicio4',
        element: <Ejercicio4view/>,
        },
       /* { path: '/ejercicio5',
        element: <Ejercicio5/>,
        },*/

    ]
},
]);