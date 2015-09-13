class CreateApiaries < ActiveRecord::Migration
  def change
    create_table :apiaries do |t|
      t.string :name
      t.string :location
      t.string :hive_type
      t.belongs_to :user, index:true

      t.timestamps null: false
    end
  end
end
