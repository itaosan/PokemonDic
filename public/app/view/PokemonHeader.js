Ext.define('PokeDic.view.PokemonHeader', {
    extend: 'Ext.Container',
    xtype: 'pokemonheader',
    requires: [
        'Ext.field.Search'
    ],

    config: {
        items: [
            {

                xtype: 'toolbar',
                docked: 'top',
                ui: 'green',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: '検索'
                    }
                ]
            },
            {
                xtype: 'panel',
                docked: 'top',
                margin:0,
                padding:0,
                items: [
                    {
                        html: '<iframe src =\"./ad" width=\"100%\" height=\"50\" frameBorder=\"0\" scrolling=\"no\"></iframe>'
                    }
                ]
            }
        ],

        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    }
});
