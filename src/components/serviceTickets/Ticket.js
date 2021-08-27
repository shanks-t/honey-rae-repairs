import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

export const Ticket = () => {
    const [ ticket, assignTicket ] = useState({}) 
    const [ employees, setEmployees ] = useState([])
    const { ticketId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
            .then(res => res.json())
            .then((data) => {
                assignTicket(data)
            })
        },
        [ ticketId]
    )

    useEffect(
        () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((data) => {
                setEmployees(data)
            })
            },
        [] // Only run when intial JSX rendering is complete
    )

    const assignEmployee = (changeEvent) => {
        const newServiceTicketObject = {
            "customerId": parseInt(localStorage.getItem("honey_customer")),
            "employeeId": parseInt(changeEvent.target.value),
            "description": ticket.description,
            "emergency": ticket.emergency,
            "dateCompleted": ticket.dateCompleted
        }

        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newServiceTicketObject)
        })
            .then(() => {
                history.push("/tickets")
            }) 
    }

    return (
        <>
            <h2>Ticket {ticketId} Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ ticket.description }</h3>
                <div className="ticket__customer">{ ticket.customer?.name }</div>
                <div className="ticket__employee"> 
                    <select name="" id="employee" onChange={ assignEmployee }>
                    {
                        employees.map(
                            (employee) => {
                                return <option value={employee.id} key={`employees--${employee.id}`}>
                                    { employee.name }
                                </option>
                            }
                        )
                    }
                    </select>
                </div>
            </section>
        </>
    )
}