require.config({
    baseUrl: 'js',
    paths: {
        'main': 'main',
        'pixi': 'pixi/pixi',
        'vector': 'vector',
        'particle': 'particle',
        'flow': 'flow'
    }
});

require(['main']);
