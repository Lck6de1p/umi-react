// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页'
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的'
        },
        {
          path: '/user/edit',
          component: './user/edit/index',
          title: '设置用户'
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单'
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索'
        },
        {
          path: '/observer',
          component: './observer',
          title: 'observer'
        },
        {
          path: '/house',
          component: './house',
          title: '详情'
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'react',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  cssLoaderOptions: {
    localIdentName:'[local]', 
  }
};
