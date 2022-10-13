import {Modal, Form, ModalBody, FormGroup, FormLabel, FormControl, FormSelect, Button, Stack} from "react-bootstrap"
import React, {useState} from "react"
import useFetch from "./useFetch";

const CreateExpense = () => {
    const [amount, setAmount] = useState(" ")
    const [category, setCategory] = useState("")
    const [month, setMonth] = useState("")

    const {data: categories, isPending, error} = useFetch("/categories")

  return (
    <div>CreateExpense</div>
  )
}

export default CreateExpense