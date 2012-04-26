Ext.define('PokeDic.store.Pokemons', {
    extend: 'Ext.data.Store',
    requires: [
        'PokeDic.model.PokemonModel'
    ],
    config:{
        model: 'PokeDic.model.PokemonModel',
        totalCount: 100,
        autoLoad: true,
        remoteFilter: true
    },
    query:""
});