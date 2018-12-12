import Home from './components/Home.vue'
import Header from './components/Header.vue'

// by having it in this asynchronous function here which has to resolve before it gets executed, webpack
// is only doing this if we actually need that file and it will create appropriate bundles to be loaded
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));

    }
    // , 'user'
    );
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));

    }
    // , 'user'
    );
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));

    }
    // , 'user'
    );
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));

    }
    // , 'user'
    );
};

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
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
            // next(false); abort
            // next('/path'); that path including params and so on to redirect,
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    { path: '/redirect-me', redirect:'/user'},
    { path: '/redirect-me-object', redirect:{ name: 'userEdit'} },
    // catch all redirect for all routes
    { path: '*', redirect: '/'}
];   