import React, {Fragment} from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const CardsArray = robots.map((item) => {
        return (

            <Card
                key = {item.id}
                id = {item.id} 
                name = {item.name}
                username = {item.username}
                email = {item.email}

            />
        )
    })
    return(
        <Fragment>
            {CardsArray};
        </Fragment>  
    )
}

export default CardList;