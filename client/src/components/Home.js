import React, {useState} from 'react'
import {Container, Button,  Row, Stack} from "react-bootstrap"
import styled from "styled-components"
import ExpenseCard from "./ExpenseCard"
import CreateExpense from "./CreateExpense";
import Fetch from "./Fetch";
import { useHistory} from "react-router-dom";

const Home = ({ user, setUser }) => {

  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const date = `${currentYear}-${
    currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`
  }`;

  const history = useHistory();
  const [show, setShow] = useState(false);
  const [month, setMonth] = useState(date);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    data: expenses,
    setData: setExpenses,
    isPending,
    error,
  } = Fetch(`/users/${user.id}/expenses`);

  const handleMonthClick = (e) => {
    setMonth(e.target.value);
  };

  const onCreateExpense = (newExpense) => {
    const newExpensesArray = [...expenses, newExpense];
    setExpenses(newExpensesArray);
  };

  const onAddExpense = (updatedExpense) => {
    const updatedExpensesArray = expenses.map((expense) => {
      if (expense.id === updatedExpense.id) {
        return updatedExpense;
      } else {
        return expense;
      }
    });
    setExpenses(updatedExpensesArray);
  };

  function onDelete(id) {
    const notDeletedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(notDeletedExpenses);
  }

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
    history.push("/");
  };

  let oneExpense = expenses
    .filter((expense) => {
      if (expense.date === month) {
        return expense;
      }
    })
    .map((expense) => {
      return (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onAddExpense={onAddExpense}
          user={user}
          onDelete={onDelete}
        />
      );
    });

  const total = expenses
    .filter((expense) => {
      if (expense.date === month) {
        return expense;
      }
    })
    .reduce((totalExpense, expense) => {
      return totalExpense + expense.amount;
    }, 0);

  return (
     <Container className="my-3">
        <Button variant="info" onClick={handleShow}> Create Expense</Button>
        <Button variant="info" onClick={handleLogout} className="float-end">Log Out</Button>
          <CreateExpense show={show} setShow={setShow} handleClose={handleClose} user={user} onCreateExpense={onCreateExpense}/>
            <Row className="mt-5">
              <Stack direction="horizontal" gap={3} className="mb-4">
                <Button variant="secondary" value ="2022-01" onClick = {handleMonthClick}>January</Button>
                <Button variant="secondary" value ="2022-02" onClick = {handleMonthClick}>February</Button>
                <Button variant="secondary" value ="2022-03" onClick = {handleMonthClick}>March</Button>
                <Button variant="secondary" value ="2022-04" onClick = {handleMonthClick}> April</Button>
                <Button variant="secondary" value ="2022-05" onClick = {handleMonthClick}>May</Button>
                <Button variant="secondary" value ="2022-06" onClick = {handleMonthClick}>June</Button>
                <Button variant="secondary" value ="2022-07" onClick = {handleMonthClick}> July</Button>
                <Button variant="secondary" value ="2022-08" onClick = {handleMonthClick}>August</Button>
                <Button variant="secondary" value ="2022-09" onClick = {handleMonthClick}>September</Button>
                <Button variant="secondary" value ="2022-10" onClick = {handleMonthClick}> October</Button>
                <Button variant="secondary" value ="2022-11" onClick = {handleMonthClick}>November</Button>
                <Button variant="secondary" value ="2022-12" onClick = {handleMonthClick}>December</Button>
             </Stack>
             {error && <div>{error}</div>} 
             {isPending && <div>Loading...</div> }  
             {oneExpense}
          </Row>
            <StyledTotal>Total: ${total} in {month} </StyledTotal>
        </Container>
 
  )
}

export default Home

const StyledTotal = styled.h3 `
padding-top: 3rem;
`