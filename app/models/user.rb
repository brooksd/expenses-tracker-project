class User < ApplicationRecord
    has_many :expenses
    has_many :categories, through: :expenses

    #validations for the user model
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
end
