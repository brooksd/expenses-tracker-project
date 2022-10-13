import React from 'react'

const AddExpense = () => {
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