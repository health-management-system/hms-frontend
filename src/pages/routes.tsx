import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup"
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    }
]);

export default router;
