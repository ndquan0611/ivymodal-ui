import config from '~/config';
import { Home, Cartegory, Login, Register } from '~/pages';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.cartegory,
        component: Cartegory,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
