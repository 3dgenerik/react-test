import React from "react";
import './Card.css'

const Card = ({id, name, username, email}) => {
    return(
        <div className = " dib pa3 ma3 br3 bg-light-green tc shadow-5 grow">
            <h2>{name}</h2>
            <img alt = "roboimage" src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h1>{username}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;