import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'


export const routes = [
    { path: '', component: Home, name: 'home', components: {
        default: Home, 
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User, 
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },

// So user edit is now the name of this route
// and I can now identify this route by name which means that on any page wherever I set up a link, for
// example in user detail, I can now change this to pass an object instead of a string,
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] }
];