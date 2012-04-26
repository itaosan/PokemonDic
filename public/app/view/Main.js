Ext.define('PokeDic.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
        'PokeDic.view.PokemonPanel'
    ],

    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            animation: {
                type: 'flip'
            }
        },

        items: [
            {
                xtype: 'pokemonpanel'
            }
        ]

    }
});