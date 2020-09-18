import React from 'react'

function EventHandlingDemo() {

    function clickHandler() {
        console.log('click function method');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Function method</button>
        </div>
    )
}

export default EventHandlingDemo
