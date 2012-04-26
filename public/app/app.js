
Ext.Loader.setConfig({enabled:true});

Ext.application({
    name: 'PokeDic',
    views : ['Main'],
    controllers: ['MainController'],
    models: ['PokemonModel'],
    stores:['Pokemons'],
    viewport: {
        autoMaximize: true
    },

    icon: {
        57: 'resources/icon-54.png',
        72: 'resources/icon-72.png',
        114: 'resources/icon-114.png'
    },
    launch: function() {
        Ext.create('PokeDic.view.Main');
    }


});