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
        },
        {
          path: '/user',
          component: './user/index',
        },
        {
          path: '/order',
          component: './order/index',
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
