import React, { useState } from 'react';
const StudentForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            age,
        };
        props.func(val);
        setName('');
        setAge('');
    };
    return (
        <div>
            <form onSubmit={transferValue}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
                <label>Age</label>
                <input type="text" value={age} onChange={(e) => { setAge(e.target.value); }} /><br />
                <button> Submit</button>
            </form>
        </div>
    );
}
export default StudentForm;