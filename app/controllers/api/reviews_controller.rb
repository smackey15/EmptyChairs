class Api::ReviewsController < ApplicationController
    
    def show
        @review = Review.find(params[:id])
        render :show
    end

    def index
        @reviews = Review.all 
        render :index
    end
    
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:nickname, :body, :overall, :food, :service, :ambience, :restaurant_id, :user_id)
    end
end
