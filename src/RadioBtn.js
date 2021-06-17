import React from 'react';

const RadioBtn = ({radioSelect}) => {

    return(
        <div className = "tl light-blue">
            <input className = "ma2" type="radio" name="option" value="name" onClick = {radioSelect}/>Search by name<br/>
            <input className = "ma2" type="radio" name="option" value="username" onClick = {radioSelect}/>Search by username<br/>
            <input className = "ma2" type="radio" name="option" value="email" onClick = {radioSelect}/>Search by email<br/>
        </div>
    )
}

export default RadioBtn;