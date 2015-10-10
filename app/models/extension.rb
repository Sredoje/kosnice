class Extension < ActiveRecord::Base
	belongs_to :hive
	has_many :frames, :dependent => :destroy
end
