class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        session[user_id] = user.id 
        render json: user, status: :created
    end
    
    def show
        redner json: @current_user
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end 
end
