import React from 'react';

const style = {
    flex: 1
}

const Button = ({clickhandler, text}) => {
    return (
        <div className='inputcont' style={style}>
            <button className='btn' type='button' onClick={clickhandler}>{text}</button>
        </div>
    )
}

export default Button;