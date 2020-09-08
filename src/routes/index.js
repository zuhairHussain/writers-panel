import orderListing from '../views/orderListing/orderListing';
import createOrder from '../views/createOrder/createOrder';
import Login from '../views/login/login';
import Register from '../views/register/register';

let routes = [
    {
        path: "/",
        component: orderListing,
        exact: true,
        private: true
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/sign-up",
        component: Register
    },
    {
        path: "/create-order",
        component: createOrder,
        exact: true,
        private: true
    }
]

export default routes;