# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.destroy_all
Expense.destroy_all


puts "💀 Seeding categories 🔥"

c1 = Category.create(category:"Groceries")
c2 = Category.create(category:"Entertainment")
c3 = Category.create(category:"Travel")
c4 = Category.create(category:"Personal")
c5 = Category.create(category:"Food&Drink")
c6 = Category.create(category:"Education")
c7 = Category.create(category:"Housing")
c8 = Category.create(category:"Transportation")
c9 = Category.create(category:"Utilities")
c10 = Category.create(category:"Insurance")
c11 = Category.create(category:"Medical")
c12 = Category.create(category:"Savings")
c13 = Category.create(category:"Others")

puts "💀 Seeding done 🔥"

puts "💀 Seeding expenses 🔥"

Expense.create(amount:200, user_id: 1, category_id: c1.id)
Expense.create(amount:1200, user_id: 1, category_id:c7.id)
Expense.create(amount:50, user_id: 1, category_id: c2.id)
Expense.create(amount:200, user_id: 1, category_id: c4.id)
Expense.create(amount:80, user_id: 1, category_id: c5.id)
Expense.create(amount:120, user_id: 1, category_id: c8.id)
Expense.create(amount:230, user_id: 1, category_id: c9.id)
Expense.create(amount:150, user_id: 1, category_id: c12.id)

puts "💀 Seeding done 🔥"