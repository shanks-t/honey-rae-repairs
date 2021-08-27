import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { Employee } from "./employees/Employee";
import { TicketList } from "./serviceTickets/TicketList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { Ticket } from "./serviceTickets/Ticket";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
        
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
        
            <Route exact path="/tickets">
                <TicketList />
            </Route>
         
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
        
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}
