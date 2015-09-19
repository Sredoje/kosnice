class ChangeExtensionId < ActiveRecord::Migration
  def change
    rename_column :extensions, :apiary_id, :hive_id
  end
end
