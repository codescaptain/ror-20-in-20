Rails.application.routes.draw do
  resources :todos
  root 'todos#index'
  get '/completed/:id', to: 'completed#update', as: 'completed_update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
