class Api::ReservationsController < ApplicationController

    # The show page is the confirmation page seen by the user
    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    # The index page is a list of all reservations belonging to the current user
    def index
        @reservations = current_user.reservations
        # @reservations = Reservation.all
        render :index
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation.delete
            render :show
        else
            render json: ["Error, please try again"]
        end
    end

    private
    def reservation_params
        params.require(:reservation).permit(:first_name, :last_name, :date, :time, :party_size, :restaurant_id, :user_id)
    end
end
