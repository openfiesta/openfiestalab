
module.exports = {
    plugins: [
        ['@vuepress/back-to-top'],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'aea3d94ca7b13dad299c',
                    clientSecret: '48a6003d2080eb8de0d182180df0cf9730bd7bdb',
                    repo: 'openfiesta.space',
                    owner: 'watterfall',
                    admin: ['watterfall'],
                    distractionFreeMode: false
                }
            }
        ]
    ]
}