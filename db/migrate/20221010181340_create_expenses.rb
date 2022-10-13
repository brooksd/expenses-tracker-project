class CreateExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.decimal :amount
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
