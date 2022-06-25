import config from '~/config';
import Cartegory from '~/pages/Cartegory';
import Home from '~/pages/Home';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.cartegory,
        component: Cartegory,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
