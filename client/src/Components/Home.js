import React, {useState} from "react"
import {Container, Button,  Row, Stack} from "react-bootstrap"
import styled from "styled-components"
import ExpenseCard from "./ExpenseCard"
import CreateExpense from "./CreateExpense";
import useFetch from "./useFetch";
import { useHistory} from "react-router-dom";
import "./Sidebar.css";

const Home = ({setUser, user}) => {
    
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
    } = useFetch(`/users/${user.id}/expenses`);

    function handleMonthClick(e) {
      setMonth(e.target.value);
    }

    function onCreateExpense(newExpense) {
      const newExpensesArray = [...expenses, newExpense];
      setExpenses(newExpensesArray);
    }

    function onAddExpense(updatedExpense) {
      const updatedExpensesArray = expenses.map((expense) => {
        if (expense.id === updatedExpense.id) {
          return updatedExpense;
        } else {
          return expense;
        }
      });
      setExpenses(updatedExpensesArray);
    }

    function onDelete(id) {
      const notDeletedExpenses = expenses.filter(
        (expense) => expense.id !== id
      );
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
      <Container className="m-0 p-0 container-fluid">
        <div className="row d-flex h-100 ">
          <div className="col-3 bg-primary border border-danger m-0">
            <div class="wrapper">
            <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
          </nav>
          </div>
          </div>
          <div className="col-8 border border-primary m-1">

        <Button variant="primary" onClick={handleShow}>
          {" "}
          Create Expense
        </Button>
        <Button variant="primary" onClick={handleLogout} className="float-end">
          Log Out
        </Button>
        <CreateExpense
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          user={user}
          onCreateExpense={onCreateExpense}
        />
        <Row className="mt-5">
          <Stack direction="horizontal" gap={3} className="mb-4">
            <Button
              variant="secondary"
              value="2022-01"
              onClick={handleMonthClick}
            >
              January
            </Button>
            <Button
              variant="secondary"
              value="2022-02"
              onClick={handleMonthClick}
            >
              February
            </Button>
            <Button
              variant="secondary"
              value="2022-03"
              onClick={handleMonthClick}
            >
              March
            </Button>
            <Button
              variant="secondary"
              value="2022-04"
              onClick={handleMonthClick}
            >
              {" "}
              April
            </Button>
            <Button
              variant="secondary"
              value="2022-05"
              onClick={handleMonthClick}
            >
              May
            </Button>
            <Button
              variant="secondary"
              value="2022-06"
              onClick={handleMonthClick}
            >
              June
            </Button>
            <Button
              variant="secondary"
              value="2022-07"
              onClick={handleMonthClick}
            >
              {" "}
              July
            </Button>
            <Button
              variant="secondary"
              value="2022-08"
              onClick={handleMonthClick}
            >
              August
            </Button>
            <Button
              variant="secondary"
              value="2022-09"
              onClick={handleMonthClick}
            >
              September
            </Button>
            <Button
              variant="secondary"
              value="2022-10"
              onClick={handleMonthClick}
            >
              {" "}
              October
            </Button>
            <Button
              variant="secondary"
              value="2022-11"
              onClick={handleMonthClick}
            >
              November
            </Button>
            <Button
              variant="secondary"
              value="2022-12"
              onClick={handleMonthClick}
            >
              December
            </Button>
          </Stack>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {oneExpense}
        </Row>
        <StyledTotal>
          Total: ${total} in {month}{" "}
          </StyledTotal>
          </div>
        </div>
      </Container>
    );
}

export default Home

const StyledTotal = styled.h3 `
padding-top: 3rem;
`