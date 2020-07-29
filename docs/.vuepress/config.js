module.exports = {
     // 网站标题
    title: '记录点滴',
    // 网站描述
    description: 'Just playing around', 
    logo: '/logo.png',
    // 导航栏
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/' },
        // { text: 'Foo', link: '/foo/' },
        // { text: 'External', link: 'https://baidu.com' },
        // {
        //   text: 'Languages',
        //   ariaLabel: 'Language Menu',
        //   items: [
        //     { text: 'Chinese', link: '/language/chinese/' },
        //     { text: 'Japanese', link: '/language/japanese/' }
        //   ]
        // }
      ],
      // 最后更新时间
      lastUpdated: '上次更新', // string | boolean
      // 
      sidebar: 'auto',
      // sidebarDepth: 2,
      // 侧边栏 https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
      // 注意：侧边栏的导航是分组的，下面的配置方式是两个组，'/guide/' 会对应 前面的分组
      sidebar: {
        '/guide/':[         
            {
                title: '指南',   // 一级菜单名称
                collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                children: [
                    ['', '介绍'],  //菜单名称为'子菜单1'，跳转至/guide/README.md
                ]
            },
        ],
        '/foo/':[         
          {
              title: '测试菜单1',   // 一级菜单名称
              collapsable: false, // false为默认展开菜单, 默认值true是折叠,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                  ['', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/foo/README.md
                  ['one', '子菜单2'],
                  ['a-1备战面试', '备战面试']
              ]
          },
          // {
          //     title: '测试菜单2',
          //     collapsable: false, 
          //     children: [
          //         ['test2.md', '子菜单1']
          //     ]
          // }
      ],
    },
  
    smoothScroll: true,
      
    }
    
  }