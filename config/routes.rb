Rails.application.routes.draw do
  resources :apiaries
  # get 'dashboard/index' as :dashboard

  devise_for :users
  root to: "dashboard#index"
end
