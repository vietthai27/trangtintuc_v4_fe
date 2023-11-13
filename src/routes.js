import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import TaoBaiBaoPage from "./pages/TaoBaiBaoPage"
import BaiBaoPage from "./pages/BaiBaoPage"
import TrangChu from "./pages/TrangChu"


const routes = [
    {
        path: "/",
        element: <TrangChu />
    },
    {
        path: "/taobaibao",
        element: <TaoBaiBaoPage />
    },
    {
        path: "/baibao",
        element: <BaiBaoPage />
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

