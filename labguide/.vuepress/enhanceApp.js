import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import colors from 'vuetify/es5/util/colors';
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Vuetify, {
        themes: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
        }
    });
    options.vuetify = new Vuetify({})
};