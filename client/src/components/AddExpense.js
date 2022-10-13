import React, { useState } from 'react';
import { Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

const AddExpense = ({ show, setShow, handleClose, expense, onAddExpense, user }) => {
     
    const [ newAmount, setNewAmount ] = useState("")
    const [errors, setErrors ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()

        let number_1=expense.amount
        let number_2 = Number(newAmount)
        let newNumber = number_1 + number_2

        const updatedExpense = {
            amount: newNumber
        } 
        console.log(updatedExpense)

        fetch(`/users/${user.id}/expenses/${expense.id}`, {
        method: "PATCH",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExpense),
        }).then((res) => {
        if (res.ok) {
          res.json().then((updatedExpense) => {
            setNewAmount("");
            setErrors([]);
           onAddExpense(updatedExpense);
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
      setShow(false)
    }
  return (
    <Modal show={show}>
        <Form className="mt-3 mb-3">
        <Modal.Title>AddExpense</Modal.Title>
        <ModalBody>
            <FormGroup className="mb-3" controlId="amount">
                <FormLabel>Amount</FormLabel>
                <FormControl type="number" value={newAmount} placeholder="$" onChange={(e)=>setNewAmount(e.target.value)}></FormControl>
            </FormGroup>
            <FormGroup className="mb-3" controlId="category">
                <FormLabel>Category</FormLabel>
                <Form.Select value={expense.category_id} >
                <option>       
                {expense.category.category}
                </option> 
                 </Form.Select>
            </FormGroup>
            <Button variant="info" onClick={handleClose}> Close</Button>
        </ModalBody>
         <Button variant="info" onClick={handleSubmit} > Create</Button>
        </Form >
    </Modal>
  )
}

export default AddExpense