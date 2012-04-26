Ext.define('PokeDic.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: [
        'PokeDic.view.Main',
        'PokeDic.view.PokemonDetail'
    ],

    config: {
        refs: {
            main: 'mainview',
            pokemonDetail:'pokemondetail'

        },

        control: {
            'pokemonlist': {
                itemtap: 'onListTap'
            },
            'searchfield': {
                action: 'onSearch'
            },
            'pokemondetail toolbar button': {
                tap: function() {
                    this.getMain().setActiveItem(0);
                }
            }
        }

    },
    init: function() {
    },
    onListTap: function(dataview, index, target, record) {
        var view = this.getMain();

        if(!this.getPokemonDetail()){
            view.add(Ext.create('PokeDic.view.PokemonDetail'));
        }else{
            this.getPokemonDetail().show();
        }
        var detail = this.getPokemonDetail();
        detail.setData(record.data);
        view.setActiveItem(1);
    },
    onSearch: function(field) {
        var store = Ext.getStore('Pokemons');
        store.clearFilter();
        store.filter('name',field.getValue(),true);
        store.setPageSize(27);
        store.load({
            params: {
                query: field.getValue()
            }
        });
    }
});