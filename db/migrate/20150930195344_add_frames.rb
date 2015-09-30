class AddFrames < ActiveRecord::Migration
  def change
    create_table :frames do |t|
      t.string :type
      t.belongs_to :extension, index:true

      t.timestamps null: false
    end
  end
end