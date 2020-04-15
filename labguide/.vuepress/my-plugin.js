
module.exports = {
    plugins: [
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-table-of-contents'],
        ['vuepress-plugin-nprogress'],
        // ['element-ui'],
        ['vuepress-plugin-element-tabs'],
        // [
        //     'vuepress-plugin-comment',
        //     {
        //         choosen: 'gitalk',
        //         options: {
        //             clientID: 'aea3d94ca7b13dad299c',
        //             clientSecret: '48a6003d2080eb8de0d182180df0cf9730bd7bdb',
        //             repo: 'fiestacomment',
        //             owner: 'watterfall',
        //             admin: ['watterfall'],
        //             distractionFreeMode: false
        //         }
        //     }
        // ],
        [
            'redirect',
            {
                locales: true,
            }
        ],
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                }
            }
        ],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'vuepress-plugin-zooming',
            {
                selector: '.theme-default-content img',
                delay: 800,
                options: {
                    bgColor: 'white',
                    zIndex: 10000,
                },
            },
        ]
    ]
}

