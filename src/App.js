import React from 'react';
import './App.css';
import List from './composition/List';

class App extends React.Component {
  state = {
    store: {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: ['l', 'm'],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }

  handleDeleteCard = (listId, cardId) => {
    const deleted = this.state.store.lists.map(list => {
      const filter = list.cardIds.filter(id => id !== cardId)
      list.cardIds = filter;
      return list;
    })
    const newStore = this.state.store
    newStore.lists = deleted
    this.setState({
      store: newStore
    })
  }

  render() {
    // const allCards = this.state.store.allCards;
    // const lists = this.state.store.lists;

    const data = this.state.store.lists.map((list) => {
      // console.log(list.cardIds)
      const cards = list.cardIds.map(cardId => {
        return this.state.store.allCards[cardId]
      })

      // console.log(cards)
      return (
        <List
          key={list.id}
          listId={list.id}
          header={list.header}
          cards={cards}
          onDeleteCard={this.handleDeleteCard}
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
    )
  }
}

export default App;
