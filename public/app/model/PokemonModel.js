Ext.define('PokeDic.model.PokemonModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'no', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'type1', type: 'string' },
            { name: 'type2', type: 'string' },
            { name: 'hp', type: 'int' },
            { name: 'spd', type: 'int' },
            { name: 'atk', type: 'int' },
            { name: 'def', type: 'int' },
            { name: 'spatk', type: 'int' },
            { name: 'spdef', type: 'int' },
            { name: 'spd', type: 'int' }
        ],
        proxy: {
            type: 'ajax',
            url: 'remote/find',
            reader: {
                type: 'json'
            }
        }
    }
});