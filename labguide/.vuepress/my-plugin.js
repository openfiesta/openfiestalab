
module.exports = {
    plugins: [
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-table-of-contents'],
        ['vuepress-plugin-nprogress'],
        [
            "@kawarimidoll/tailwind", 
            { 
                tailwindConfig: { important: true } 
            }
        ],
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // set `platform` rather than `api`
                platform: 'github',

                // all other options of Vssue are allowed
                owner: 'watterfall',
                repo: 'fiestacomment',
                clientId: 'aea3d94ca7b13dad299c',
                clientSecret: '48a6003d2080eb8de0d182180df0cf9730bd7bdb',
            }
        ],
        ['vuepress-plugin-element-tabs'],
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

