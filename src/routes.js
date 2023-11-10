import BaiBao from "./component/BaiBao"
import TaoBaiBao from "./component/TaoBaiBao"


const routes = [
    {
        path: "/taobaibao",
        element: <TaoBaiBao />
    },
    {
        path: "/baibao",
        element: <BaiBao />
    }

]

export default routes

