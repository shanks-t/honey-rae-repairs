import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [ employee, assignEmployee ] = useState({}) 
    const { employeeId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then((data) => {
                assignEmployee(data)
            })
        },
        [ employeeId]
    )

    return (
        <>
            <h2>Employee {employeeId} Details</h2>
            <section className="employee">
                <h3 className="employee__description">{ employee.name }</h3>
                <div className="employee__customer">{ employee.specialty }</div>

            </section>
        </>
    )
}