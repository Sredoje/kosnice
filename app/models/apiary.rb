class Apiary < ActiveRecord::Base
	belongs_to :user
	has_many :hives, :dependent => :destroy
end
