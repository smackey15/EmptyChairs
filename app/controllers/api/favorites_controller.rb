class Api::FavoritesController < ApplicationController
    def show 
        @favorite = Favorite.find(params[:id])
        render :show
    end

    def index 
        @favorites = current_user.favorites
        # @favorites = Favorite.all
        render :index
    end
    
    def create 
        @favorite = Favorite.new(favorite_params)
        if @favorite.save 
            render :show 
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
    end

    private 

    def favorite_params
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end

end
