Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #main controllers 
  resources :users, only: [:index, :create, :update ] do
    resources :expenses, only: [:index, :create, :show, :update, :destroy]
  end
  resources :categories, only: [:index]

  #Authentication routes 
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
