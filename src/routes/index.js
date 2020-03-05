import Dashboard from '../views/dashboard/dashboard';
import AccountBilling from '../views/accountBilling/accountBilling';
import AccountDetails from '../views/accountDetails/accountDetails';
import Login from '../views/login/login';

let routes = [
    {
        path: "/",
        component: Dashboard,
        exact: true
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/billing",
        component: AccountBilling
    },
    {
        path: "/accountdetails",
        component: AccountDetails
    }
]

export default routes;