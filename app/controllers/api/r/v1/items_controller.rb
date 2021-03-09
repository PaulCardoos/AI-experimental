module Api 
    module R
        module V1
            class ItemsController < ApplicationController
                skip_forgery_protection   
                def index 
                    items = Item.all
                    render json: items.to_json
                end
                def create

                    item = Item.new(item_params)
                    if item.save()
                        render json: item.to_json
                    else 
                        render json: {error: item.errors.messages}, status: 422
                    end 
                end
                def show
                    items = Item.find_by(id: params[:id])
                    render json: items.to_json

                end
                def category
                    items = Item.find_by(category: params[:category])
                    render json: items.to_json
                end

                private 
                def item_params
                    params.require(:item).permit(:name, :location, :description, :category, :image_url)
                end

            end
        end
    end
end