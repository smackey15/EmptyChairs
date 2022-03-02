Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create] 
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :show]
  end
  root to: "static_pages#root"
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

