import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  const cards = props.cards.map((card, idx) =>
  <Card 
    key={idx}
    listId={props.listId}
    cardId={card.id}
    title={card.title}
    content={card.content}
    onDeleteCard={props.onDeleteCard}
    />
  )
  return (
  <section className="List">
      <header className="List-header">
          <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
          {cards}
          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
      </div>
  </section>
  )
}

List.defaultProps = {
  header: "",
  cards: []
}

export default List;