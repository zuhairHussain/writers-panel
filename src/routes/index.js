import orderListing from '../views/orderListing/orderListing';
import createOrder from '../views/createOrder/createOrder';
import Login from '../views/login/login';
import Register from '../views/register/register';

let routes = [
    {
        path: "/dashboard",
        component: orderListing,
        exact: true,
        private: true
    },
    {
        path: "/dashboard/login",
        component: Login
    },
    {
        path: "/dashboard/sign-up",
        component: Register
    },
    {
        path: "/dashboard/create-order",
        component: createOrder,
        exact: true,
        private: true
    }
]

export default routes;