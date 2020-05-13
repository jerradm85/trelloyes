import React from 'react';
import './App.css';
import List from './composition/List';

function App(props) {
  const allCards = props.store.allCards;
  const lists = props.store.lists;

  const data = lists.map((list) => {
      // console.log(list.cardIds)
      const cards = list.cardIds.map(cardId => allCards[cardId])

        console.log(cards)
      return(
        <List 
          key={list.id} 
          header={list.header} 
          cards={cards} 
          />
      )
      
      })

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {data}
    </div>
  </main>
  );
}

export default App;
