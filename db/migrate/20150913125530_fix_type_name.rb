class FixTypeName < ActiveRecord::Migration
  def change
    rename_column :hives, :type, :hive_type
  end
end
