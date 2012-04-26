Ext.define('PokeDic.view.PokemonList', {
    extend: 'Ext.dataview.List',
    xtype: 'pokemonlist',
    requires: [
        'PokeDic.view.PokemonHeader'
    ],

    config: {
        ui:'round',
        store:'Pokemons',
        itemTpl: '{id}：{name}',
        items: [
            {
                xtype : 'pokemonheader',
                docked: 'top'
            }

        ]
    }
});