class Api::ReservationsController < ApplicationController

    # The show page is the confirmation page seen by the user?
    def show
        @reservation = Reservation.find(params[:id])
        render :show
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
            # render json: ["Reservation Cancelled"]
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
