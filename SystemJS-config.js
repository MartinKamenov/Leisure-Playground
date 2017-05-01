SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'main': './scripts/main.js',
        'router': './scripts/router.js',
        'templates': './scripts/templates.js',
        'handlebars': './handlebars-v4.0.5.js',
        'jQuery': './jQuery/jquery.js',
        'usersOptions': './scripts/usersOptions.js',
        'search': './scripts/search.js'
    }
});

System.import('main');