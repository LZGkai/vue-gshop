import Msite from '../pages/Msite/Msite.vue'
import ORder from '../pages/ORder/ORder.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default [
    {
        path: "/msite",
        component: Msite
    },
    {
        path: "/order",
        component: ORder
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/",
        redirect: '/msite'
    },
]