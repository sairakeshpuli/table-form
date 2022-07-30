import React, { useEffect, useState } from 'react';
import StudentForm from '../Form';
import "./index.css";


const TableData = () => {
    const [tabdata, setTabdata] = useState([]);
    useEffect(() => {
        fetch('https://62da7ec69eedb699636fc58d.mockapi.io/todolist')
            .then(response => response.json())
            .then(json => setTabdata(json))
    }, []);

    const tableRows = tabdata.map((info) => {
        return (

            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.age}</td>
            </tr >

        );
    });

    const addRows = (data) => {
        const totalStudents = tabdata.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...tabdata];
        updatedStudentData.push(data);
        setTabdata(updatedStudentData);
    };

    return (
        <div>
            <StudentForm func={addRows} /> <br />
            <table id="table-data">

                <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>

                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
}

export default TableData;