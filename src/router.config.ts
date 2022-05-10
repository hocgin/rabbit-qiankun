export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {path: '/', component: '@/pages/index'},
      {path: '/demo', component: '@/pages/demo'},
      {path: '/ssr', component: '@/pages/ssr'},
      {path: '/rabbit-dear', microApp: 'rabbit-dear'},
      {path: '*', component: '@/pages/404'},
    ],
  },
];
