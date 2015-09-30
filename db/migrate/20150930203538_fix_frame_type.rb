class FixFrameType < ActiveRecord::Migration
  def change
    rename_column :frames, :type, :frame_type
  end
end
