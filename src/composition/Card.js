import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <button type="button"
              onClick={() => props.onDeleteCard(props.listId, props.card.id)}>
                delete
            </button>
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
        </div>
    )
}

Card.defaultProps = {
  card: {
    title: "",
    content: ""
  }
}

export default Card;