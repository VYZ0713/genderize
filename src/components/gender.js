import React from 'react';

const Gender = ({is}) => {
    return (
        <div className='gender'>
            {
                is ? (is === 'male') ? <span>&#128104;</span> : <span>&#128105;</span> : null
            }
        </div>
    )
}

export default Gender;