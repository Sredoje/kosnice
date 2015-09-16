class Hive < ActiveRecord::Base
	belongs_to :apiary

	def self.hive_types
		['RV','FR8','FR10']
	end
end
