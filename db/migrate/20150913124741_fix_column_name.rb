class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :hives, :apirary_id, :apiary_id
  end
end
