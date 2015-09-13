class CreateHives < ActiveRecord::Migration
  def change
    create_table :hives do |t|
      t.integer :number
      t.string :type
      t.belongs_to :apiary, index:true
      t.integer :order_id

      t.timestamps null: false
    end
  end
end
