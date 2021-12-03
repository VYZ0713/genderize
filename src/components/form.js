import React, { useState } from 'react';
import Textinput from './elements/textinput';
import Button from './elements/button';

const Form = ({set}) => {

    const [input, setinput] = useState();

    const submit = () => {
        fetch(`http://localhost:5000/add`, {
            method: 'POST',
            body: JSON.stringify({
                name: `${input}`
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.gender === undefined) {
                fetch(`http://localhost:5000/${data.name}`)
                .then(res => res.json())
                .then(d => {
                    set(d.gender);
                })
                .catch(err => console.log(`Error : ${err}`));
            } else {
                set(data.gender);
            }
        })
        .catch(err => console.log(`Error : ${err}`));
    }

    return (
        <form className='form card'>
            <div className='cardrow'>
                <Textinput placeholder='Enter Name'
                    keyhandler={(e) => {
                        setinput(e.target.value);
                    }}
                />
                <Button text='Enter' clickhandler={submit} />
            </div>
        </form>
    )
}

export default Form;