# coding: utf-8
require 'nkf'

class RemoteController < ApplicationController
  # ひらがなorカナで検索して返す
  #
  # GET /search_pokemon_by_name?query=しな # 実際にはURLエンコードされている
  def find
    #カタカナに変換して検索
    query = NKF.nkf('-wh2', params[:query].to_s.strip)
    #logger.info "query:" + query
    #logger.info "filter:" + filter
    if query.length > 0
      pokemons = Pokemon.find(:all, :conditions => ['name like ? ', "#{query}%"],:order => "id")
    else
      pokemons = Pokemon.all
    end
    #logger.info pokemons.count
    #logger.info pokemons.to_json
    render :text => pokemons.to_json
  end
end