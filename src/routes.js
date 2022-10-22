//importing elements from folders
import Home from './views/public/Home.svelte'
import LunchMenuView from './views/public/LunchMenuView.svelte'
import LunchMenuAdmin from './views/admin/LunchMenuAdmin.svelte'
import AdminLayout from './views/admin/AdminLayout.svelte'
//naming the elements urls and where they lead to
const routes = [{
        name: '/',
        component: Home
    },
    {
        name: '/lunch-menu',
        component: LunchMenuView
    },
    {
        name: '/admin/manage-menus',
        component: AdminLayout,
        nestedRoutes: [{
            name: 'index',
            component: LunchMenuAdmin
        }, ],
    },
]
//exporting
export {
    routes
}
