import orderListing from '../views/orderListing/orderListing';
import AccountDetails from '../views/accountDetails/accountDetails';
import Login from '../views/login/login';

let routes = [
    {
        path: "/dashboard",
        component: orderListing,
        exact: true
    },
    {
        path: "/dashboard/login",
        component: Login
    },
    {
        path: "/dashboard/create-order",
        component: AccountDetails,
        exact: true
    }
]

export default routes;