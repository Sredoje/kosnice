class CreateExtensions < ActiveRecord::Migration
  def change
    create_table :extensions do |t|
      t.integer :order_id
      t.integer :apiary_id

      t.timestamps null: false
    end
  end
end
