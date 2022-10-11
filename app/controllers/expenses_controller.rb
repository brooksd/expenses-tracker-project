class ExpensesController < ApplicationController

    def index
        user = User.find(params[:user_id])
        expenses = user.expenses
        render json: expenses, status: :ok
    end

    def show
        expenses = expense_find_params
        render json: expenses
    end

    def create
        user = User.find(params[:user_id])
        expenses = user.expenses.create!(expense_params)
        render json: expenses, status: :created
    end

    def update
        expense = expense_find_params
        update_expense = expense.update!(expense_params)
        render json: expense
    end

    private

    def expense_find_params
        Expense.find(params[:id])
    end

    def expense_params
        params.require(:expense).permit(:id, :amount, :user_id, :category_id, :date)
    end
end
