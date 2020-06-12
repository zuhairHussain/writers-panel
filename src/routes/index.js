import Dashboard from '../views/dashboard/dashboard';
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
        path: "/accountdetails",
        component: AccountDetails
    }
]

export default routes;