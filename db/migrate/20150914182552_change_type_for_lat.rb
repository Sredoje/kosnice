class ChangeTypeForLat < ActiveRecord::Migration
    def change
    	change_column :apiaries, :lat, :integer
  	end
end
