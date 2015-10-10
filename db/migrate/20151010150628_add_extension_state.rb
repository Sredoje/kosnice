class AddExtensionState < ActiveRecord::Migration
  def change
    add_column :extensions, :state, :string
  end
end
