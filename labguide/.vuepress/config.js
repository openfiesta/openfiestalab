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
                    {
                        text: 'Space & Lab', 
                        items: [
                            { text: 'Lab Guidance', link: '/labs/'},
                            { text: 'Idea Cafe', link: '/labs/idea/' },
                            { text: 'BIO-X Lab', link: '/labs/bio/' },
                            { text: 'Design + Space', link: '/labs/iid/' },
                            { text: 'Studio', link: '/labs/stu/' },
                            { text: 'Machine Room', link: '/labs/machine/' }
                        ]
                    },
                    {
                        text: 'Join us',
                        items: [
                            { text: 'Residency Program', link: '/residency/' },
                            { text: 'Event & Workshop', link: '/events/' },
                            { text: 'Student Club', link: '/club/' },
                            { text: 'Master Program', link: 'http://www.fiesta.tsinghua.edu.cn/admissions' }
                        ]
                    },
                    { text: 'Project', link: '/projects/'},
                    {
                        text: 'About',
                        items: [
                            // { text: 'Open FIESTA', link: 'http://www.fiesta.tsinghua.edu.cn/' }, 
                            // { text: 'Tsinghua SIGS', link: 'https://www-en.sz.tsinghua.edu.cn/'},
                            { text: 'About the Lab', link: '/about/' }
                        ]
                    }
                ],
                displayAllHeaders: true,
                label: 'English',
//                lastUpdated: 'Last Updated',
                sidebar: [
                    {
                        title: 'Labs',
                        path: '/labs/',
                        children: [
                            ['/labs/idea', 'Idea Cafe(J212)'],
                            ['/labs/bio', 'BIO-X Lab(J213)'],
                            ['/labs/iid', 'Design + Space(J211)'],
                            ['/labs/stu', 'Studio(J208)'],
                            ['/labs/machine', 'Machine Room(J201)']
                        ]
                    },
                    ['/learning', 'Learning'],
                    ['/projects', 'Project'],
                    ['/toolbox', 'Toolbox'],
                    ['/link', 'Friendly Link']
                ]
            },
            '/zh/': {
                nav: [
                    { text: '主页', link: '/zh/' },
                    {
                        text: '空间 & 实验室',
                        items: [
                            { text: '空间指南', link: '/zh/labs/' },
                            { text: '创意交互空间', link: '/zh/labs/idea/' },
                            { text: '生命健康交叉实验室', link: '/zh/labs/bio/' },
                            { text: '创新设计实验室', link: '/zh/labs/stu/' },
                            { text: '机械加工间', link: '/zh/labs/machine/' }
                        ]
                    },
                    {
                        text: '加入我们',
                        items: [
                            { text: '入驻项目', link: '/zh/residency/' },
                            { text: '开放活动', link: '/zh/events/' },
                            { text: '学生社团', link: '/zh/club/' },
                            { text: '硕士项目', link: 'http://www.fiesta.tsinghua.edu.cn/cn/admissions' }
                        ]
                    },
                    { text: '项目', link: '/zh/projects/'},
                    {
                        text: '关于',
                        items: [
                            // { text: 'Open FIESTA', link: 'http://www.fiesta.tsinghua.edu.cn/cn/' },
                            // { text: '清华大学深圳国际研究生院', link: 'https://www.sigs.tsinghua.edu.cn/'},
                            { text: '关于实验室', link: '/zh/about/' }
                        ]
                    },
                ],
                label: '简体中文',
//                lastUpdated: '最近更新时间',
                displayAllHeaders: true,
                sidebar: [
                    {
                        title: '实验室',
                        path: '/zh/labs/',
                        children: [
                            ['/zh/labs/idea', '创新交互空间 Idea Cafe（J212)'],
                            ['/zh/labs/bio', '生命健康交叉实验室 BIO-X Lab（J213）'],
                            ['/zh/labs/iid', '创新设计实验室 Design + Space（J211）'],
                            ['/zh/labs/stu', '摄影室 Studio(J208)'],
                            ['/zh/labs/machine', '机械加工间 Machine Room(J201)']
                        ]
                    },
                    ['/zh/learning', '学习'],
                    ['/zh/projects', '项目'],
                    ['/zh/toolbox', '工具箱'],
                    ['/zh/link', '友情链接']
                ]
            }
        }
    }
}
