class SessionsController < ApplicationController
  def new

  end
  def create
  	user = User.authenticate(params[:email], params[:password])
  	if user
  		session[:user_id] = user.id
  		redirect_to root_url, :notice => "Ulogovali ste se"
  	else
  		flash.now.alert = "Nije validan email ili password"
  		render "new"
  	end
  end
  def destroy
  	session[:user_id] = nil
  	redirect_to root_url, :notice => "Izlogovali ste se"
  end
  private
end
