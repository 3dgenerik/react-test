import React from 'react';

const Scroll = (props) => {
    //style is always in {}
    const style = {
        overflowY: 'scroll',
        border: '5px solid rgba(255,255,255,0.1)',
        height:'1000px'
    };

    return(
        <div style = {style}>
            {props.children}
        </div>
    )
}
export default Scroll;