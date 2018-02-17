'use strict';

const paths = {
    src: {
        root:   './',
        html:   './src/html',
        static: './src/static',
        js:     './src/static/js',
        stylus: './src/static/stylus'
    },
    dst: {
        root:   '../mail-portal-app',
        html:   '../mail-portal-app/templates',
        static: '../mail-portal-app/static',
        js:     '../mail-portal-app/static/js',
        css:    '../mail-portal-app/static/css'
    }
};

module.exports = {
  paths: paths
};
