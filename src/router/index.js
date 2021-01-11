import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '@/views/login/index.vue';
import logon from '@/views/logon/index.vue';
import main from '@/views/main/index.vue';
import notFound from '@/views/notFound/index.vue';

import Cookie from '@/assets/js/cookie';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/logon',
    component: logon,
  },
  {
    path: '/main',
    component: main,
  },
  {
    path: '/notFound',
    component: notFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 定位登录
  if (to.path === '/') {
    next('/login');
    return;
  }
  // 找不到页面
  if (to.matched.length === 0) {
    next('/notFound');
    return;
  }
  // 登陆拦截
  if (to.matched[0].path === '/main') {
    const username = Cookie.getCookie('username');
    if (username) {
      next();
    } else {
      next('/login');
    }
  }
  next();
});

export default router;
