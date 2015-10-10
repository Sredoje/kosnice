class Hive < ActiveRecord::Base
	belongs_to :apiary
	has_many :extensions, :dependent => :destroy
	def self.hive_types
		['RV','FR8','FR10']
	end
end
