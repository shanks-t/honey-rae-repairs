import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
 
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )


    return (
        <>
            <div>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>

            </div>
            {

                tickets.map(
                    (ticket) => {
                        return (
                        <div key={`ticket--${ticket.id}`}>
                        { //check value of emergency key
                            (ticket.emergency === true) ? (
                                <div className="emergency">
                            <p className={`ticket`}>
                                {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                        </div>
                            ) : (
                        <div>
                            <p className={`ticket`}>
                                {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                        </div>
                            )
                        }
                        </div>
                        )
                    }
                )
            }
        </>
    )
}