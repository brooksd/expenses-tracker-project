class ExpensesController < ApplicationController
    before_action :user_authorized_to_see

    def index
        user = user_find_params
        expenses = user.expenses
        render json: expenses, status: :ok
    end

    def show
        expenses = expense_find_params
        render json: expenses
    end

    def create
        user = user_find_params
        expenses = user.expenses.create!(expense_params)
        render json: expenses, status: :created
    end

    def update
        expense = expense_find_params
        update_expense = expense.update!(expense_params)
        render json: expense
    end

    def destroy
        user = user_find_params
        expense = user.expenses
        expense = expense_find_params
        expense.destroy
        head :no_content
    end

    private

    def expense_find_params
        Expense.find(params[:id])
    end

    def user_find_params
        User.find(params[:user_id])
    end

    def expense_params
        params.require(:expense).permit(:id, :amount, :user_id, :category_id, :date)
    end

    def user_authorized_to_see
        user = user_find_params
        user_permitted = @current_user.id == user.id
        render json: { error: "You are not Authorized to view other's expenses" }, status: :forbidden unless user_permitted
    end
end
