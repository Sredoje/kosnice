module HivesHelper
	# Return true if value is selected
	def is_selected current_value, passed_value
		current_value.eql? passed_value
	end
end
