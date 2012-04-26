Ext.define('PokeDic.view.PokemonPanel', {
    extend: 'Ext.Panel',
    xtype: 'pokemonpanel',
    requires: [
        'PokeDic.view.PokemonList'
    ],

    config: {
        layout: 'fit',

        items: [
            {
                xtype: 'pokemonlist'
            }
        ]
    }
});