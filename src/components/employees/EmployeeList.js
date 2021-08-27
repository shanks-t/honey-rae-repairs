import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialties, setSpecialties] = useState("")
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(
        () => {
            const justSpecialties = employees.map(employee => employee.specialty)
            setSpecialties(justSpecialties.join(`, `))
    }, 
    [employees])

    return (
        <>
            <div>
                Specialties: {employeeSpecialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
