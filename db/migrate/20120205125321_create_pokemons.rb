class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.integer :no
      t.string :name
      t.integer :hp
      t.integer :atk
      t.integer :def
      t.integer :spatk
      t.integer :spdef
      t.integer :spd
      t.string :type1
      t.string :type2

      t.timestamps
    end
  end
end
