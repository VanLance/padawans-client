import { useState } from 'react';

import Container from "react-bootstrap/Container";

export default function Padawans() {

    const instructor = "brandt"

    const students = [
        "carlos", 'robin', 'faisal', 'buhay', 'adrian', 'bryce', 'rhett', 'john', 'judah', 'jenequa', 'cahiyal', 'tan', 'jessica'
    ];

    const [ studentSelected, setStudentSelected ] = useState('?');
    console.log(studentSelected);

    function getRandomStudent() {
        return students[Math.floor(Math.random() * students.length)]
    }

    return (
        <Container>
            <p>Instructor {instructor}</p>
            <div>
                <p>Today's Whiteboard: {studentSelected}</p>
                <button onClick={()=>{
                    setStudentSelected( getRandomStudent() );
                }}>Student Picker</button>
            </div>
        </Container>


    )
}
