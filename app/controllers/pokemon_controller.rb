# coding: utf-8
class PokemonController < ApplicationController
  def all
    @pokemons = Pokemon.all

  end
end
