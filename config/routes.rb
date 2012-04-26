PokemonDic::Application.routes.draw do
  get "welcome/index"

  get "pokemon/all"
  get "remote/find"

  match 'ad' => 'welcome#ad'
  root :to => 'welcome#index'
end
