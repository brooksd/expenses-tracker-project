class Category < ApplicationRecord
    has_many :expenses
    has many :users, through: :expenses
end
