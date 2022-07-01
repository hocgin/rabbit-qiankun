import {apps as microApps} from './qiankun';

export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      ...(microApps || []).map(app => ({
        path: `/${app.name}`, microApp: `${app.name}`
      })),
      {path: '*', component: '@/pages/404'},
    ],
  },
];
