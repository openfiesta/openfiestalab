module.exports = {
    title: 'Open FIESTA Lab',
    head: [
        ['link', { rel: 'icon', href: '/image/logoof.png' }],
        ['link', { rel: 'stylesheet', href: `https://fonts.cat.net/css?family=Roboto:100,300,400,500,700,900|Material+Icons` }],
        ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.1.0/css/all.css` }]
    ],
    base: '/',
    description: 'Lab Guidance of Open FIESTA',
    dest: 'public',
    locales: {
        '/': {
            lang: 'en-US'
        },
        '/zh/': {
            lang: 'zh-CN'
        }
    },
    plugins: [
        require('./my-plugin.js')
    ],
    themeConfig:{
        logo: '/image/logoof.png',
        prevLinks: false,
        nextLinks: false,
        repo: 'https://github.com/openfiesta/openfiestalab',
        repoLabel: 'Github',
        docsDir: 'labguide',
        docsBranch: 'master',
        editLinks: true,
        locales: {
            '/': {
                nav:[
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'About', link: '/about/' },
                    // { text: 'Github', link: 'https://github.com/openfiesta/openfiestalab', target: '_self', rel: '' }
                ],
                displayAllHeaders: true,
                label: 'English',
//                lastUpdated: 'Last Updated',
                sidebar: [
                    ['/introduction', 'Introduction'],
                    {
                        title: 'Labs',
                        path: '/labs/',
                        children: [
                            ['/labs/bio', 'BIO-X Lab(J213)'],
                            ['/labs/iid', 'Design + Space(J211)'],
                            ['/labs/stu', 'Studio(J208)'],
                            ['/labs/machine', 'Machine Room(J201)']
                        ]
                    },
                    ['/learning', 'Learning'],
                    ['/projects', 'Project'],
                    ['/toolbox', 'Toolbox'],
                    ['/events', 'Event'],
                    ['/residency', 'Residency'],
                    ['/club', 'Club'],
                    ['/link', 'Link'],
                ]
            },
            '/zh/': {
                nav: [
                    { text: '主页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' },
                    { text: '关于', link: '/zh/about/' },
                ],
                label: '简体中文',
//                lastUpdated: '最近更新时间',
                displayAllHeaders: true,
                sidebar: [
                    ['/zh/introduction', '简介'],
                    {
                        title: '实验室',
                        path: '/zh/labs/',
                        children: [
                            ['/zh/labs/bio', '生命健康交叉实验室 BIO-X Lab（J213）'],
                            ['/zh/labs/iid', '创新设计实验室 Design + Space（J211）'],
                            ['/zh/labs/stu', '摄影室 Studio(J208)'],
                            ['/zh/labs/machine', '机械加工间 Machine Room(J201)']
                        ]
                    },
                    ['/zh/learning', '学习'],
                    ['/zh/projects', '项目'],
                    ['/zh/toolbox', '工具箱'],
                    ['/zh/events', '活动'],
                    ['/zh/residency', '入驻项目'],
                    ['/zh/club', '社团协会'],
                    ['/zh/link', '友情链接'],
                ]
            }
        }
    }
}
