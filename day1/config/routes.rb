Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories, only: %i[index create destroy]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :books, only: %i[index create update show destroy]
    end
  end
  
end

