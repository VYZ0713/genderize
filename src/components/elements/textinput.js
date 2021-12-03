import React from 'react';
import '../../App.css';

const style = {
    flex: 3
}

const Textinput = ({placeholder, keyhandler}) => {
    return (
        <div className='inputcont' style={style}>
            <input type='text' placeholder={placeholder} className='input' 
                onKeyUp={keyhandler}
                onFocus={e => {
                    e.target.value = '';
                }} />
        </div>
    )
}

export default Textinput;