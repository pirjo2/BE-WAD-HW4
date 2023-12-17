import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";
import Contact from "../views/Contact";



const routes = [{
    path: "/api/allposts",
    name: "AllPosts",
    component: AllPosts,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/api/login')
        } else {
            next();
        }
    }
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
        },{
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
        },
    {
        path: "/api/contact",
        name: "AllPosts",
        component: Contact,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
   /** {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },*/
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
    /**{ //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "AllPosts",
        component: AllPosts,
    }*/
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router