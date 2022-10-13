import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap"
import React, {useState} from "react"
import Fetch from "./Fetch";

const CreateExpense = ({ show, setShow, handleClose, user, onCreateExpense }) => {
    const [amount, setAmount] = useState(" ")
    const [category, setCategory] = useState("")
    const [month, setMonth] = useState("")

    const {data: categories, isPending, error} = Fetch("/categories")

    function handleSubmit(e){
     e.preventDefault()
     const newExpense = {
         amount: amount,
         category_id: category,
         date: month
     }

     fetch(`/users/${user.id}/expenses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
        })
       .then((res)=> res.json())
       .then ((newExpense) => onCreateExpense(newExpense))
       setAmount("")
       setCategory("")
       setMonth("")
       setShow(false)
    }


  return (
    <Modal show={show}>
        <Form className="mt-3 mb-3">
         <Modal.Title>Create Expense</Modal.Title>
         <ModalBody>
             <FormGroup className="mb-3" controlId="amount">
                 <FormLabel>Amount</FormLabel>
                 <FormControl type="number" placeholder="$" onChange={(e)=>setAmount(e.target.value)}></FormControl>
             </FormGroup>
             <FormGroup className="mb-3" controlId="category">
                 <FormLabel>Category</FormLabel>
                 <Form.Select onChange={(e)=>setCategory(e.target.value)}>
                     {categories.map(category=>(
                         <option key={category.id} value={category.id}>{category.category}</option>
                     ))}
                 </Form.Select>
             </FormGroup>
             <Form.Group controlId="date">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="month" name="date" placeholder="Date" onChange={(e)=>setMonth(e.target.value)}/>
            </Form.Group>
             <Button variant="info" onClick={handleClose}> Close</Button>
         </ModalBody>
         <Button variant="info" onClick={handleSubmit}> Create</Button>
        </Form >
    </Modal>
  )
}

export default CreateExpense