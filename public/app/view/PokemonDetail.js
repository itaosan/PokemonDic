Ext.define('PokeDic.view.PokemonDetail', {
    extend: 'Ext.Container',
    xtype: 'pokemondetail',

    config: {
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'green',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        id: 'BackButton'
                    }
                ]
            }
        ],
        tpl: [
            '<ul>',
            '<li>No.{no}</li>',
            '<li>名前:{name}</li>',
            '<li>タイプ:{type1}/{type2}</li>',
            '<li>こうげき:{atk}</li>',
            '<li>ぼうぎょ:{def}</li>',
            '<li>とくこう:{spatk}</li>',
            '<li>とくぼう:{spdef}</li>',
            '<li>すばやさ:{spd}</li>',
            '</ul>'
        ]
    }
});