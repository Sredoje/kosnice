class ChangeDefaultState < ActiveRecord::Migration
  def change
  	change_column :extensions, :state, :string, :default => "good"
  end
end
