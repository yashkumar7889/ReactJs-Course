import React from 'react'

function MeetupList(props) {
    return (
        <li>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
        </li>
    )
}

export default MeetupList
