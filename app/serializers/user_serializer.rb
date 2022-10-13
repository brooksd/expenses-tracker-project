class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username

  has_many :expenses
  has_many :categories
end
