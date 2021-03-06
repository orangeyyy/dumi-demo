const componentMenus = [
  {
    title: '基础组件',
    children: ['Text', 'Foo'],
  },
];

export default {
  title: 'orange-design',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  history: {
    type: 'browser',
  },
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
    },
  },
  sass: {
    // 默认值 Dart Sass，如果要改用 Node Sass，可安装 node-sass 依赖，然后使用该配置项
    // implementation: require('node-sass'),
    // 传递给 Dart Sass 或 Node Sass 的配置项，可以是一个 Function
    sassOptions: {},
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/comp',
    },
    {
      title: 'github',
      path: 'https://github.com/orangeyyy',
    },
  ],
  menus: {
    '/comp': componentMenus.map((item) => ({
      title: item.title,
      children: item.children,
    })),
  },
  outputPath: 'dist',
};
