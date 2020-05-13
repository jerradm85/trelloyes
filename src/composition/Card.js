import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Card.defaultProps = {
  title: "",
  content: ""
}

export default Card;