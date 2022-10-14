class ExpensesController < ApplicationController

    before_action :user_authorized_to_view
    
    #path /users/:user_id/expenses  action expenses#index
    def index
        user = User.find(params[:user_id])
        expenses = user.expenses
        render json: expenses, each_serializer: ExpenseSerializer
    end


    #path /users/user_id/expenses
    def create
        user = User.find(params[:user_id])
        expense = user.expenses.create!(expense_params)
        render json: expense, status: :created
    end

    #path /users/user_id/expenses:id  action#show

    def show
        expenses = Expense.find(params[:id])
        render json: expenses
    end


    #path / users/user_id/expenses/:id action#update

    def update
        expense = Expense.find(params[:id])
        expense2 = expense.update!(expense_params)
        render json: expense
    end

    #  /users/:user_id/expenses/:id

    def destroy
        user = User.find(params[:user_id])
        expense = user.expenses
        expense = Expense.find(params[:id])
        expense.destroy
        head :no_content
    end

    private

    # def expense_find_params
    #     Expense.find(params[:id])
    # end

    # def user_find_params
    #     User.find(params[:user_id])
    # end

    def expense_params
        params.require(:expense).permit(:id, :amount, :user_id, :category_id, :date)
    end

    def user_authorized_to_view
        user = User.find(params[:user_id])
        user_permitted = @current_user.id == user.id
        render json: { error: "You are not Authorized to view other's expenses" }, status: :forbidden unless user_permitted
    end
end
