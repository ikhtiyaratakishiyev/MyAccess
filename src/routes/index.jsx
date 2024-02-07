import {createBrowserRouter} from "react-router-dom";
import HomePage from "../Pages/homePage";
import AboutPage from '../Pages/aboutPage'



export const routes = createBrowserRouter([
    {
       path: "/",
       element: <HomePage/>
    },
    {
        path: '/aboutPage',
        element: <AboutPage/>
    }
])