Rails.application.routes.draw do
  resources :extensions
  resources :hives
  resources :apiaries
  # get 'dashboard/index' as :dashboard

  devise_for :users
  root to: "dashboard#index"
end
