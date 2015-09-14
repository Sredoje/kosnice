class AddLocationColumn < ActiveRecord::Migration
  def change
    add_column :apiaries, :lon, :integer
    rename_column :apiaries, :location, :lat
  end
end