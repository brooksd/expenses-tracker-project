import {useState} from "react"
import AddExpense from "./AddExpense"
import {Card, Stack, Button} from "react-bootstrap"

function ExpenseCard({expense, onAddExpense, user, onDelete}){

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleDelete(){
    fetch(`/users/${user.id}/expenses/${expense.id}`,{
        method: "DELETE",
    })
    onDelete(expense.id)
   }


    return(
    <Card border="primary" style={{ width: '18rem' }}>
    <h2>${expense.amount}</h2>
    <h3>{expense.category.category}</h3>
    <Stack direction="horizontal" gap="2" className="mt-3 mb-3 mr-2">
        <Button variant="outline-info" onClick={handleShow} value={expense.id}>Add Expense</Button>
        <Button variant="outline-info" value={expense.id} onClick={(e)=>handleDelete(e)}>Delete</Button>
        <AddExpense show={show} setShow={setShow} handleClose={handleClose} expense={expense} onAddExpense={onAddExpense} user={user}/>
    </Stack>
    </Card>
    )
}

export default ExpenseCard

