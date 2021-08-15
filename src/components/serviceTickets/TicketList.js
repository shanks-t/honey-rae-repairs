import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )


    return (
        <>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`customer--${ticket.id}`}>{ticket.description}</p>
                    }
                )
            }
        </>
    )
}