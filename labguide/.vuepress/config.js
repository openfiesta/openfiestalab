module.exports = {
    title: 'Open FIESTA Lab',
    head: [
        ['link', { rel: 'icon', href: './public/logo.png' }]
    ],
    description: 'Lab Guide',
    dest: 'public',
    locales: {
        '/': { 
            lang: 'en-US'
        },
        '/zh/': { 
            lang: 'zh-CN'
        }
    },
    themeConfig:{
        locales: {
            '/': {
                nav:[
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'About', link: '/about/' }
                ],
                displayAllHeaders: true,
                label: 'English',
                lastUpdated: 'Last Updated',
                sidebar: [
                    ['/introduction', 'Introduction'],
                    {
                        title: 'labs',   
                        path: '/labs/',      
                        children: [
                            ['/labs/bio', 'BIO-X Lab'],
                            ['/labs/iid', 'Design + Space']
                        ]
                    },
                    ['/learning', 'Learning'],
                    ['/project', 'Projects'],
                    ['/toolbox', 'Toolbox']
                ]   
            },
            '/zh/': {
                nav: [
                    { text: '主页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' },
                    { text: '关于', link: '/zh/about/' }
                ],
                label: '简体中文',
                lastUpdated: '最近更新时间',
                displayAllHeaders: true,
                sidebar: [
                    ['/introduction', '简介'],
                    {
                        title: 'labs',
                        path: '/zh/labs/',
                        children: [
                            ['/zh/labs/bio', '生命健康交叉实验室（BIO-X Lab）'],
                            ['/zh/labs/iid', '创新设计实验室（Design + Space）']
                        ]
                    },
                    ['/learning', '学习'],
                    ['/project', '项目'],
                    ['/toolbox', '工具箱']
                ]
            }
        }
    }
}