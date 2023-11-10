import LoginPage from "./pages/LoginPage"
import BaiBao from "./component/BaiBao"
import TaoBaiBao from "./component/TaoBaiBao"
import SignUpPage from "./pages/SignUpPage"


const routes = [
    {
        path: "/taobaibao",
        element: <TaoBaiBao />
    },
    {
        path: "/baibao",
        element: <BaiBao />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpPage />
    }

]

export default routes

