class Hive < ActiveRecord::Base
	belongs_to :apiary
	has_many :extensions
	def self.hive_types
		['RV','FR8','FR10']
	end
end
