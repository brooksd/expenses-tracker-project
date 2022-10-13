class AddDateToExpenses < ActiveRecord::Migration[6.1]
  def change
    add_column :expenses, :date, :date
  end
end
