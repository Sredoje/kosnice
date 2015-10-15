Rails.application.routes.draw do
  resources :extensions
  resources :hives
  resources :apiaries
  # get 'dashboard/index' as :dashboard
  post 'extensions/set_state' , to: 'extensions#set_state'
  devise_for :users
  root to: "dashboard#index"
end
