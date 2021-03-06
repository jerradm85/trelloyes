import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const obj = {lists: [], allCards: {}};

  ReactDOM.render(<App store={obj}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const obj = {lists: [], allCards: {}};
  const tree = renderer
    .create(<App store={obj}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
