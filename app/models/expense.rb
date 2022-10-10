class Expense < ApplicationRecord
    belongs_to :user
    belongs_to :category

    #orders the expenses in desc by default
    default_scope { order(amount: :desc)}
end
