import React, { useState } from 'react';

const StudentForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeAge = (event) => {
        setAge(event.target.value);
    };

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            age,
        };
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setName('');
        setAge('');
    };

    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={changeName} />
            <label>Age</label>
            <input type="text" value={age} onChange={changeAge} /><br />
            <button onClick={transferValue}> Submit</button>
        </div>
    );
}

export default StudentForm;