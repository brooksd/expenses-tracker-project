import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button, Stack} from "react-bootstrap"
import React, {useState} from "react"
import useFetch from "./useFetch";

const CreateExpense = () => {
    const [amount, setAmount] = useState(" ")
    const [category, setCategory] = useState("")
    const [month, setMonth] = useState("")

    const {data: categories, isPending, error} = useFetch("/categories")

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
       .then((r)=> r.json())
       .then ((newExpense)=>onCreateExpense(newExpense))
       setAmount("")
       setCategory("")
       setMonth("")
       setShow(false)
    }


  return (
    <div>CreateExpense</div>
  )
}

export default CreateExpense